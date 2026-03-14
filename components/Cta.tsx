"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "./AnimateIn";
import HoverShimmer from "./HoverShimmer";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[65px] gap-3">

          {/* Main CTA — big card */}
          <AnimateIn className="col-span-4 md:col-span-4 row-span-4">
            <div
              className="border-[3px] border-ink bg-lime p-6 md:p-8 h-full flex flex-col justify-between"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Don&apos;t miss who&apos;s watching.
                </h2>
                <p className="text-sm text-ink/50 mt-2">Free early access. No credit card.</p>
              </div>

              <div className="mt-5">
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 sm:border-[3px] sm:border-ink sm:bg-cream sm:overflow-hidden"
                    style={{ borderRadius: "var(--radius-md)" }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 text-sm text-ink bg-cream placeholder:text-muted/50 border-[3px] border-ink sm:border-0 focus:outline-none"
                      style={{ borderRadius: "var(--radius-md)", fontFamily: "var(--font-body)" }}
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 text-sm font-bold bg-ink text-cream shrink-0 border-[3px] border-ink sm:border-0"
                      style={{ borderRadius: "var(--radius-md)" }}
                    >
                      <HoverShimmer>Join waitlist</HoverShimmer>
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 border-[3px] border-ink bg-cream animate-fade-in-up" style={{ borderRadius: "var(--radius-md)" }}>
                    <span className="w-7 h-7 bg-lime border-[2px] border-ink flex items-center justify-center shrink-0" style={{ borderRadius: 8 }}>
                      <svg className="w-3.5 h-3.5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-sm font-bold text-ink">You&apos;re on the list!</span>
                  </div>
                )}
              </div>
            </div>
          </AnimateIn>

          {/* Feature pill — daily report */}
          <AnimateIn className="col-span-2 row-span-2">
            <div className="border-[3px] border-ink bg-blue p-4 card-hover h-full flex flex-col justify-center text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <p className="text-2xl">📊</p>
              <p className="text-xs font-bold text-ink mt-1"><HoverShimmer>Daily signal report</HoverShimmer></p>
            </div>
          </AnimateIn>

          {/* Feature pill — alerts */}
          <AnimateIn className="col-span-2 row-span-2">
            <div className="border-[3px] border-ink bg-apricot p-4 card-hover h-full flex flex-col justify-center text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <p className="text-2xl">🔔</p>
              <p className="text-xs font-bold text-ink mt-1"><HoverShimmer>Notable follow alerts</HoverShimmer></p>
            </div>
          </AnimateIn>

          {/* Feature pill — cross-platform */}
          <AnimateIn className="col-span-2 row-span-2">
            <div className="border-[3px] border-ink bg-card p-4 card-hover h-full flex flex-col justify-center text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <p className="text-2xl">🌐</p>
              <p className="text-xs font-bold text-ink mt-1"><HoverShimmer>6 platforms</HoverShimmer></p>
            </div>
          </AnimateIn>

          {/* Feature pill — free */}
          <AnimateIn className="col-span-2 row-span-2">
            <div className="border-[3px] border-ink bg-lime/50 p-4 card-hover h-full flex flex-col justify-center text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <p className="text-2xl">✨</p>
              <p className="text-xs font-bold text-ink mt-1"><HoverShimmer>Free early access</HoverShimmer></p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
