"use client";

import { useEffect, useRef } from "react";

export default function ConstantShimmer({ children, className = "" }: { children: string; className?: string }) {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    let tick = 0;
    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      tick += 0.08;
      spansRef.current.forEach((s, i) => {
        if (!s) return;
        const y = Math.sin(tick - i * 0.4) * -3;
        s.style.transform = `translateY(${y}px)`;
      });
    }
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <span className={className}>
      {children.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => { spansRef.current[i] = el; }}
          className="inline-block"
          style={{ willChange: "transform" }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}
