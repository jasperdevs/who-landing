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
        // Each letter jiggles on its own phase
        const phase = i * 1.7 + tick * 0.15;
        const x = Math.sin(phase) * 1.5 + Math.sin(phase * 2.3) * 0.8;
        const y = Math.cos(phase * 1.1) * 1.2 + Math.cos(phase * 0.7) * 0.6;
        const rotate = Math.sin(phase * 0.9) * 2;
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      });
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      className="inline-flex"
      style={{ textDecoration: "line-through", textDecorationColor: "rgba(18,18,18,0.3)" }}
    >
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
  );
}
