"use client";

import { useEffect, useState } from "react";
import { AppIconX, AppIconInstagram, AppIconTikTok, AppIconThreads, AppIconBluesky, AppIconLinkedIn } from "./Icons";
import Avatar from "./Avatar";

const notifications = [
  { avatar: "/avatars/elon.png", name: "Elon M.", followers: "142M", platform: <AppIconX size={22} /> },
  { avatar: "/avatars/emma.png", name: "Emma C.", followers: "2.4M", platform: <AppIconInstagram size={22} /> },
  { avatar: "/avatars/naval.png", name: "Naval R.", followers: "1.8M", platform: <AppIconTikTok size={22} /> },
];

const floatingIcons = [
  { Icon: AppIconX, x: -20, y: 10, delay: 0 },
  { Icon: AppIconInstagram, x: 105, y: -15, delay: 0.5 },
  { Icon: AppIconTikTok, x: 102, y: 95, delay: 1 },
  { Icon: AppIconThreads, x: -15, y: 80, delay: 1.5 },
  { Icon: AppIconBluesky, x: 50, y: -20, delay: 0.3 },
  { Icon: AppIconLinkedIn, x: 50, y: 105, delay: 0.8 },
];

export default function HeroVisual() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = notifications.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), 500 + i * 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-[380px]">
      <style>{`
        @keyframes icon-float {
          0%, 100% { transform: translate(var(--fx), var(--fy)) scale(1); opacity: 0.35; }
          50% { transform: translate(var(--fx), calc(var(--fy) - 6px)) scale(1.05); opacity: 0.55; }
        }
      `}</style>

      {/* Floating platform icons around the cards */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            ["--fx" as string]: "0px",
            ["--fy" as string]: "0px",
            animation: `icon-float 3s ease-in-out ${delay}s infinite`,
            zIndex: 0,
          }}
        >
          <Icon size={28} />
        </div>
      ))}

      {/* Notification cards */}
      <div className="relative z-10 flex flex-col gap-3.5">
        {notifications.map((n, i) => (
          <div
            key={n.name}
            className="flex items-center gap-4 border-2 border-ink bg-card px-5 py-4"
            style={{
              borderRadius: 22,
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Avatar src={n.avatar} alt={n.name} size={48} />
            <div className="flex-1 min-w-0">
              <p className="text-[16px] font-semibold text-ink leading-tight">{n.name}</p>
              <p className="text-[14px] text-muted mt-0.5">{n.followers} followers</p>
            </div>
            {n.platform}
          </div>
        ))}
      </div>
    </div>
  );
}
