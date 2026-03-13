"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const platformIcons = [
  { src: "/icons/x-appstore-raw.jpg", alt: "X" },
  { src: "/icons/instagram-appstore-raw.jpg", alt: "Instagram" },
  { src: "/icons/tiktok-appstore-raw.jpg", alt: "TikTok" },
  { src: "/icons/threads-appstore-icon.png", alt: "Threads" },
  { src: "/icons/bluesky-appstore-icon.png", alt: "Bluesky" },
  { src: "/icons/linkedin-appstore-icon.png", alt: "LinkedIn" },
];

// Curved path: starts top-left spiraling loosely, curves down and straightens to the right
const RIBBON_PATH =
  "M 30,40 C 60,10 100,80 140,30 C 180,-20 220,70 280,50 C 340,30 380,60 440,55 C 500,50 560,55 620,55 L 700,55";

function getPointOnPath(path: SVGPathElement, t: number) {
  const len = path.getTotalLength();
  const pt = path.getPointAtLength(t * len);
  return { x: pt.x, y: pt.y };
}

function getAngleOnPath(path: SVGPathElement, t: number) {
  const len = path.getTotalLength();
  const delta = 0.001;
  const p1 = path.getPointAtLength(Math.max(0, t - delta) * len);
  const p2 = path.getPointAtLength(Math.min(1, t + delta) * len);
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
}

export default function IconRibbon() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    const iconsContainer = iconsRef.current;
    if (!path || !iconsContainer) return;

    const iconEls = iconsContainer.children;
    const iconCount = iconEls.length;
    const spacing = 1 / (iconCount * 0.55); // tighter spacing

    function animate() {
      if (!path) return;
      offsetRef.current += 0.0006;
      if (offsetRef.current > spacing) offsetRef.current -= spacing;

      for (let i = 0; i < iconCount; i++) {
        let t = (i * spacing + offsetRef.current) % 1.0;
        // Wrap around
        if (t < 0) t += 1;
        if (t > 1) t -= 1;

        const { x, y } = getPointOnPath(path, t);

        // Fade: more opaque as icons move right (toward the analysis card)
        const opacity = Math.min(1, t * 1.8);
        // Scale: slightly smaller on the left, full size on right
        const scale = 0.7 + t * 0.3;

        const el = iconEls[i] as HTMLElement;
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${opacity}`;
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // Triple the icons for density along the path
  const tripled = [...platformIcons, ...platformIcons, ...platformIcons];

  return (
    <div className="relative w-full" style={{ height: 120 }}>
      {/* SVG path (invisible, just for calculations) */}
      <svg
        ref={svgRef}
        viewBox="0 0 700 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ pointerEvents: "none" }}
      >
        {/* Visible ribbon band */}
        <path
          d={RIBBON_PATH}
          fill="none"
          stroke="#121212"
          strokeWidth="38"
          strokeLinecap="round"
          opacity="0.06"
        />
        {/* Path for positioning (invisible) */}
        <path ref={pathRef} d={RIBBON_PATH} fill="none" stroke="none" />
      </svg>

      {/* Icons positioned along the path */}
      <div ref={iconsRef} className="absolute inset-0">
        {tripled.map((icon, i) => (
          <div
            key={`${icon.alt}-${i}`}
            className="absolute top-0 left-0 will-change-transform"
            style={{ opacity: 0 }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={36}
              height={36}
              className="object-cover"
              style={{ width: 36, height: 36, borderRadius: "22%" }}
            />
          </div>
        ))}
      </div>

      {/* Analysis card on the right end */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 border-2 border-ink bg-card px-5 py-3 flex items-center gap-3"
        style={{ borderRadius: 18 }}
      >
        <div
          className="w-2.5 h-2.5 bg-lime border border-ink"
          style={{ borderRadius: 6 }}
        />
        <span className="text-sm font-semibold text-ink whitespace-nowrap">
          3 notable followers found
        </span>
      </div>
    </div>
  );
}
