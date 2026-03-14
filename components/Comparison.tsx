"use client";

import { useEffect, useState, useRef } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";
import NotificationStack from "./NotificationStack";
import BrandName from "./BrandName";

function SlotDigit({ digit, prevDigit }: { digit: string; prevDigit: string }) {
  const changed = digit !== prevDigit;
  if (!changed) return <span className="inline-block" style={{ width: "0.6em" }}>{digit}</span>;
  return (
    <span className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.6em" }}>
      <span key={`old-${prevDigit}-${digit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-out 0.3s forwards" }}>{prevDigit}</span>
      <span key={`new-${digit}-${prevDigit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-in 0.3s forwards" }}>{digit}</span>
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
    <span className="text-xs font-bold text-ink bg-cream/80 px-2.5 py-1 rounded-full tabular-nums inline-flex items-center gap-1" style={{ lineHeight: "1.2em" }}>
      {curr.split("").map((d, i) => (<SlotDigit key={i} digit={d} prevDigit={prev[i] || "0"} />))}<span>+</span>
    </span>
  );
}

const signal = [
  { avatar: "/avatars/sara.png", name: "Sara R.", stat: "89K followers", icon: <AppIconInstagram size={24} /> },
  { avatar: "/avatars/james.png", name: "James M.", stat: "1.2M followers", icon: <AppIconX size={24} /> },
  { avatar: "/avatars/priya.png", name: "Priya S.", stat: "310K followers", icon: <AppIconTikTok size={24} /> },
];

export default function Comparison() {
  return (
    <section>
      {/* Header */}
      <AnimateIn>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink text-center uppercase mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NOISE VS. SIGNAL
        </h2>
      </AnimateIn>

      {/* Side-by-side cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Noise side */}
        <AnimateIn>
          <div className="bg-card h-[400px] overflow-hidden relative" style={{ borderRadius: "var(--radius-xl)" }}>
            <div className="px-5 py-3.5 border-b border-ink/8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span style={{ animation: "bell-ring 2s ease-in-out infinite", display: "inline-block" }}><IconBell className="w-4 h-4 text-muted" /></span>
                <span className="text-sm font-bold text-muted">Notifications</span>
              </div>
              <AnimatedCounter />
            </div>
            <div className="relative h-[calc(100%-52px)]">
              <NotificationStack />
              <div className="absolute top-0 inset-x-0 h-10 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, var(--color-card), transparent)" }} />
              <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none z-10" style={{ background: "linear-gradient(to top, var(--color-card), transparent)" }} />
            </div>
          </div>
        </AnimateIn>

        {/* Signal side */}
        <AnimateIn>
          <div className="bg-lime h-[400px] flex flex-col" style={{ borderRadius: "var(--radius-xl)" }}>
            <div className="px-5 py-3.5 border-b border-ink/8">
              <BrandName size="text-xl" />
            </div>
            <div className="flex-1 p-5 flex flex-col justify-center gap-3">
              {signal.map((s) => (
                <div key={s.name} className="flex items-center gap-3.5 p-4 bg-cream/80 card-hover rounded-2xl">
                  <Avatar src={s.avatar} alt={s.name} size={48} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-ink">{s.name}</p>
                    <p className="text-sm text-muted mt-0.5">{s.stat}</p>
                  </div>
                  {s.icon}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
