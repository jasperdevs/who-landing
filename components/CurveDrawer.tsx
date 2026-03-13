"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const ICON_SRCS = [
  "/icons/x-appstore-raw.jpg",
  "/icons/instagram-appstore-raw.jpg",
  "/icons/tiktok-appstore-raw.jpg",
  "/icons/threads-appstore-icon.png",
  "/icons/bluesky-appstore-icon.png",
  "/icons/linkedin-appstore-icon.png",
];

const ICON_SIZE = 26;
const ICON_GAP = 28;
const FADE_ZONE = 0.45;
const VORTEX_ZONE = 0.12;
const SPEED = 0.0008;

function catmullRom(pts: { x: number; y: number }[], t: number) {
  const n = pts.length;
  const segs = n - 1;
  const st = Math.max(0, Math.min(1, t)) * segs;
  const seg = Math.min(Math.floor(st), segs - 1);
  const lt = st - seg;
  const lt2 = lt * lt;
  const lt3 = lt2 * lt;
  const p0 = pts[Math.max(seg - 1, 0)];
  const p1 = pts[seg];
  const p2 = pts[Math.min(seg + 1, n - 1)];
  const p3 = pts[Math.min(seg + 2, n - 1)];
  return {
    x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * lt + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * lt2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * lt3),
    y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * lt + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * lt2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * lt3),
  };
}

function buildArcTable(pts: { x: number; y: number }[], samples = 200) {
  const table: number[] = [0];
  let total = 0;
  let prev = catmullRom(pts, 0);
  for (let i = 1; i <= samples; i++) {
    const cur = catmullRom(pts, i / samples);
    total += Math.sqrt((cur.x - prev.x) ** 2 + (cur.y - prev.y) ** 2);
    table.push(total);
    prev = cur;
  }
  for (let i = 0; i < table.length; i++) table[i] /= total;
  return { table, totalLen: total };
}

function arcToT(table: number[], s: number) {
  const n = table.length - 1;
  const c = Math.max(0, Math.min(1, s));
  for (let i = 0; i < n; i++) {
    if (table[i + 1] >= c) {
      const seg = table[i + 1] - table[i];
      const frac = seg > 0 ? (c - table[i]) / seg : 0;
      return (i + frac) / n;
    }
  }
  return 1;
}

function smoothPoints(pts: { x: number; y: number }[], passes = 3) {
  let result = [...pts];
  for (let p = 0; p < passes; p++) {
    const next: { x: number; y: number }[] = [result[0]];
    for (let i = 0; i < result.length - 1; i++) {
      const a = result[i];
      const b = result[i + 1];
      next.push({ x: a.x * 0.75 + b.x * 0.25, y: a.y * 0.75 + b.y * 0.25 });
      next.push({ x: a.x * 0.25 + b.x * 0.75, y: a.y * 0.25 + b.y * 0.75 });
    }
    next.push(result[result.length - 1]);
    result = next;
  }
  return result;
}

