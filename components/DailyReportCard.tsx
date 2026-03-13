"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppIconX, AppIconInstagram, AppIconTikTok } from "./Icons";
import Avatar from "./Avatar";

const followers = [
  {
    avatar: "/avatars/elon.png",
    name: "Elon M.",
    handle: "followed you",
    icon: <AppIconX size={15} />,
    tags: [
      { label: "142M", color: "bg-lime" },
      { label: "Top 0.01%", color: "bg-blue" },
      { label: "Tech", color: "bg-apricot" },
    ],
  },
  {
    avatar: "/avatars/emma.png",
    name: "Emma C.",
    handle: "followed you",
    icon: <AppIconInstagram size={15} />,
    tags: [
      { label: "2.4M", color: "bg-lime" },
      { label: "Creator", color: "bg-blue" },
      { label: "Lifestyle", color: "bg-apricot" },
    ],
  },
  {
    avatar: "/avatars/james.png",
    name: "James M.",
    handle: "followed you",
    icon: <AppIconX size={15} />,
    tags: [
      { label: "890K", color: "bg-lime" },
      { label: "Founder", color: "bg-blue" },
      { label: "SaaS", color: "bg-apricot" },
    ],
  },
  {
    avatar: "/avatars/priya.png",
    name: "Priya S.",
    handle: "followed you",
    icon: <AppIconTikTok size={15} />,
    tags: [
      { label: "310K", color: "bg-lime" },
      { label: "Viral", color: "bg-blue" },
      { label: "Design", color: "bg-apricot" },
    ],
  },
];

export default function DailyReportCard() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [count, setCount] = useState(11);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % followers.length);
        setCount((c) => c + 1);
        setFading(false);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const f = followers[idx];

  return (
    <div
      className="border-[3px] border-ink bg-card shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
      style={{ borderRadius: "var(--radius-xl)", width: "100%", maxWidth: 330 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3 border-b-[3px] border-ink">
        <Image
          src="/who-icon.png"
          alt="Who?"
          width={20}
          height={20}
          style={{ borderRadius: "22%" }}
        />
        <span
          className="text-sm font-bold text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your signal
        </span>
        <span className="text-xs text-muted ml-auto">Today</span>
      </div>

      {/* Follower -- animated swap */}
      <div
        className="px-5 pt-4 pb-3 transition-all duration-250"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(-6px)" : "translateY(0)",
          filter: fading ? "blur(4px)" : "blur(0px)",
        }}
      >
        <div className="flex items-start gap-3">
          <Avatar src={f.avatar} alt={f.name} size={44} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-ink">{f.name}</span>
              {f.icon}
            </div>
            <p className="text-xs text-muted mt-0.5">{f.handle}</p>

            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {f.tags.map((t) => (
                <span
                  key={t.label}
                  className={`text-[11px] font-bold text-ink ${t.color} px-2.5 py-0.5 border-[2px] border-ink`}
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insight strip */}
      <div className="mx-5 mb-4">
        <div
          className="bg-cream border-[2px] border-ink/10 px-4 py-3 flex items-center gap-3"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          <div
            className="w-7 h-7 bg-lime border-[2px] border-ink flex items-center justify-center shrink-0"
            style={{ borderRadius: 8 }}
          >
            <svg className="w-3.5 h-3.5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-ink">Unusual activity</p>
            <p className="text-[11px] text-muted">3 notable follows in the last hour</p>
          </div>
        </div>
      </div>

      {/* Footer with live count */}
      <div
        className="px-5 py-2.5 border-t-[3px] border-ink bg-cream/50 text-center"
        style={{ borderRadius: "0 0 25px 25px" }}
      >
        <p className="text-xs font-bold text-muted">
          +<span className="tabular-nums">{count}</span> new today &middot; 4 notable
        </p>
      </div>
    </div>
  );
}
