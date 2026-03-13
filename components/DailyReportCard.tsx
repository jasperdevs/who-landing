"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AppIconX } from "./Icons";
import BrandName from "./BrandName";

const signals = [
  { avatar: "/avatars/elon.png", name: "Elon M.", stat: "142M followers", platform: "X" },
  { avatar: "/avatars/emma.png", name: "Emma C.", stat: "2.4M followers", platform: "IG" },
  { avatar: "/avatars/james.png", name: "James M.", stat: "Founder, SaaS", platform: "X" },
];

export default function DailyReportCard() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"visible" | "out" | "in">("visible");
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleRef.current) return;
      setPhase("out");
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % signals.length);
        setPhase("in");
        setTimeout(() => setPhase("visible"), 50);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const s = signals[idx];
  const swipeStyle = {
    visible: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-14px)" },
    in: { opacity: 0, transform: "translateY(10px)" },
  }[phase];

  return (
    <div ref={ref} className="bg-card w-full">
      {/* App header */}
      <div className="flex items-center gap-2 px-4 pt-2 pb-2">
        <Image
          src="/who-icon.png"
          alt="Who?"
          width={22}
          height={22}
          style={{ borderRadius: "22%" }}
        />
        <BrandName size="text-sm" />
      </div>

      {/* Noise section — messy anonymous handles */}
      <div className="px-4 pb-2">
        <p className="text-[9px] font-bold text-muted/40 uppercase tracking-widest mb-1.5">232 new followers</p>
        <div className="flex flex-wrap gap-1">
          {["@xk29d", "@user847", "@mktguru", "@s1lv3r", "@cool42", "@jan_s", "@noname", "@rand33", "@hx_91", "@bot44", "@zz_mk"].map((h) => (
            <span key={h} className="text-[9px] text-muted/30 font-mono">{h}</span>
          ))}
          <span className="text-[9px] text-muted/20 font-mono">...</span>
        </div>
      </div>

      {/* Divider with label */}
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="flex-1 h-[1px] bg-ink/8" />
        <span
          className="text-[9px] font-bold text-ink/60 uppercase tracking-widest bg-lime/50 px-2 py-0.5"
          style={{ borderRadius: 4 }}
        >
          Signal
        </span>
        <div className="flex-1 h-[1px] bg-ink/8" />
      </div>

      {/* Signal — one clear highlighted follower */}
      <div className="px-4 pb-4" style={{ minHeight: 72, overflow: "hidden" }}>
        <div
          style={{
            ...swipeStyle,
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-[2px] border-ink">
              <img src={s.avatar} alt={s.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-ink">{s.name}</span>
                <AppIconX size={13} />
              </div>
              <p className="text-[11px] text-muted">{s.stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