export default function CurveDrawer() {
  const drawCanvasRef = useRef<HTMLCanvasElement>(null);
  const renderCanvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [rawPoints, setRawPoints] = useState<{ x: number; y: number }[]>([]);
  const [exported, setExported] = useState(false);
  const [active, setActive] = useState(false);
  const [rendering, setRendering] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(false);
  const animRef = useRef(0);
  const offsetsRef = useRef<number[]>([]);

  // Hide default FloatingIcons when active
  useEffect(() => {
    const el = document.getElementById("floating-icons-canvas");
    if (el) el.style.display = active ? "none" : "";
    return () => { if (el) el.style.display = ""; };
  }, [active]);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    ICON_SRCS.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => { loaded++; if (loaded === ICON_SRCS.length) loadedRef.current = true; };
      imgs[i] = img;
    });
    imagesRef.current = imgs;
  }, []);

  const getPos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const getSimplified = useCallback(() => {
    if (rawPoints.length < 5) return rawPoints;
    const smoothed = smoothPoints(rawPoints, 2);
    const step = Math.max(1, Math.floor(smoothed.length / 13));
    return smoothed.filter((_, i) => i % step === 0 || i === smoothed.length - 1);
  }, [rawPoints]);

  // Drawing canvas — draw the stroke
  useEffect(() => {
    if (!active || rendering) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;

    ctx.clearRect(0, 0, w, h);

    // Center line
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.stroke();
    ctx.setLineDash([]);

    if (rawPoints.length < 2) return;

    // Draw raw stroke
    ctx.strokeStyle = "rgba(185,242,124,0.4)";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(rawPoints[0].x, rawPoints[0].y);
    for (let i = 1; i < rawPoints.length; i++) ctx.lineTo(rawPoints[i].x, rawPoints[i].y);
    ctx.stroke();

    // Draw smoothed spline
    const simplified = getSimplified();
    if (simplified.length < 3) return;
    const normR = simplified.map((p) => ({ x: p.x / w, y: p.y / h }));
    const normL = simplified.map((p) => ({ x: (2 * cx - p.x) / w, y: p.y / h }));

    [normR, normL].forEach((pts, si) => {
      ctx.strokeStyle = si === 0 ? "rgba(185,242,124,0.3)" : "rgba(169,198,255,0.3)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const pos = catmullRom(pts, i / 100);
        if (i === 0) ctx.moveTo(pos.x * w, pos.y * h);
        else ctx.lineTo(pos.x * w, pos.y * h);
      }
      ctx.stroke();
    });
  }, [active, rawPoints, rendering, getSimplified]);

  // Render canvas — icons animation (same logic as FloatingIcons)
  useEffect(() => {
    if (!active || !rendering) {
      cancelAnimationFrame(animRef.current);
      return;
    }
    const canvas = renderCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const simplified = getSimplified();
    if (simplified.length < 3) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cx = w / 2;

    const normR = simplified.map((p) => ({ x: p.x / w, y: p.y / h }));
    const normL = simplified.map((p) => ({ x: (2 * cx - p.x) / w, y: p.y / h }));

    // Calculate icon count from arc length
    const arcR = buildArcTable(normR);
    const arcL = buildArcTable(normL);
    const avgDim = Math.sqrt(w * w + h * h);
    const pixelLen = arcR.totalLen * avgDim;
    const count = Math.max(8, Math.floor(pixelLen / (ICON_SIZE + ICON_GAP)));
    const spacing = 1 / count;

    // Init offsets
    const offsets: number[] = [];
    for (let side = 0; side < 2; side++) {
      for (let i = 0; i < count; i++) offsets.push(i * spacing);
    }
    offsetsRef.current = offsets;

    function render() {
      animRef.current = requestAnimationFrame(render);
      if (!ctx || !loadedRef.current) return;
      ctx.clearRect(0, 0, w, h);

      const offs = offsetsRef.current;
      const total = count * 2;

      for (let idx = 0; idx < total; idx++) {
        offs[idx] += SPEED;
        if (offs[idx] > 1) offs[idx] -= 1;

        const side = idx < count ? 0 : 1;
        const pts = side === 0 ? normR : normL;
        const table = side === 0 ? arcR.table : arcL.table;
        const s = offs[idx];
        const t = arcToT(table, s);
        const pos = catmullRom(pts, t);
        const x = pos.x * w;
        const y = pos.y * h;

        // Tangent
        const dt = 0.005;
        const next = catmullRom(pts, Math.min(t + dt, 1));
        const prev = catmullRom(pts, Math.max(t - dt, 0));
        const angle = Math.atan2((next.y - prev.y) * h, (next.x - prev.x) * w);

        // Fade
        let alpha = 1;
        if (s < FADE_ZONE) { const p = s / FADE_ZONE; alpha = p * p * (3 - 2 * p); }
        else if (s > 1 - FADE_ZONE) { const p = (1 - s) / FADE_ZONE; alpha = p * p * (3 - 2 * p); }

        // Vortex
        let sz = ICON_SIZE;
        let extraSpin = 0;
        const endP = (s - (1 - VORTEX_ZONE)) / VORTEX_ZONE;
        if (endP > 0) {
          sz = ICON_SIZE * (1 - endP * 0.7);
          extraSpin = endP * endP * Math.PI * 2;
        }

        if (alpha < 0.01 || sz < 2) continue;
        const img = imagesRef.current[idx % ICON_SRCS.length];
        if (!img) continue;

        const r = sz * 0.22;
        const half = sz / 2;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(x, y);
        ctx.rotate(angle + extraSpin);
        ctx.beginPath();
        ctx.roundRect(-half, -half, sz, sz, r);
        ctx.clip();
        ctx.drawImage(img, -half, -half, sz, sz);
        ctx.restore();
      }
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, [active, rendering, rawPoints, getSimplified]);

  function handleDown(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!active || rendering) return;
    setDrawing(true);
    setExported(false);
    setRawPoints([getPos(e)]);
  }
  function handleMove(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!drawing || !active) return;
    setRawPoints((prev) => [...prev, getPos(e)]);
  }
  function handleUp() { setDrawing(false); }

  function exportCurve() {
    const canvas = drawCanvasRef.current;
    if (!canvas || rawPoints.length < 5) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const simplified = getSimplified();
    const normalized = simplified.map((p) => ({ x: +(p.x / w).toFixed(4), y: +(p.y / h).toFixed(4) }));
    const mirrored = simplified.map((p) => ({ x: +(1 - p.x / w).toFixed(4), y: +(p.y / h).toFixed(4) }));
    navigator.clipboard.writeText(JSON.stringify({ right: normalized, left: mirrored }, null, 2));
    setExported(true);
  }

  if (!active) {
    return (
      <button onClick={() => setActive(true)} className="fixed bottom-4 right-4 z-[9999] bg-ink text-cream px-4 py-2 text-sm font-bold" style={{ borderRadius: 8 }}>
        Draw Curve
      </button>
    );
  }

  return (
    <>
      {/* Render canvas — behind phone (z-0) */}
      {rendering && (
        <canvas
          ref={renderCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Drawing canvas — always on top of everything */}
      {!rendering && (
        <canvas
          ref={drawCanvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 9999, cursor: "crosshair" }}
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
        />
      )}

      <div className="fixed bottom-4 right-4 z-[9999] flex gap-2">
        <button onClick={() => { setRawPoints([]); setExported(false); setRendering(false); }} className="bg-ink text-cream px-4 py-2 text-sm font-bold" style={{ borderRadius: 8 }}>Clear</button>
        <button
          onClick={() => setRendering(!rendering)}
          className={`px-4 py-2 text-sm font-bold border-2 border-ink ${rendering ? "bg-apricot text-ink" : "bg-blue text-ink"}`}
          style={{ borderRadius: 8 }}
        >
          {rendering ? "Stop" : "Render"}
        </button>
        <button onClick={exportCurve} className="bg-lime text-ink px-4 py-2 text-sm font-bold border-2 border-ink" style={{ borderRadius: 8 }}>{exported ? "Copied!" : "Export"}</button>
        <button onClick={() => { setActive(false); setRawPoints([]); setRendering(false); }} className="bg-apricot text-ink px-4 py-2 text-sm font-bold border-2 border-ink" style={{ borderRadius: 8 }}>Close</button>
      </div>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-ink/80 text-cream px-4 py-2 text-xs font-bold" style={{ borderRadius: 8 }}>
        Draw on RIGHT side (auto-smoothed + mirrored). Render to preview. Export to copy.
      </div>
    </>
  );
}
