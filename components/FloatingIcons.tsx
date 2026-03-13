"use client";

import { useEffect, useRef } from "react";

const ICON_SRCS = [
  "/icons/x-appstore-raw.jpg",
  "/icons/instagram-appstore-raw.jpg",
  "/icons/tiktok-appstore-raw.jpg",
  "/icons/threads-appstore-icon.png",
  "/icons/bluesky-appstore-icon.png",
  "/icons/linkedin-appstore-icon.png",
];

const RIGHT_PATH = [
  { x: 0.5948, y: 0.1317 }, { x: 0.6958, y: 0.0255 },
  { x: 0.8096, y: 0.007 }, { x: 0.9042, y: 0.1308 },
  { x: 0.8419, y: 0.3103 }, { x: 0.6974, y: 0.3305 },
  { x: 0.6037, y: 0.4409 }, { x: 0.652, y: 0.5858 },
  { x: 0.7988, y: 0.5575 }, { x: 0.9032, y: 0.6339 },
  { x: 0.9, y: 0.8452 }, { x: 0.7385, y: 0.9171 },
  { x: 0.5846, y: 0.8007 }, { x: 0.5552, y: 0.6317 },
  { x: 0.5547, y: 0.6314 },
];

const LEFT_PATH = [
  { x: 0.4052, y: 0.1317 }, { x: 0.3042, y: 0.0255 },
  { x: 0.1904, y: 0.007 }, { x: 0.0958, y: 0.1308 },
  { x: 0.1581, y: 0.3103 }, { x: 0.3026, y: 0.3305 },
  { x: 0.3963, y: 0.4409 }, { x: 0.348, y: 0.5858 },
  { x: 0.2012, y: 0.5575 }, { x: 0.0968, y: 0.6339 },
  { x: 0.1, y: 0.8452 }, { x: 0.2615, y: 0.9171 },
  { x: 0.4154, y: 0.8007 }, { x: 0.4448, y: 0.6317 },
  { x: 0.4453, y: 0.6314 },
];

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

const ICON_SIZE = 26;
const ICON_GAP = 28; // px gap between icons
const SPEED = 0.0008;
const FADE_ZONE = 0.45;
const VORTEX_START = 0.82; // last 18% gets sucked in


function buildArcLengthTable(pts: { x: number; y: number }[], samples = 200) {
  const table: number[] = [0];
  let totalLen = 0;
  let prev = catmullRom(pts, 0);
  for (let i = 1; i <= samples; i++) {
    const cur = catmullRom(pts, i / samples);
    totalLen += Math.sqrt((cur.x - prev.x) ** 2 + (cur.y - prev.y) ** 2);
    table.push(totalLen);
    prev = cur;
  }
  for (let i = 0; i < table.length; i++) table[i] /= totalLen;
  return { table, totalLen };
}

// Compute pixel arc length for a path given canvas dimensions
function pixelArcLength(pts: { x: number; y: number }[], w: number, h: number, samples = 200) {
  let totalLen = 0;
  let prev = catmullRom(pts, 0);
  for (let i = 1; i <= samples; i++) {
    const cur = catmullRom(pts, i / samples);
    const dx = (cur.x - prev.x) * w;
    const dy = (cur.y - prev.y) * h;
    totalLen += Math.sqrt(dx * dx + dy * dy);
    prev = cur;
  }
  return totalLen;
}

function arcToT(arcTable: number[], s: number): number {
  const n = arcTable.length - 1;
  const clamped = Math.max(0, Math.min(1, s));
  for (let i = 0; i < n; i++) {
    if (arcTable[i + 1] >= clamped) {
      const segLen = arcTable[i + 1] - arcTable[i];
      const frac = segLen > 0 ? (clamped - arcTable[i]) / segLen : 0;
      return (i + frac) / n;
    }
  }
  return 1;
}

