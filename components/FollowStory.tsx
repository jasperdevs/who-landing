"use client";

import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";
import HoverShimmer from "./HoverShimmer";

const steps = [
  {
    date: "Mar 3",
    type: "noise",
    text: "@marcb_sf followed you",
    detail: "Lost in 47 other notifications",
  },
  {
    date: "Mar 3",
    type: "signal",
    text: "Marc Benioff followed you",
    detail: "CEO of Salesforce \u00b7 1.8M followers \u00b7 X",
  },
  {
    date: "Mar 4",
    type: "action",
    text: "You replied to his tweet",
    detail: "Within 24 hours of the follow",
  },
  {
    date: "Mar 12",
    type: "outcome",
    text: "He retweeted you",
    detail: "To 1.8M people",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const isNoise = step.type === "noise";
  const isSignal = step.type === "signal";
  const isOutcome = step.type === "outcome";

  const bg = isNoise ? "bg-cream" : isSignal ? "bg-lime" : isOutcome ? "bg-apricot" : "bg-blue";
  const opacity = isNoise ? "opacity-50" : "";

  return (
    <AnimateIn>
      <div className="flex gap-4 items-start">
        {/* Timeline */}
        <div className="flex flex-col items-center shrink-0 w-16">
          <span className="text-[11px] font-bold text-muted">{step.date}</span>
          <div className={`w-3 h-3 border-[2px] border-ink mt-2 ${isNoise ? "bg-cream" : isSignal ? "bg-lime" : isOutcome ? "bg-apricot" : "bg-blue"}`} style={{ borderRadius: "50%" }} />
          {index < steps.length - 1 && <div className="w-[2px] h-12 bg-ink/10 mt-1" />}
        </div>

        {/* Card */}
        <div
          className={`flex-1 ${bg} border-[2px] border-ink p-4 ${opacity}`}
          style={{ borderRadius: "var(--radius-md)" }}
        >
          <p className="text-sm font-bold text-ink">{step.text}</p>
          <p className="text-xs text-ink/50 mt-1">{step.detail}</p>
          {isNoise && (
            <p className="text-[10px] text-ink/30 mt-2 italic">Without <BrandName size="text-[10px]" /></p>
          )}
          {isSignal && (
            <p className="text-[10px] text-ink/50 mt-2 font-bold">
              Flagged by <BrandName size="text-[10px]" />
            </p>
          )}
        </div>
      </div>
    </AnimateIn>
  );
}

export default function FollowStory() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HoverShimmer>What if you knew?</HoverShimmer>
            </h2>
          </div>
        </AnimateIn>

        <div
          className="border-[3px] border-ink bg-card p-6 md:p-8"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>

          {/* Punchline */}
          <AnimateIn>
            <div className="mt-8 pt-6 border-t-[2px] border-ink/10 text-center">
              <p className="text-xl md:text-2xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                You almost missed that.
              </p>
              <p className="text-sm text-muted mt-2 max-w-sm mx-auto">
                Every day, people who could change your trajectory follow you. Most go unnoticed.
              </p>
              <a
                href="#waitlist"
                className="btn-hover-dark inline-flex items-center px-6 py-3 text-sm font-bold bg-ink text-cream border-[3px] border-ink mt-5"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <HoverShimmer>Don&apos;t miss the next one</HoverShimmer>
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
