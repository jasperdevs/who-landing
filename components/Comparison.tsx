"use client";

import { useEffect, useState, useRef } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";
import NoiseText from "./NoiseText";
import NotificationStack from "./NotificationStack";
import HoverShimmer from "./HoverShimmer";
import BrandName from "./BrandName";


/* ── Stock-ticker counter ── */

function SlotDigit({ digit, prevDigit }: { digit: string; prevDigit: string }) {
  const changed = digit !== prevDigit;
  if (!changed) return <span className="inline-block" style={{ width: "0.6em" }}>{digit}</span>;
  return (
    <span className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.6em" }}>
      <span
        key={`old-${prevDigit}-${digit}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "slot-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}
      >{prevDigit}</span>
      <span
        key={`new-${digit}-${prevDigit}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "slot-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}
      >{digit}</span>
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

const signal = [
  { avatar: "/avatars/sara.png", name: "Sara R.", followers: "89K", icon: <AppIconInstagram size={26} /> },
  { avatar: "/avatars/james.png", name: "James M.", followers: "1.2M", icon: <AppIconX size={26} /> },
  { avatar: "/avatars/priya.png", name: "Priya S.", followers: "310K", icon: <AppIconTikTok size={26} /> },
];

export default function Comparison() {
  return (
    <section id="features" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <NoiseText text="Noise" /> vs.{" "}
              <span className="relative inline-block">
                Signal.
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: -19, right: -19, width: 49, height: 49, transform: "rotate(46deg)" }}
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <line x1="20" y1="1" x2="20" y2="15" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="30" y1="5" x2="24" y2="16" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="10" y1="5" x2="16" y2="16" stroke="var(--color-apricot)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Your notifications are useless. Who? makes them meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Noise side -- continuous scroll, each slides from left */}
            <div
              className="border-[3px] border-ink bg-card h-[340px] md:h-[440px] overflow-hidden relative"
              style={{ borderRadius: "var(--radius-xl)", contain: "strict" }}
            >
              <div className="px-5 py-3.5 border-b-[3px] border-ink flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span style={{ animation: "bell-ring 2s ease-in-out infinite", display: "inline-block" }}><IconBell className="w-5 h-5 text-muted" /></span>
                  <span className="text-sm font-bold text-muted">Notifications</span>
                </div>
                <AnimatedCounter />
              </div>
              <div className="relative h-[calc(100%-56px)]">
                <NotificationStack />
                <div
                  className="absolute top-0 left-0 right-0 h-10 pointer-events-none z-10"
                  style={{ background: "linear-gradient(to bottom, var(--color-card) 0%, transparent 100%)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none z-10"
                  style={{ background: "linear-gradient(to top, var(--color-card) 0%, transparent 100%)" }}
                />
              </div>
            </div>

            {/* Signal side */}
            <div
              className="border-[3px] border-ink bg-blue h-[340px] md:h-[440px] flex flex-col"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="px-5 py-3.5 border-b-[3px] border-ink">
                <BrandName size="text-xl" />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center gap-3.5">
                {signal.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-3.5 p-4 border-[3px] border-ink bg-cream card-hover"
                    style={{ borderRadius: "var(--radius-lg)" }}
                  >
                    <Avatar src={s.avatar} alt={s.name} size={48} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-bold text-ink"><HoverShimmer>{s.name}</HoverShimmer></p>
                      <p className="text-sm text-muted mt-0.5"><HoverShimmer>{`${s.followers} followers`}</HoverShimmer></p>
                    </div>
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
