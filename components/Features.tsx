"use client";

import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Notable Follow Alerts",
    desc: "Get notified when someone important follows you",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Deep Profile Lookup",
    desc: "See bios, follower counts, and cross-platform presence",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Daily Signal Report",
    desc: "Every morning at 8am — your personalized follower intel",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Cross-Platform",
    desc: "X, Instagram, TikTok, Threads, Bluesky, LinkedIn",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy First",
    desc: "Read-only access. Encrypted. Disconnect anytime",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28 border-b-3 border-ink">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink uppercase tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Tools</span>
                <span className="absolute -bottom-1 left-0 right-0 h-4 md:h-5 bg-yellow border-2 border-ink -z-0" />
              </span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimateIn key={f.title}>
              <div
                className={`neo-card p-7 h-full ${
                  i % 3 === 0
                    ? "bg-yellow"
                    : i % 3 === 1
                    ? "bg-sky"
                    : "bg-white"
                }`}
              >
                <div className="w-14 h-14 bg-ink text-white flex items-center justify-center border-2 border-ink mb-5">
                  {f.icon}
                </div>
                <h3
                  className="text-xl font-extrabold text-ink uppercase tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="text-base text-ink/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
