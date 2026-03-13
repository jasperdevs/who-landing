"use client";

import Image from "next/image";
import { AppIconX, AppIconInstagram, AppIconTikTok, AppIconThreads, AppIconBluesky, AppIconLinkedIn } from "./Icons";
import Avatar from "./Avatar";

const iconPositions = [
  { Icon: AppIconInstagram, top: "5%", left: "5%", size: 46, delay: 0 },
  { Icon: AppIconX, top: "32%", left: "0%", size: 42, delay: 0.3 },
  { Icon: AppIconTikTok, top: "60%", left: "8%", size: 44, delay: 0.7 },
  { Icon: AppIconThreads, top: "12%", left: "32%", size: 36, delay: 1.1 },
  { Icon: AppIconBluesky, top: "82%", left: "3%", size: 38, delay: 0.5 },
  { Icon: AppIconLinkedIn, top: "50%", left: "28%", size: 36, delay: 0.9 },
];

const TRAIL_TEXT = "followed you · new follower · entered your orbit · discovered you · just followed · noticed you · started following · ";

export default function HeroVisual() {
  return (
    <div className="relative w-full" style={{ minHeight: 440 }}>
      <style>{`
        @keyframes icon-drift {
          0%, 100% { transform: translateY(0px); opacity: 0.55; }
          50% { transform: translateY(-6px); opacity: 0.9; }
        }
      `}</style>

      {/* Scattered platform icons — left side */}
      <div className="absolute left-0 top-0 w-[38%]" style={{ height: 440 }}>
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
      </div>

      {/* Flowing trail — connects icons to report */}
      <svg
        className="absolute inset-0 w-full pointer-events-none"
        viewBox="0 0 900 440"
        preserveAspectRatio="none"
        style={{ height: 440, overflow: "visible" }}
      >
        {/* The thick band */}
        <path
          id="hero-trail"
          d="M180,80 C260,80 300,200 360,240 C420,280 440,340 520,340 L900,340"
          fill="none"
          stroke="#121212"
          strokeWidth="32"
          strokeLinecap="round"
        />
        {/* Scrolling text along the band */}
        <text
          fontSize="13"
          fontWeight="600"
          fill="#fff"
          fontFamily="Figtree, sans-serif"
        >
          <textPath href="#hero-trail" dominantBaseline="central">
            <animate
              attributeName="startOffset"
              from="-100%"
              to="100%"
              dur="20s"
              repeatCount="indefinite"
            />
            {TRAIL_TEXT}{TRAIL_TEXT}{TRAIL_TEXT}
          </textPath>
        </text>
      </svg>

      {/* Daily report card — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[52%] max-w-[380px]">
        <div
          className="border-2 border-ink bg-card relative z-10"
          style={{ borderRadius: 24, padding: 24 }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/who-icon.png"
                alt="Who?"
                width={26}
                height={26}
                style={{ borderRadius: "22%" }}
              />
              <span
                className="text-[17px] font-bold text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Daily Report
              </span>
            </div>
            <span className="text-[12px] font-medium text-muted">Today</span>
          </div>

          <div className="flex gap-2.5 mb-5">
            <div className="flex-1 bg-blue border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>12</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">new</p>
            </div>
            <div className="flex-1 bg-lime border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>3</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">notable</p>
            </div>
            <div className="flex-1 bg-apricot border-2 border-ink p-2.5 text-center" style={{ borderRadius: 14 }}>
              <p className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>1</p>
              <p className="text-[11px] font-medium text-ink/60 mt-0.5">verified</p>
            </div>
          </div>

          <div
            className="flex items-center gap-3 p-3.5 border-2 border-ink bg-cream mb-2.5"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/elon.png" alt="Elon M." size={42} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-ink">Elon M.</p>
              <p className="text-[12px] text-muted">142M followers</p>
            </div>
            <AppIconX size={20} />
          </div>

          <div
            className="flex items-center gap-3 p-3.5 border-2 border-ink bg-cream"
            style={{ borderRadius: 16 }}
          >
            <Avatar src="/avatars/emma.png" alt="Emma C." size={42} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-ink">Emma C.</p>
              <p className="text-[12px] text-muted">2.4M followers</p>
            </div>
            <AppIconInstagram size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
