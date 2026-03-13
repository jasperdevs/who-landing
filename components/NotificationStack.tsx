"use client";

import { useEffect, useRef, useState } from "react";

const allNotifs = [
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

const ITEM_H = 52;
const GAP = 10;
const STEP = ITEM_H + GAP;
const VISIBLE_COUNT = 6;

/* Group-jiggle: moves entire text block as one unit */
function GroupJiggle({ children, className, seed = 0 }: { children: React.ReactNode; className?: string; seed?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const node = el;
    let frame: number;
    let tick = 0;
    function loop() {
      frame = requestAnimationFrame(loop);
      tick++;
      const p = seed * 2.3 + tick * 0.12;
      const x = Math.sin(p) * 1.5 + Math.sin(p * 2.1) * 0.6;
      const y = Math.cos(p * 1.1) * 1 + Math.cos(p * 0.7) * 0.5;
      const r = Math.sin(p * 0.9) * 0.8;
      node.style.transform = `translate(${x}px,${y}px) rotate(${r}deg)`;
    }
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [seed]);

  return (
    <span ref={ref} className={className} style={{ display: "block", willChange: "transform" }}>
      {children}
    </span>
  );
}

export default function NotificationStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  // offset controls which notification is at the top
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Continuously shift the visible window
  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleRef.current) return;
      setOffset((o) => o + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Build the visible items from the circular array
  const items = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    const idx = (offset + i) % allNotifs.length;
    items.push({ ...allNotifs[idx], key: offset + i });
  }

  return (
    <div
      ref={containerRef}
      className="h-full overflow-hidden px-4 py-2"
      style={{ contain: "strict" }}
    >
      <div className="flex flex-col" style={{ gap: `${GAP}px` }}>
        {items.map((item, i) => (
          <div
            key={item.key}
            className={`bg-cream/80 border border-ink/8 px-4 py-3 flex items-center gap-3 shrink-0 ${i === 0 ? "notif-slide-in" : ""}`}
            style={{
              borderRadius: "var(--radius-md)",
              height: `${ITEM_H}px`,
            }}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-ink/5">
              <img src={item.avatar} alt="" className="w-full h-full object-cover object-top" />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <GroupJiggle className="text-xs font-bold text-ink/40 leading-none mb-0.5" seed={item.key}>
                Notification
              </GroupJiggle>
              <GroupJiggle className="text-sm text-muted/60 truncate" seed={item.key + 0.5}>
                {item.handle} followed you
              </GroupJiggle>
            </div>
            <span className="text-[10px] text-muted/40 shrink-0">now</span>
          </div>
        ))}
      </div>
    </div>
  );
}
