"use client";

import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";
import NotifStack from "./NotifStack";
import Image from "next/image";

const signals = [
  {
    name: "Sara R.",
    stat: "89K followers",
    platform: "Instagram",
    src: "/icons/instagram-appstore-raw.jpg",
  },
  {
    name: "James M.",
    stat: "1.2M followers",
    platform: "X",
    src: "/icons/x-appstore-raw.jpg",
  },
  {
    name: "Priya S.",
    stat: "310K followers",
    platform: "TikTok",
    src: "/icons/tiktok-appstore-raw.jpg",
  },
];

export default function Comparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Noise card */}
      <AnimateIn>
        <div className="neo-card-static bg-white h-[380px] overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b-2 border-ink flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                style={{
                  animation: "bell-ring 2s ease-in-out infinite",
                  display: "inline-block",
                }}
              >
                🔔
              </span>
              <span
                className="text-xs font-extrabold text-ink uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Notifications
              </span>
            </div>
            <AnimatedCounter />
          </div>
          <div className="flex-1 overflow-hidden relative">
            <NotifStack />
            <div
              className="absolute bottom-0 inset-x-0 h-14 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, var(--color-white), transparent)",
              }}
            />
          </div>
        </div>
      </AnimateIn>

      {/* Signal card */}
      <AnimateIn>
        <div className="neo-card-static bg-yellow h-[380px] flex flex-col">
          <div className="px-4 py-3 border-b-2 border-ink">
            <span
              className="text-xs font-extrabold text-ink uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ✨ Who? Report
            </span>
          </div>
          <div className="flex-1 p-4 flex flex-col justify-center gap-2.5">
            {signals.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 p-3 bg-cream rounded-2xl border-2 border-ink neo-card-sm"
              >
                <div className="w-10 h-10 rounded-xl border-2 border-ink shrink-0 overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.platform}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-extrabold text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.name}
                  </p>
                  <p className="text-xs text-ink/50">{s.stat}</p>
                </div>
                <span className="neo-pill bg-blue text-white text-[10px] font-bold px-2.5 py-0.5 uppercase">
                  {s.platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
