"use client";

import { useEffect, useRef, useState } from "react";

const allNotifs = [
  "@xj29dk", "@user_8847", "@marketing.guru99", "@s1lv3rf0x",
  "@cool_dude_42", "@jan__smith", "@noname9281", "@theboss_real",
  "@growth.hacks", "@randomguy334", "@social_media_tips", "@x8k2mq",
];

export default function NotifStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const iv = setInterval(() => { if (visibleRef.current) setOffset((o) => o + 1); }, 350);
    return () => clearInterval(iv);
  }, []);

  const items = Array.from({ length: 5 }, (_, i) => ({
    handle: allNotifs[(offset + i) % allNotifs.length],
    key: offset + i,
  }));

  return (
    <div ref={containerRef} className="flex flex-col gap-1.5 p-3">
      {items.map((n, i) => (
        <div key={n.key} className={`flex items-center gap-2.5 px-3 py-2 bg-ink/[0.03] rounded-2xl ${i === 0 ? "notif-slide-in" : ""}`}>
          <div className="w-7 h-7 rounded-full bg-ink/[0.06] shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-ink/20">Notification</p>
            <p className="text-xs text-ink/35 truncate">{n.handle} followed you</p>
          </div>
          <span className="text-[9px] text-ink/15 font-semibold">now</span>
        </div>
      ))}
    </div>
  );
}
