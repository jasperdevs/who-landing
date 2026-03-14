"use client";

import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Connect Your Accounts",
    desc: "Link X, Instagram, TikTok, and more in under 30 seconds. Read-only — we never post on your behalf.",
    bg: "bg-yellow",
  },
  {
    num: "02",
    title: "We Analyze Every Follow",
    desc: "Our engine scans new followers across all platforms, checking bios, follower counts, and cross-platform presence.",
    bg: "bg-sky",
  },
  {
    num: "03",
    title: "Get Your Morning Report",
    desc: "Every day at 8am you get a signal report. Who matters, who's a bot, who you should pay attention to.",
    bg: "bg-cream",
  },
];

export default function Steps() {
  return (
    <section className="bento bg-white">
      <div className="px-6 py-12 md:py-16">
        <AnimateIn>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink uppercase tracking-tight text-center mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It{" "}
            <span className="pill-badge inline-block bg-blue text-white px-5 py-0.5">
              Works
            </span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((s) => (
            <AnimateIn key={s.num}>
              <div className={`bento-inner p-6 h-full ${s.bg}`}>
                <span
                  className="pill-badge inline-block bg-ink text-white text-xs font-extrabold px-3 py-1 mb-4"
                >
                  Step {s.num}
                </span>
                <h3
                  className="text-base md:text-lg font-extrabold text-ink uppercase tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-ink/40 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
