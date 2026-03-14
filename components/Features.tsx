"use client";

import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Notable Follow Alerts",
    desc: "Get notified when someone important follows you",
    bg: "bg-yellow",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Deep Profile Lookup",
    desc: "Bios, follower counts, cross-platform presence",
    bg: "bg-sky",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Daily Signal Report",
    desc: "Every morning at 8am — your personalized follower intel",
    bg: "bg-cream",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Cross-Platform",
    desc: "X, Instagram, TikTok, Threads, Bluesky, LinkedIn",
    bg: "bg-blue",
    light: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy First",
    desc: "Read-only access. Encrypted. Disconnect anytime",
    bg: "bg-yellow",
  },
];

export default function Features() {
  return (
    <section id="features" className="neo-card-static bg-cream overflow-hidden">
      <div className="px-6 py-14 md:py-20">
        <AnimateIn>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink uppercase tracking-tight text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your{" "}
            <span className="neo-pill inline-block bg-yellow px-4 py-0.5">
              Tools
            </span>
          </h2>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <AnimateIn
              key={f.title}
              className={i === 3 ? "col-span-2 md:col-span-1" : ""}
            >
              <div
                className={`neo-card p-5 md:p-6 h-full ${f.bg} ${
                  f.light ? "text-white" : "text-ink"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    f.light ? "bg-white/20" : "bg-ink text-white"
                  }`}
                >
                  {f.icon}
                </div>
                <h3
                  className="text-base md:text-lg font-extrabold uppercase tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    f.light ? "text-white/70" : "text-ink/50"
                  }`}
                >
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
