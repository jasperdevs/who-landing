"use client";

import { useRef, useEffect } from "react";

export default function HoverShimmer({ children, className = "" }: { children: string; className?: string }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const frameRef = useRef(0);
  const tickRef = useRef(0);
  const hoveringRef = useRef(false);

  // Short text (< 25 chars) = per letter, long text = per word
  const isShort = children.length < 22;

  const pieces = isShort
    ? children.split("")
    : children.split(" ");

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const parent = wrapper.closest(".card-hover, .btn-hover, .btn-hover-dark, .link-hover, a, button") || wrapper;

    function onEnter() {
      hoveringRef.current = true;
      tickRef.current = 0;
      loop();
    }
    function onLeave() {
      hoveringRef.current = false;
      cancelAnimationFrame(frameRef.current);
      spansRef.current.forEach((s) => {
        if (s) {
          s.style.transition = "transform 0.25s ease";
          s.style.transform = "translateY(0)";
        }
      });
    }
    function loop() {
      if (!hoveringRef.current) return;
      frameRef.current = requestAnimationFrame(loop);
      tickRef.current += 0.1;
      spansRef.current.forEach((s, i) => {
        if (!s) return;
        s.style.transition = "none";
        s.style.transform = `translateY(${Math.sin(tickRef.current - i * 0.3) * -1.8}px)`;
      });
    }

    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (isShort) {
    return (
      <span ref={wrapperRef} className={className}>
        {pieces.map((char, i) => (
          char === " " ? (
            <span key={i} ref={(el) => { spansRef.current[i] = el; }}> </span>
          ) : (
            <span key={i} ref={(el) => { spansRef.current[i] = el; }} className="inline-block">{char}</span>
          )
        ))}
      </span>
    );
  }

  // Word-based shimmer for long text — preserves natural wrapping
  return (
    <span ref={wrapperRef} className={className}>
      {pieces.map((word, i) => (
        <span key={i}>
          <span ref={(el) => { spansRef.current[i] = el; }} className="inline-block">{word}</span>
          {i < pieces.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
