"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BrandName from "./BrandName";

const highlights = [
  { emoji: "🐋", text: "A whale followed you", detail: "Sarah Chen · VP Design @ Figma · 89K" },
  { emoji: "📈", text: "You're trending", detail: "+34% follower quality this week" },
  { emoji: "🔔", text: "3 notable new follows", detail: "Including a YC founder and a VC partner" },
  { emoji: "👀", text: "Someone big noticed you", detail: "Marc B. · Partner @ a16z · 540K" },
];

export default function DailyReportCard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [phase, setPhase] = useState<"visible" | "out" | "in">("visible");
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { visibleRef.current = e.isIntersecting; },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleRef.current) return;
      setPhase("out");
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % highlights.length);
        setPhase("in");
        setTimeout(() => setPhase("visible"), 50);
      }, 200);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const h = highlights[activeIdx];
  const swipe = {
    visible: { opacity: 1, transform: "translateY(0) scale(1)" },
    out: { opacity: 0, transform: "translateY(-10px) scale(0.97)" },
    in: { opacity: 0, transform: "translateY(8px) scale(0.97)" },
  }[phase];

  return (
    <div ref={ref} className="bg-card w-full">
      {/* App header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <div className="flex items-center gap-2">
          <Image src="/who-icon.png" alt="Who?" width={20} height={20} style={{ borderRadius: "22%" }} />
          <BrandName size="text-xs" />
        </div>
        <span className="text-[9px] text-muted">8:00 AM</span>
      </div>

      {/* Notification-style card */}
      <div className="px-3 pb-3 pt-1">
        <div
          className="bg-cream border-[2px] border-ink/10 p-3.5"
          style={{ borderRadius: "var(--radius-md)" }}
        >
          {/* Title */}
          <p className="text-[10px] font-bold text-muted/50 uppercase tracking-widest mb-2">Your daily signal</p>

          {/* Cycling highlight */}
          <div style={{ minHeight: 52, overflow: "hidden" }}>
            <div
              style={{
                ...swipe,
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-lg leading-none mt-0.5">{h.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-ink">{h.text}</p>
                  <p className="text-[10px] text-muted mt-0.5">{h.detail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini stat row */}
          <div className="flex gap-2 mt-3">
            <div className="flex-1 bg-lime/40 border border-ink/8 px-2 py-1.5 text-center" style={{ borderRadius: 8 }}>
              <p className="text-sm font-bold text-ink tabular-nums">12</p>
              <p className="text-[8px] text-ink/50 font-bold uppercase">Notable</p>
            </div>
            <div className="flex-1 bg-blue/40 border border-ink/8 px-2 py-1.5 text-center" style={{ borderRadius: 8 }}>
              <p className="text-sm font-bold text-ink tabular-nums">232</p>
              <p className="text-[8px] text-ink/50 font-bold uppercase">Total</p>
            </div>
            <div className="flex-1 bg-apricot/40 border border-ink/8 px-2 py-1.5 text-center" style={{ borderRadius: 8 }}>
              <p className="text-sm font-bold text-ink tabular-nums">+34%</p>
              <p className="text-[8px] text-ink/50 font-bold uppercase">Quality</p>
            </div>
          </div>
        </div>

        {/* Tap to open hint */}
        <p className="text-[9px] text-center text-muted/40 mt-2 font-bold">Tap to open full report</p>
      </div>
    </div>
  );
}
