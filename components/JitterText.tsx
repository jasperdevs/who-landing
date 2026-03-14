"use client";

import { useEffect, useRef } from "react";

/**
 * Renders text where each character jitters continuously
 * with random small translations, creating a glitchy/noisy feel.
 */
export default function JitterText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    function loop() {
      frameRef.current = requestAnimationFrame(loop);
      spansRef.current.forEach((s) => {
        if (!s) return;
        const x = (Math.random() - 0.5) * 3;
        const y = (Math.random() - 0.5) * 3;
        s.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <span className={className}>
      {children.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          className="inline-block"
          style={{ willChange: "transform" }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}
