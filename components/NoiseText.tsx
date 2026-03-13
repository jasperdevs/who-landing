"use client";

import { useEffect, useRef } from "react";

export default function NoiseText({ text }: { text: string }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const visibleRef = useRef(true);

  // Pause when off-screen
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame: number;
    let tick = 0;

    function animate() {
      frame = requestAnimationFrame(animate);
      if (!visibleRef.current) return;

      tick++;
      // Run at ~20fps for noisy but not seizure-inducing
      if (tick % 2 !== 0) return;
      spanRefs.current.forEach((span, i) => {
        if (!span) return;
        const t = tick * 0.06;
        const o = i * 1.1;
        const x = Math.sin(t + o) * 2.5 + (Math.random() - 0.5) * 1.5;
        const y = Math.cos(t * 0.9 + o) * 2 + (Math.random() - 0.5) * 1;
        const rotate = Math.sin(t * 0.7 + o) * 3 + (Math.random() - 0.5) * 2;
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      });
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span ref={wrapperRef} className="relative inline-block">
      {/* Scribble scratch-out behind */}
      <span
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M1 21 Q20 16, 40 22 T80 19 T99 21" stroke="var(--color-ink)" strokeWidth="2.2" strokeOpacity="0.35" fill="none" strokeLinecap="round" />
          <path d="M2 19 Q25 24, 50 18 T75 22 T98 18" stroke="var(--color-ink)" strokeWidth="1.8" strokeOpacity="0.25" fill="none" strokeLinecap="round" />
          <path d="M3 22 Q30 17, 55 23 T85 19 T97 22" stroke="var(--color-ink)" strokeWidth="1.5" strokeOpacity="0.2" fill="none" strokeLinecap="round" />
        </svg>
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
