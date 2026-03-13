"use client";

import Image from "next/image";
import { AppIconX, AppIconInstagram, AppIconTikTok, AppIconThreads, AppIconBluesky, AppIconLinkedIn } from "./Icons";
import Avatar from "./Avatar";

const iconPositions = [
  { Icon: AppIconInstagram, top: "8%", left: "0%", size: 44, delay: 0 },
  { Icon: AppIconX, top: "30%", left: "12%", size: 40, delay: 0.4 },
  { Icon: AppIconTikTok, top: "55%", left: "2%", size: 42, delay: 0.8 },
  { Icon: AppIconThreads, top: "5%", left: "28%", size: 36, delay: 1.2 },
  { Icon: AppIconBluesky, top: "78%", left: "15%", size: 38, delay: 0.6 },
  { Icon: AppIconLinkedIn, top: "45%", left: "30%", size: 34, delay: 1.0 },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full flex items-center" style={{ minHeight: 420 }}>
      <style>{`
        @keyframes icon-drift {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-8px); opacity: 0.85; }
        }
      `}</style>

      {/* Left: scattered platform icons */}
      <div className="relative w-[45%] h-full shrink-0" style={{ minHeight: 420 }}>
        {iconPositions.map(({ Icon, top, left, size, delay }, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top,
              left,
              animation: `icon-drift 3.5s ease-in-out ${delay}s infinite`,
            }}
          >
            <Icon size={size} />
          </div>
        ))}

        {/* Connecting lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
          <line x1="55%" y1="15%" x2="95%" y2="25%" stroke="#121212" strokeWidth="1" opacity="0.08" />
          <line x1="50%" y1="40%" x2="95%" y2="40%" stroke="#121212" strokeWidth="1" opacity="0.06" />
          <line x1="45%" y1="65%" x2="95%" y2="55%" stroke="#121212" strokeWidth="1" opacity="0.08" />
        </svg>
      </div>

      {/* Right: daily report card */}
      <div className="flex-1">
        <div
          className="border-2 border-ink bg-card"
          style={{ borderRadius: 24, padding: 28 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/who-icon.png"
                alt="Who?"
                width={28}
                height={28}
                style={{ borderRadius: "22%" }}
              />
              <span
                className="text-lg font-bold text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Daily Report
              </span>
            </div>
            <span className="text-[13px] font-medium text-muted">Today</span>
          </div>

          {/* Summary stats */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-blue border-2 border-ink p-3 text-center" style={{ borderRadius: 14 }}>
              <p className="text-2xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>12</p>
              <p className="text-[12px] font-medium text-ink/60 mt-1">new</p>
            </div>
            <div className="flex-1 bg-lime border-2 border-ink p-3 text-center" style={{ borderRadius: 14 }}>
              <p className="text-2xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>3</p>
              <p className="text-[12px] font-medium text-ink/60 mt-1">notable</p>
            </div>
            <div className="flex-1 bg-apricot border-2 border-ink p-3 text-center" style={{ borderRadius: 14 }}>
              <p className="text-2xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>1</p>
              <p className="text-[12px] font-medium text-ink/60 mt-1">verified</p>
            </div>
          </div>

          {/* Key follower */}
          <div
            className="flex items-center gap-4 p-4 border-2 border-ink bg-cream mb-3"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/elon.png" alt="Elon M." size={44} />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-ink">Elon M.</p>
              <p className="text-[13px] text-muted">142M followers</p>
            </div>
            <AppIconX size={22} />
          </div>

          <div
            className="flex items-center gap-4 p-4 border-2 border-ink bg-cream"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/emma.png" alt="Emma C." size={44} />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-ink">Emma C.</p>
              <p className="text-[13px] text-muted">2.4M followers</p>
            </div>
            <AppIconInstagram size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
