"use client";

import { useEffect, useState, useRef } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";
import NoiseText from "./NoiseText";
import NotificationStack from "./NotificationStack";
import HoverShimmer from "./HoverShimmer";
import BrandName from "./BrandName";

function SlotDigit({ digit, prevDigit }: { digit: string; prevDigit: string }) {
  const changed = digit !== prevDigit;
  if (!changed) return <span className="inline-block" style={{ width: "0.6em" }}>{digit}</span>;
  return (
    <span className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.6em" }}>
      <span key={`old-${prevDigit}-${digit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}>{prevDigit}</span>
      <span key={`new-${digit}-${prevDigit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}>{digit}</span>
    </span>
  );
}

function AnimatedCounter() {
  const [count, setCount] = useState(142);
  const prevRef = useRef("142");
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => { prevRef.current = String(c); return c >= 999 ? 142 : c + 1; });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const curr = String(count);
  const prev = prevRef.current.padStart(curr.length, "0");
  return (
    <span className="text-xs font-bold text-ink bg-cream px-2.5 py-1 border-[2px] border-ink tabular-nums inline-flex items-center gap-1.5" style={{ borderRadius: "var(--radius-sm)", lineHeight: "1.2em" }}>
      {curr.split("").map((d, i) => (<SlotDigit key={i} digit={d} prevDigit={prev[i] || "0"} />))}
      <span>+</span>
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="features" className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
              <NoiseText text="Noise" /> vs.{" "}
              <span className="relative inline-block">
                Signal.
                <svg className="absolute pointer-events-none" style={{ top: -19, right: -19, width: 49, height: 49, transform: "rotate(46deg)" }} viewBox="0 0 40 40" fill="none">
                  <line x1="20" y1="1" x2="20" y2="15" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="30" y1="5" x2="24" y2="16" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="10" y1="5" x2="16" y2="16" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Your notifications are useless. <BrandName size="text-lg" /> makes them meaningful.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-6 auto-rows-[60px] gap-3">

          {/* Noise — notifications panel (tall left) */}
          <AnimateIn className="col-span-6 md:col-span-3 row-span-6">
            <div className="border-[3px] border-ink bg-card h-full overflow-hidden relative" style={{ borderRadius: "var(--radius-xl)", contain: "strict" }}>
              <div className="px-4 py-3 border-b-[3px] border-ink flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span style={{ animation: "bell-ring 2s ease-in-out infinite", display: "inline-block" }}><IconBell className="w-4 h-4 text-muted" /></span>
                  <span className="text-sm font-bold text-muted">Notifications</span>
                </div>
                <AnimatedCounter />
              </div>
              <div className="relative h-[calc(100%-48px)]">
                <NotificationStack />
                <div className="absolute top-0 inset-x-0 h-8 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, var(--color-card), transparent)" }} />
                <div className="absolute bottom-0 inset-x-0 h-8 pointer-events-none z-10" style={{ background: "linear-gradient(to top, var(--color-card), transparent)" }} />
              </div>
            </div>
          </AnimateIn>

          {/* Signal header card */}
          <AnimateIn className="col-span-3 row-span-2">
            <div className="border-[3px] border-ink bg-blue p-4 h-full flex items-center gap-3 card-hover" style={{ borderRadius: "var(--radius-xl)" }}>
              <BrandName size="text-xl" />
              <span className="text-xs text-ink/40 ml-auto font-bold uppercase tracking-widest">Signal</span>
            </div>
          </AnimateIn>

          {/* Sara */}
          <AnimateIn className="col-span-3 row-span-2">
            <div className="border-[3px] border-ink bg-cream p-3.5 h-full flex items-center gap-3 card-hover" style={{ borderRadius: "var(--radius-xl)" }}>
              <Avatar src="/avatars/sara.png" alt="Sara" size={38} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-ink"><HoverShimmer>Sara R.</HoverShimmer></p>
                <p className="text-[11px] text-ink/50">89K followers</p>
              </div>
              <AppIconInstagram size={18} />
            </div>
          </AnimateIn>

          {/* James */}
          <AnimateIn className="col-span-2 row-span-2">
            <div className="border-[3px] border-ink bg-lime p-3 h-full flex flex-col justify-center items-center card-hover text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <Avatar src="/avatars/james.png" alt="James" size={36} />
              <p className="text-xs font-bold text-ink mt-1.5">James M.</p>
              <p className="text-[10px] text-ink/40">1.2M</p>
            </div>
          </AnimateIn>

          {/* Priya */}
          <AnimateIn className="col-span-1 row-span-2">
            <div className="border-[3px] border-ink bg-apricot p-2 h-full flex flex-col justify-center items-center card-hover" style={{ borderRadius: "var(--radius-xl)" }}>
              <Avatar src="/avatars/priya.png" alt="Priya" size={32} />
              <p className="text-[9px] font-bold text-ink mt-1">310K</p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
