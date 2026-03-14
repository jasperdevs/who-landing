"use client";

import { useEffect, useRef } from "react";

export default function BrandName({ className = "", size = "text-2xl" }: { className?: string; size?: string }) {
  const qRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = qRef.current;
    if (!el) return;
    const node = el;

    const CYCLE = 4000;
    const IDLE = 0.75; // 75% idle, 25% active
    const start = performance.now();
    let frame: number;

    function animate(now: number) {
      frame = requestAnimationFrame(animate);
      const t = ((now - start) % CYCLE) / CYCLE;

      if (t < IDLE) {
        node.style.transform = "translateY(0) scaleY(1)";
        return;
      }

      // Active: hop up, invert (scaleY -1), land
      const p = (t - IDLE) / (1 - IDLE); // 0 to 1

      let ty = 0;
      let sy = 1;

      if (p < 0.2) {
        // Squash before jump
        const e = p / 0.2;
        ty = e * 2;
        sy = 1 - e * 0.15;
      } else if (p < 0.5) {
        // Jump up + flip to inverted
        const e = (p - 0.2) / 0.3;
        ty = 2 - e * 16; // up to -14
        sy = (1 - e * 2); // 1 to -1 (inverted)
      } else if (p < 0.7) {
        // Fall down while inverted
        const e = (p - 0.5) / 0.2;
        ty = -14 + e * 16; // back to 2
        sy = -1;
      } else if (p < 0.85) {
        // Squash on landing + flip back
        const e = (p - 0.7) / 0.15;
        ty = 2 - e * 1;
        sy = -1 + e * 2; // -1 to 1
      } else {
        // Settle
        const e = (p - 0.85) / 0.15;
        ty = 1 * (1 - e);
        sy = 1;
      }

      node.style.transform = `translateY(${ty}px) scaleY(${sy})`;
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      className={`${size} font-bold tracking-tight text-ink ${className}`}
      style={{ fontFamily: "var(--font-display)", display: "inline" }}
    >
      Who
      <span
        ref={qRef}
        style={{
          display: "inline-block",
          transformOrigin: "center 70%",
          willChange: "transform",
        }}
      >
        ?
      </span>
    </span>
  );
}
