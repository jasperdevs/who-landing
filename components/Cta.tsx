"use client";

import { useState, FormEvent } from "react";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div
          className="border-[3px] border-ink bg-lime p-8 md:p-12 text-center relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* Headline */}
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Don&apos;t miss who&apos;s watching.
          </h2>

          {/* What you get */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
            {["Daily signal report", "Notable follower alerts", "Cross-platform"].map((item) => (
              <span
                key={item}
                className="text-sm font-bold text-ink bg-cream/70 px-3.5 py-1.5 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Form */}
          <div className="mt-8 flex justify-center">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md gap-3 sm:gap-0 sm:border-[3px] sm:border-ink sm:bg-cream sm:overflow-hidden"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 text-base text-ink bg-cream placeholder:text-muted/50 border-[3px] border-ink sm:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                  style={{ borderRadius: "var(--radius-lg)", fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  className="px-7 py-4 text-base font-bold bg-ink text-cream shrink-0 border-[3px] border-ink sm:border-0"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  Join waitlist
                </button>
              </form>
            ) : (
              <div
                className="flex items-center gap-3 px-6 py-4 border-[3px] border-ink bg-cream animate-fade-in-up"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="w-8 h-8 bg-lime border-[3px] border-ink flex items-center justify-center shrink-0"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  <svg className="w-4 h-4 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-base font-bold text-ink">
                  You&apos;re on the list. We&apos;ll be in touch.
                </span>
              </div>
            )}
          </div>

          <p className="mt-4 text-sm text-ink/40">
            Free early access. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
