"use client";

import AnimateIn from "./AnimateIn";
import { AppIconX, AppIconInstagram, AppIconTikTok, AppIconBluesky, AppIconLinkedIn, AppIconThreads } from "./Icons";

const features = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "notable follow alerts",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "deep profile lookup",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "daily signal report",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "cross-platform tracking",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "privacy first",
  },
];

export default function Features() {
  return (
    <section id="features">
      {/* Big blue block - like Tea's "OUR SAFETY TOOLS" */}
      <AnimateIn>
        <div
          className="bg-blue p-10 md:p-16 text-center"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            YOUR{" "}
            <span className="relative inline-block">
              <span className="relative z-10">TOOLS</span>
              <span
                className="absolute -bottom-1 left-[-4px] right-[-4px] h-3 md:h-4 bg-lime -z-0 sketch-underline"
                style={{ borderRadius: 6 }}
              />
            </span>
          </h2>

          {/* Icon grid - like Tea's circular icon grid */}
          <div className="mt-10 md:mt-14 grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-2xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lime flex items-center justify-center text-ink">
                  {f.icon}
                </div>
                <p className="text-xs md:text-sm font-semibold text-ink text-center leading-tight">
                  {f.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Platform icon strip */}
      <AnimateIn>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <p className="text-sm font-semibold text-muted mr-2">Works with</p>
          <div className="flex items-center gap-3">
            <AppIconX size={32} />
            <AppIconInstagram size={32} />
            <AppIconTikTok size={32} />
            <AppIconThreads size={32} />
            <AppIconBluesky size={32} />
            <AppIconLinkedIn size={32} />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
