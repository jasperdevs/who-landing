"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AppIconX, AppIconInstagram } from "./Icons";
import Avatar from "./Avatar";

const iconSrcs = [
  "/icons/x-appstore-raw.jpg",
  "/icons/instagram-appstore-raw.jpg",
  "/icons/tiktok-appstore-raw.jpg",
  "/icons/threads-appstore-icon.png",
  "/icons/bluesky-appstore-icon.png",
  "/icons/linkedin-appstore-icon.png",
];

// Spiral on left that straightens into a band going right
// Starts with a tight loop top-left, curves down and right, straightens to exit right
const TRAIL_PATH =
  "M120,30 C180,10 200,100 160,140 C120,180 80,130 100,80 C120,30 180,60 200,120 C220,180 260,220 320,230 C400,245 500,250 700,250";

export default function HeroVisual() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const icons = container.children;
    const count = icons.length;
    const spacing = 1 / count;
    const totalLen = path.getTotalLength();

    function animate() {
      if (!path) return;
      offsetRef.current = (offsetRef.current + 0.0004) % spacing;

      for (let i = 0; i < count; i++) {
        const t = ((i * spacing + offsetRef.current) % 1);
        const pt = path.getPointAtLength(t * totalLen);

        // Fade: starts faint in the spiral, gets solid as it straightens
        const opacity = 0.25 + t * 0.75;
        // Scale: smaller in spiral, full size in the straight part
        const scale = 0.6 + t * 0.4;

        const el = icons[i] as HTMLElement;
        el.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${opacity}`;
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // 5 repetitions of 6 icons = 30 icons along the path
  const allIcons: string[] = [];
  for (let r = 0; r < 5; r++) {
    allIcons.push(...iconSrcs);
  }

  return (
    <div className="relative w-full overflow-visible" style={{ height: 500 }}>
      {/* SVG path — visible as thick band on the straight part, faint on spiral */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 700 300"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* Faint spiral portion */}
        <path
          d="M120,30 C180,10 200,100 160,140 C120,180 80,130 100,80 C120,30 180,60 200,120 C220,180 260,220 320,230"
          fill="none"
          stroke="#121212"
          strokeWidth="2"
          opacity="0.08"
        />
        {/* Thick band — the straight part */}
        <path
          d="M320,230 C400,245 500,250 700,250"
          fill="none"
          stroke="#121212"
          strokeWidth="36"
          strokeLinecap="round"
          opacity="1"
        />
        {/* Hidden path for icon positioning */}
        <path
          ref={pathRef}
          d={TRAIL_PATH}
          fill="none"
          stroke="none"
        />
      </svg>

      {/* Icons positioned along the path */}
      <div ref={containerRef} className="absolute inset-0" style={{ pointerEvents: "none" }}>
        {allIcons.map((src, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 will-change-transform"
            style={{ opacity: 0 }}
          >
            <img
              src={src}
              alt=""
              width={32}
              height={32}
              style={{ width: 32, height: 32, borderRadius: "22%", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Daily report card — right side, positioned where the band ends */}
      <div
        className="absolute z-10"
        style={{ right: 0, top: "50%", transform: "translateY(-50%)", width: "52%", maxWidth: 380 }}
      >
        <div
          className="border-2 border-ink bg-card"
          style={{ borderRadius: 24, padding: 24 }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/who-icon.png"
                alt="Who?"
                width={26}
                height={26}
                style={{ borderRadius: "22%" }}
              />
              <span
                className="text-[17px] font-bold text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Daily Report
              </span>
            </div>
            <span className="text-[12px] font-medium text-muted">Today</span>
          </div>

          <div className="flex gap-2.5 mb-5">
            <div className="flex-1 bg-blue border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>12</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">new</p>
            </div>
            <div className="flex-1 bg-lime border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>3</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">notable</p>
            </div>
            <div className="flex-1 bg-apricot border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>1</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">verified</p>
            </div>
          </div>

          <div
            className="flex items-center gap-3 p-3.5 border-2 border-ink bg-cream mb-2.5"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/elon.png" alt="Elon M." size={42} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-ink">Elon M.</p>
              <p className="text-[12px] text-muted">142M followers</p>
            </div>
            <AppIconX size={20} />
          </div>

          <div
            className="flex items-center gap-3 p-3.5 border-2 border-ink bg-cream"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/emma.png" alt="Emma C." size={42} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-ink">Emma C.</p>
              <p className="text-[12px] text-muted">2.4M followers</p>
            </div>
            <AppIconInstagram size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
