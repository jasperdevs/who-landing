"use client";

import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: "🔔", title: "Notable Follow Alerts",
    desc: "Get notified when someone important follows you",
    bg: "bg-yellow",
  },
  {
    icon: "🔍", title: "Deep Profile Lookup",
    desc: "Bios, follower counts, cross-platform presence",
    bg: "bg-sky",
  },
  {
    icon: "📊", title: "Daily Signal Report",
    desc: "Every morning at 8am — your personalized follower intel",
    bg: "bg-cream",
  },
  {
    icon: "🌐", title: "Cross-Platform",
    desc: "X, Instagram, TikTok, Threads, Bluesky, LinkedIn",
    bg: "bg-blue text-white",
  },
  {
    icon: "🛡️", title: "Privacy First",
    desc: "Read-only access. Encrypted. Disconnect anytime",
    bg: "bg-yellow",
  },
];

export default function Features() {
  return (
    <section id="features" className="bento bg-cream">
      <div className="px-6 py-14 md:py-20">
        <AnimateIn>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink uppercase tracking-tight text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your{" "}
            <span className="pill-badge inline-block bg-yellow px-5 py-0.5">
              Tools
            </span>
          </h2>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <AnimateIn key={f.title} className={i === 3 ? "col-span-2 md:col-span-1" : ""}>
              <div className={`bento p-5 md:p-6 h-full ${f.bg}`}>
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3
                  className="text-sm md:text-base font-extrabold uppercase tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className={`text-xs leading-relaxed ${f.bg.includes("blue") ? "text-white/60" : "text-ink/40"}`}>
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
