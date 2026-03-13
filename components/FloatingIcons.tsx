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

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  iconIdx: number;
  life: number;
  maxLife: number;
  startDist: number;
  opacity: number;
  dist: number;
  rumbleOffset: number;
  side: number; // 0 = left, 1 = right
}

const PARTICLE_COUNT = 30;

// Deterministic round-robin for icon diversity
let spawnCounter = 0;

function createParticle(w: number, h: number, cx: number, cy: number): Particle {
  // Alternate sides strictly
  const side = spawnCounter % 2;
  const iconIdx = spawnCounter % ICON_SRCS.length;
  spawnCounter++;

  const pad = 120;
  const x = side === 0 ? -pad : w + pad;

  // Spawn at top or bottom third, not middle
  const topOrBottom = (spawnCounter % 4) < 2;
  const y = topOrBottom
    ? h * (0.02 + Math.random() * 0.3)
    : h * (0.7 + Math.random() * 0.28);

  const dx = cx - x;
  const dy = cy - y;
  const d = Math.sqrt(dx * dx + dy * dy);
  const speed = 0.28 + Math.random() * 0.12;

  return {
    x, y,
    vx: (dx / d) * speed,
    vy: (dy / d) * speed,
    size: 28 + Math.random() * 8,
    iconIdx,
    life: 0,
    maxLife: d / speed,
    startDist: d,
    opacity: 0,
    dist: d,
    rumbleOffset: Math.random() * Math.PI * 2,
    side,
  };
}

function seedParticles(w: number, h: number): Particle[] {
  const cx = w / 2;
  const cy = h * 0.6;
  const minDist = Math.min(w, h) * 0.1;
  const particles: Particle[] = [];
  spawnCounter = 0;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = createParticle(w, h, cx, cy);
    // Spread evenly across journey
    const t = i / PARTICLE_COUNT;
    const targetFrames = Math.floor(t * p.maxLife * 0.6);

    for (let f = 0; f < targetFrames; f++) {
      const dx = cx - p.x;
      const dy = cy - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist) break;
      const progress = Math.min(1 - dist / p.startDist, 0.95);
      const accel = 1 + progress * progress * 1.8;
      p.x += p.vx * accel;
      p.y += p.vy * accel;
      p.life = f + 1;
    }

    const dx = cx - p.x;
    const dy = cy - p.y;
    p.dist = Math.sqrt(dx * dx + dy * dy);
    const dot = dx * p.vx + dy * p.vy;

    if (dot < 0 || p.dist < minDist) {
      const fresh = createParticle(w, h, cx, cy);
      fresh.life = 5;
      for (let f = 0; f < 5; f++) { fresh.x += fresh.vx; fresh.y += fresh.vy; }
      fresh.dist = Math.sqrt((cx - fresh.x) ** 2 + (cy - fresh.y) ** 2);
      particles.push(fresh);
    } else {
      particles.push(p);
    }
  }
  return particles;
}

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const loadedRef = useRef(false);
  const initializedRef = useRef(false);
  const dimsRef = useRef({ w: 0, h: 0 });
  const tickRef = useRef(0);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    ICON_SRCS.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === ICON_SRCS.length) loadedRef.current = true;
      };
      imgs[i] = img;
    });
    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      dimsRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!initializedRef.current) {
        particlesRef.current = seedParticles(rect.width, rect.height);
        initializedRef.current = true;
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!canvas || !ctx) return;
      const { w, h } = dimsRef.current;
      if (w === 0) { frameRef.current = requestAnimationFrame(draw); return; }

      tickRef.current++;
      const tick = tickRef.current;
      const cx = w / 2;
      const cy = h * 0.6;
      ctx.clearRect(0, 0, w, h);

      if (!loadedRef.current) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }

      const absorb = Math.min(w, h) * 0.14;
      const warpStart = Math.min(w, h) * 0.45;

      // Update
      particlesRef.current.forEach((p, i) => {
        p.life++;
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const progress = Math.min(Math.max(1 - dist / p.startDist, 0), 0.95);

        const accel = 1 + progress * progress * 1.8;
        p.x += p.vx * accel;
        p.y += p.vy * accel;

        const dx2 = cx - p.x;
        const dy2 = cy - p.y;
        p.dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        const dot = dx2 * p.vx + dy2 * p.vy;
        const fadeIn = Math.min(p.life / (p.maxLife * 0.12), 1);
        const fadeOut = p.dist < absorb ? Math.pow(p.dist / absorb, 0.4) : 1;
        p.opacity = fadeIn * fadeOut * 0.8;

        if (p.dist < absorb * 0.03 || p.life > p.maxLife || dot < 0) {
          particlesRef.current[i] = createParticle(w, h, cx, cy);
        }
      });

      // Sort far first
      const sorted = [...particlesRef.current].sort((a, b) => b.dist - a.dist);

      // No background fill -- keep canvas fully transparent

      sorted.forEach((p) => {
        if (p.life < 3 || p.opacity < 0.01) return;
        const img = imagesRef.current[p.iconIdx];
        if (!img) return;

        const shrink = p.dist < absorb ? 0.1 + 0.9 * (p.dist / absorb) : 1;
        const drawSize = p.size * shrink;
        if (drawSize < 2) return;

        // Rumble near center
        const rumbleIntensity = p.dist < warpStart ? (1 - p.dist / warpStart) * 1.5 : 0;
        const rx = Math.sin(tick * 0.06 + p.rumbleOffset) * rumbleIntensity;
        const ry = Math.cos(tick * 0.08 + p.rumbleOffset * 1.3) * rumbleIntensity;

        const dx2 = cx - p.x;
        const dy2 = cy - p.y;

        // Warp stretch toward center
        let scaleX = 1;
        let scaleY = 1;
        let angle = 0;

        if (p.dist < warpStart) {
          const t = 1 - p.dist / warpStart;
          const warp = t * t * t * 2.5;
          angle = Math.atan2(dy2, dx2);
          scaleX = 1 + warp;
          scaleY = Math.max(1 - warp * 0.5, 0.2);
        }

        const r = drawSize * 0.22;
        const half = drawSize / 2;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x + rx, p.y + ry);

        if (p.dist < warpStart) {
          ctx.rotate(angle);
          ctx.scale(scaleX, scaleY);
          ctx.rotate(-angle);
        }

        ctx.beginPath();
        ctx.roundRect(-half, -half, drawSize, drawSize, r);
        ctx.clip();
        ctx.drawImage(img, -half, -half, drawSize, drawSize);
        ctx.restore();
      });

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
