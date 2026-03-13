"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollUnderline() {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="absolute pointer-events-none"
      style={{ bottom: -4, left: -4, right: -4, height: 12, width: "calc(100% + 8px)" }}
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M2 8 C30 2, 50 10, 80 6 S130 2, 160 7 S190 4, 198 6"
        stroke="var(--color-lime)"
        strokeWidth="4"
        strokeLinecap="round"
        className={`scroll-underline-path ${visible ? "is-visible" : ""}`}
      />
    </svg>
  );
}
