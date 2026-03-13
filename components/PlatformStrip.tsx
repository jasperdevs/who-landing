"use client";

import { useEffect, useRef } from "react";
import {
  AppIconX,
  AppIconInstagram,
  AppIconTikTok,
  AppIconBluesky,
  AppIconLinkedIn,
  AppIconThreads,
} from "./Icons";

const icons = [
  AppIconX,
  AppIconInstagram,
  AppIconTikTok,
  AppIconThreads,
  AppIconBluesky,
  AppIconLinkedIn,
];

export default function PlatformStrip() {
  const doubled = [...icons, ...icons];
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    el.style.setProperty("--sw", `${half}px`);
  }, []);

  return (
    <div className="relative overflow-hidden w-56">
      <style>{`
        @keyframes ss { from { transform: translateX(0); } to { transform: translateX(calc(var(--sw, 300px) * -1)); } }
      `}</style>

      <div
        ref={stripRef}
        className="flex items-center gap-4 w-max"
        style={{ animation: "ss 16s linear infinite" }}
      >
        {doubled.map((Icon, i) => (
          <Icon key={i} size={34} />
        ))}
      </div>
    </div>
  );
}
