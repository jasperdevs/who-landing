"use client";

import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";
import HoverShimmer from "./HoverShimmer";

const annotations = [
  {
    label: "The headline",
    value: "12 notable followers",
    description: "Not 232 random accounts. The 12 that matter.",
    color: "bg-lime",
  },
  {
    label: "The VIP",
    value: "Sarah Chen",
    description: "VP Design @ Figma \u00b7 89K followers \u00b7 followed you on X",
    color: "bg-blue",
  },
  {
    label: "The trend",
    value: "\u2191 34% this week",
    description: "Your follower quality is trending up. More creators, fewer bots.",
    color: "bg-apricot",
  },
  {
    label: "The alert",
    value: "2 notable unfollows",
    description: "Two 100K+ accounts stopped following. Worth knowing.",
    color: "bg-cream",
  },
];

export default function ReportDeepDive() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HoverShimmer>Your 8am briefing.</HoverShimmer>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-md mx-auto leading-relaxed">
              Every morning. One report from <BrandName size="text-lg" />. Everyone who matters.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div
            className="border-[3px] border-ink bg-card p-6 md:p-8"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Report header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-[2px] border-ink/10">
              <div>
                <p className="text-xs text-muted uppercase tracking-widest font-bold">Daily Report</p>
                <p className="text-2xl md:text-3xl font-bold text-ink mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  Tuesday, Mar 11
                </p>
              </div>
              <div
                className="bg-lime border-[2px] border-ink px-4 py-2 text-center"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <p className="text-2xl font-bold text-ink tabular-nums">12</p>
                <p className="text-[10px] font-bold text-ink/60 uppercase">Notable</p>
              </div>
            </div>

            {/* Annotation cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {annotations.map((a, i) => (
                <div
                  key={a.label}
                  className={`${a.color} border-[2px] border-ink p-4 card-hover`}
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-bold text-ink/50 uppercase tracking-wider bg-ink/5 px-2 py-0.5"
                      style={{ borderRadius: 6 }}
                    >
                      {a.label}
                    </span>
                  </div>
                  <p className="text-base font-bold text-ink">
                    <HoverShimmer>{a.value}</HoverShimmer>
                  </p>
                  <p className="text-xs text-ink/60 mt-1 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom tagline */}
            <div className="mt-6 pt-4 border-t-[2px] border-ink/10 text-center">
              <p className="text-sm text-muted">
                Not a list of @usernames. <span className="font-bold text-ink">A briefing.</span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
