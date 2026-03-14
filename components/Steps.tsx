"use client";

import { Filter, Link2, Sparkles } from "lucide-react";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Connect accounts",
    desc: "Link your profiles with read-only access. No posting, no weird permissions.",
    icon: Link2,
  },
  {
    num: "02",
    title: "We rank the crowd",
    desc: "Who scans bios, follower counts, overlap, and relevance so you skip the randoms.",
    icon: Filter,
  },
  {
    num: "03",
    title: "You get the shortlist",
    desc: "Open the app and see notable followers, sorted into something you can actually act on.",
    icon: Sparkles,
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="px-4 pt-2 md:px-0">
      <AnimateIn>
        <div className="text-center">
          <p className="eyebrow mx-auto text-[var(--ink-strong)]">How it works</p>
          <h2 className="section-title mt-5 text-4xl text-white md:text-6xl">A softer flow, still sharp.</h2>
        </div>
      </AnimateIn>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <AnimateIn key={step.num}>
              <div className="glass-card flex h-full flex-col rounded-[30px] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--accent-sun)] text-[var(--ink-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-4xl font-black tracking-[-0.08em] text-[var(--accent-strong)]/25">{step.num}</span>
                </div>
                <h3 className="mt-10 text-2xl font-black tracking-[-0.05em] text-[var(--ink-strong)]" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[var(--ink-soft)] md:text-base">{step.desc}</p>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
