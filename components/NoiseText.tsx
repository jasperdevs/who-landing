"use client";

import { useEffect, useRef } from "react";

export default function NoiseText({ text }: { text: string }) {
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let frame: number;
    let tick = 0;

    function animate() {
      tick++;
      spanRefs.current.forEach((span, i) => {
        if (!span) return;
        const phase = i * 1.7 + tick * 0.15;
        const x = Math.sin(phase) * 2 + Math.sin(phase * 2.3) * 1;
        const y = Math.cos(phase * 1.1) * 1.5 + Math.cos(phase * 0.7) * 0.8;
        const rotate = Math.sin(phase * 0.9) * 3;
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      });
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span className="relative inline-block">
      {/* Static strikethrough behind */}
      <span
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="block w-full border-t-[2px] border-ink/30"
          style={{ marginTop: "2px" }}
        />
      </span>
      {/* Jiggling letters on top */}
      <span className="relative inline-flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => { spanRefs.current[i] = el; }}
            className="inline-block"
            style={{ willChange: "transform" }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
