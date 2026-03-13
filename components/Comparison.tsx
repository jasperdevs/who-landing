"use client";

import { useEffect, useState } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";

function LiveCounter() {
  const [count, setCount] = useState(142);
  useEffect(() => {
    // 12 notifications per 5s loop = ~417ms per notification
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 417);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className="text-xs font-bold text-ink bg-cream px-2.5 py-1 border-[2px] border-ink tabular-nums"
      style={{ borderRadius: "var(--radius-sm)" }}
    >
      {count}
    </span>
  );
}

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

function NotificationBubble({ handle, avatar }: { handle: string; avatar: string }) {
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
              Noise vs. Signal.
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
                <LiveCounter />
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
                    <NotificationBubble key={`a-${i}`} handle={n.handle} avatar={n.avatar} />
                  ))}
                  {noiseItems.map((n, i) => (
                    <NotificationBubble key={`b-${i}`} handle={n.handle} avatar={n.avatar} />
                  ))}
                </div>
                {/* Fade overlays */}
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
