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
    <section className="bg-sky py-20 md:py-28 border-b-3 border-ink">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink uppercase tracking-tight text-center mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Noise vs.{" "}
            <span
              className="bg-yellow px-3 py-1 border-3 border-ink inline-block"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            >
              Signal
            </span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Noise side */}
          <AnimateIn>
            <div className="neo-card bg-white h-[420px] overflow-hidden flex flex-col">
              <div className="px-5 py-3.5 border-b-3 border-ink flex items-center justify-between bg-white">
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
                    className="text-sm font-extrabold text-ink uppercase"
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
                  className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, white, transparent)",
                  }}
                />
              </div>
            </div>
          </AnimateIn>

          {/* Signal side */}
          <AnimateIn>
            <div className="neo-card bg-yellow h-[420px] flex flex-col">
              <div className="px-5 py-3.5 border-b-3 border-ink flex items-center gap-2">
                <span
                  className="text-sm font-extrabold text-ink uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Who? Report
                </span>
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center gap-3">
                {signals.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 p-4 bg-white border-2 border-ink neo-card-sm"
                  >
                    <div className="w-12 h-12 bg-ink/10 border-2 border-ink shrink-0 flex items-center justify-center overflow-hidden">
                      <Image
                        src={s.src}
                        alt={s.platform}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-base font-extrabold text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.name}
                      </p>
                      <p className="text-sm text-ink/50">{s.stat}</p>
                    </div>
                    <span className="text-xs font-bold text-ink/40 uppercase">
                      {s.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
