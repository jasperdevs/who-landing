"use client";

import { useEffect, useRef, useState } from "react";

const allNotifs = [
  { handle: "@xj29dk" },
  { handle: "@user_8847" },
  { handle: "@marketing.guru99" },
  { handle: "@s1lv3rf0x" },
  { handle: "@cool_dude_42" },
  { handle: "@jan__smith" },
  { handle: "@noname9281" },
  { handle: "@theboss_real" },
  { handle: "@growth.hacks" },
  { handle: "@randomguy334" },
  { handle: "@social_media_tips" },
  { handle: "@x8k2mq" },
];

export default function NotifStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleRef.current) return;
      setOffset((o) => o + 1);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  const items = [];
  for (let i = 0; i < 5; i++) {
    const idx = (offset + i) % allNotifs.length;
    items.push({ ...allNotifs[idx], key: offset + i });
  }

  return (
    <div ref={containerRef} className="flex flex-col gap-2 p-4">
      {items.map((n, i) => (
        <div
          key={n.key}
          className={`flex items-center gap-3 px-4 py-3 bg-white/60 border-2 border-ink/10 ${
            i === 0 ? "notif-slide-in" : ""
          }`}
        >
          <div className="w-8 h-8 bg-ink/10 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-ink/30 uppercase">
              Notification
            </p>
            <p className="text-sm text-ink/50 truncate">
              {n.handle} followed you
            </p>
          </div>
          <span className="text-[10px] text-ink/30 font-bold">now</span>
        </div>
      ))}
    </div>
  );
}
