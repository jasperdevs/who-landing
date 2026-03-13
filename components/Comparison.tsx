"use client";

import { useEffect, useState, useRef } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";

/* ── Stock-ticker counter: only changed digits roll ── */

function SlotDigit({ digit, prevDigit }: { digit: string; prevDigit: string }) {
  const changed = digit !== prevDigit;

  if (!changed) {
    return <span className="inline-block">{digit}</span>;
  }

  return (
    <span className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.6em" }}>
      {/* Old digit sliding out */}
      <span
        key={`old-${prevDigit}-${digit}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "slot-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}
      >
        {prevDigit}
      </span>
      {/* New digit sliding in */}
      <span
        key={`new-${digit}-${prevDigit}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "slot-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards" }}
      >
        {digit}
      </span>
      <style>{`
        @keyframes slot-out {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes slot-in {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </span>
  );
}

function AnimatedCounter() {
  const [count, setCount] = useState(142);
  const prevRef = useRef("142");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        prevRef.current = String(c);
        return c + 1;
      });
    }, 417);
    return () => clearInterval(interval);
  }, []);

  const curr = String(count);
  const prev = prevRef.current.padStart(curr.length, "0");

  return (
    <span
      className="text-xs font-bold text-ink bg-cream px-2.5 py-1 border-[2px] border-ink tabular-nums inline-flex"
      style={{ borderRadius: "var(--radius-sm)", lineHeight: "1.2em" }}
    >
      {curr.split("").map((d, i) => (
        <SlotDigit key={i} digit={d} prevDigit={prev[i] || "0"} />
      ))}
      <span>+</span>
    </span>
  );
}

/* ── Data ── */

const noiseItems = [
  { handle: "@xj29dk", avatar: "/avatars/sara.png" },
  { handle: "@user_8847", avatar: "/avatars/james.png" },
  { handle: "@marketing.guru99", avatar: "/avatars/priya.png" },
  { handle: "@s1lv3rf0x", avatar: "/avatars/emma.png" },
  { handle: "@cool_dude_42", avatar: "/avatars/alex.png" },
  { handle: "@jan__smith", avatar: "/avatars/sara.png" },
  { handle: "@noname9281", avatar: "/avatars/james.png" },
  { handle: "@theboss_real", avatar: "/avatars/priya.png" },
  { handle: "@growth.hacks", avatar: "/avatars/emma.png" },
  { handle: "@randomguy334", avatar: "/avatars/alex.png" },
  { handle: "@social_media_tips", avatar: "/avatars/sara.png" },
  { handle: "@x8k2mq", avatar: "/avatars/james.png" },
];

const signal = [
  { avatar: "/avatars/sara.png", name: "Sara R.", followers: "89K", icon: <AppIconInstagram size={26} /> },
  { avatar: "/avatars/james.png", name: "James M.", followers: "1.2M", icon: <AppIconX size={26} /> },
  { avatar: "/avatars/priya.png", name: "Priya S.", followers: "310K", icon: <AppIconTikTok size={26} /> },
];

/* ── Apple-style notification: slides in from left ── */

function NotificationBubble({ handle, avatar, delay }: { handle: string; avatar: string; delay: number }) {
  return (
    <div
      className="mx-4 mb-2.5 bg-cream/80 border border-ink/8 px-4 py-3 flex items-center gap-3"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-ink/5">
        <img src={avatar} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-ink/40 leading-none mb-0.5">Notification</p>
        <p className="text-sm text-muted/60 truncate">{handle} followed you</p>
      </div>
      <span className="text-[10px] text-muted/40 shrink-0">now</span>
    </div>
  );
}

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
              <span className="noise-text">Noise</span> vs. Signal.
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Your notifications are useless. Who? makes them meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Noise side */}
            <div
              className="border-[3px] border-ink bg-card h-[340px] md:h-[440px] overflow-hidden relative"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="px-5 py-3.5 border-b-[3px] border-ink flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <IconBell className="w-5 h-5 text-muted" />
                  <span className="text-sm font-bold text-muted">Notifications</span>
                </div>
                <AnimatedCounter />
              </div>
              <div className="relative h-[calc(100%-56px)] overflow-hidden">
                <style>{`
                  @keyframes noise-scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                  }
                `}</style>
                <div className="pt-2" style={{ animation: "noise-scroll 5s linear infinite" }}>
                  {noiseItems.map((n, i) => (
                    <NotificationBubble key={`a-${i}`} handle={n.handle} avatar={n.avatar} delay={i} />
                  ))}
                  {noiseItems.map((n, i) => (
                    <NotificationBubble key={`b-${i}`} handle={n.handle} avatar={n.avatar} delay={i} />
                  ))}
                </div>
                <div
                  className="absolute top-0 left-0 right-0 h-14 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, var(--color-card) 0%, var(--color-card) 20%, transparent 100%)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--color-card) 0%, var(--color-card) 15%, transparent 100%)" }}
                />
              </div>
            </div>

            {/* Signal side */}
            <div
              className="border-[3px] border-ink bg-blue h-[340px] md:h-[440px] flex flex-col"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="px-5 py-3.5 border-b-[3px] border-ink">
                <span
                  className="text-xl font-bold text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Who?
                </span>
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
                      <p className="text-[15px] font-bold text-ink">{s.name}</p>
                      <p className="text-sm text-muted mt-0.5">{s.followers} followers</p>
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