// Pre-compute arc tables
const rightArc = buildArcLengthTable(RIGHT_PATH);
const leftArc = buildArcLengthTable(LEFT_PATH);

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const loadedRef = useRef(false);
  const dimsRef = useRef({ w: 0, h: 0 });
  const visibleRef = useRef(true);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tOffsetsRef = useRef<{ offsets: number[]; count: number }>({ offsets: [], count: 0 });

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const obs = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    obs.observe(canvas);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function initCanvas() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width;
      const h = rect.height;
      dimsRef.current = { w, h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Calculate actual pixel arc length and determine icon count
      const pixelArcLen = pixelArcLength(RIGHT_PATH, w, h);
      const iconStep = ICON_SIZE + ICON_GAP;
      const count = Math.max(10, Math.floor(pixelArcLen / iconStep));
      const spacing = 1 / count;

      const offsets: number[] = [];
      for (let side = 0; side < 2; side++) {
        for (let i = 0; i < count; i++) {
          offsets.push(i * spacing);
        }
      }
      tOffsetsRef.current = { offsets, count };
    }

    function handleResize() {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(initCanvas, 150);
    }

    initCanvas();
    window.addEventListener("resize", handleResize);

    function draw() {
      if (!canvas || !ctx) return;
      frameRef.current = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      const { w, h } = dimsRef.current;
      if (w === 0 || !loadedRef.current) return;
      ctx.clearRect(0, 0, w, h);

      const { offsets, count } = tOffsetsRef.current;
      const total = count * 2;
      const spacing = 1 / count;

      for (let idx = 0; idx < total; idx++) {
        offsets[idx] += SPEED;
        if (offsets[idx] > 1) offsets[idx] -= 1;

        const side = idx < count ? 0 : 1;
        const path = side === 0 ? RIGHT_PATH : LEFT_PATH;
        const arcTable = side === 0 ? rightArc.table : leftArc.table;
        const s = offsets[idx];
        const t = arcToT(arcTable, s);
        const iconIdx = idx % ICON_SRCS.length;
        const img = imagesRef.current[iconIdx];
        if (!img) continue;

        const pos = catmullRom(path, t);
        const x = pos.x * w;
        const y = pos.y * h;

        // Tangent for rotation — follow the curve fully
        const dt = 0.005;
        const next = catmullRom(path, Math.min(t + dt, 1));
        const prev = catmullRom(path, Math.max(t - dt, 0));
        const angle = Math.atan2((next.y - prev.y) * h, (next.x - prev.x) * w);

        // Fade
        let alpha = 1;
        if (s < FADE_ZONE) {
          const p = s / FADE_ZONE;
          alpha = p * p * (3 - 2 * p);
        } else if (s > 1 - FADE_ZONE) {
          const p = (1 - s) / FADE_ZONE;
          alpha = p * p * (3 - 2 * p);
        }

        if (alpha < 0.01) continue;

        // Vortex — pull toward endpoint, shrink, accelerate
        let drawX = x;
        let drawY = y;
        let sz = ICON_SIZE;
        let drawAngle = angle;

        if (s > VORTEX_START) {
          const vt = (s - VORTEX_START) / (1 - VORTEX_START); // 0 to 1
          const eased = vt * vt; // quadratic ease-in for acceleration feel

          // Pull position toward the endpoint
          const endPt = catmullRom(path, 1);
          const ex = endPt.x * w;
          const ey = endPt.y * h;
          drawX = x + (ex - x) * eased * 0.5;
          drawY = y + (ey - y) * eased * 0.5;

          // Shrink
          sz = ICON_SIZE * (1 - eased * 0.75);

          // Rotate toward the hole
          const toHole = Math.atan2(ey - y, ex - x);
          drawAngle = angle * (1 - eased) + toHole * eased;
        }

        if (sz < 2) continue;

        const r = sz * 0.22;
        const half = sz / 2;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.filter = "grayscale(1) sepia(0.15) brightness(1.1)";
        ctx.translate(drawX, drawY);
        ctx.rotate(drawAngle);
        ctx.beginPath();
        ctx.roundRect(-half, -half, sz, sz, r);
        ctx.clip();
        ctx.drawImage(img, -half, -half, sz, sz);
        ctx.restore();
      }
    }

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      id="floating-icons-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
