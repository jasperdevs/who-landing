"use client";

import { AppIconX, AppIconInstagram, AppIconTikTok } from "./Icons";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";

const people = [
  { avatar: "/avatars/elon.png", name: "Elon M.", followers: "142M", icon: <AppIconX size={24} /> },
  { avatar: "/avatars/emma.png", name: "Emma C.", followers: "2.4M", icon: <AppIconInstagram size={24} /> },
  { avatar: "/avatars/naval.png", name: "Naval R.", followers: "1.8M", icon: <AppIconTikTok size={24} /> },
];

export default function HeroCard() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = people.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), 600 + i * 700)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 w-full max-w-[360px]">
      {people.map((p, i) => (
        <div
          key={p.name}
          className="flex items-center gap-4 border-2 border-ink bg-card px-5 py-4"
          style={{
            borderRadius: 22,
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Avatar src={p.avatar} alt={p.name} size={48} />
          <div className="flex-1 min-w-0">
            <p className="text-[16px] font-semibold text-ink leading-tight">{p.name}</p>
            <p className="text-[14px] text-muted mt-0.5">{p.followers} followers</p>
          </div>
          {p.icon}
        </div>
      ))}
    </div>
  );
}
