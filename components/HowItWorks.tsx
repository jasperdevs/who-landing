"use client";

import AnimateIn from "./AnimateIn";
import {
  AppIconX,
  AppIconInstagram,
  AppIconTikTok,
  AppIconBluesky,
  AppIconLinkedIn,
  AppIconThreads,
} from "./Icons";

const iconSet = [AppIconX, AppIconInstagram, AppIconTikTok, AppIconThreads, AppIconBluesky, AppIconLinkedIn];

function IconStrip() {
  return (
    <div className="flex items-center shrink-0">
      {iconSet.map((Icon, i) => (
        <div key={i} className="shrink-0 px-2">
          <Icon size={36} />
        </div>
      ))}
    </div>
  );
}

function SpinningIcons() {
  return (
    <div
      className="relative overflow-hidden mb-4 -mx-6"
      style={{ height: 46, perspective: "400px" }}
    >
      <div
        className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-blue) 0%, var(--color-blue) 25%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-blue) 0%, var(--color-blue) 25%, transparent 100%)" }}
      />
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex items-center w-max"
        style={{
          animation: "marquee-scroll 6s linear infinite",
          transform: "rotateX(8deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <IconStrip />
        <IconStrip />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="about" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 -- with spinning icons */}
            <div
              className="border-[3px] border-ink bg-blue p-6 flex flex-col card-hover overflow-hidden"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <SpinningIcons />
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Connect your accounts
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                Link X, Instagram, TikTok and more. Takes 30 seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="border-[3px] border-ink bg-lime p-6 flex flex-col card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-cream flex items-center justify-center mb-4"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We analyze every follower
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                Who? scans and surfaces the followers that actually matter.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="border-[3px] border-ink bg-card p-6 flex flex-col card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-apricot flex items-center justify-center mb-4"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get your daily signal
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                A daily report with insights, not just a list of usernames.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
