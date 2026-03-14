"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "./AnimateIn";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Testimonial card - pink/lavender like Tea */}
        <AnimateIn>
          <div
            className="bg-lavender/40 p-8 md:p-10 h-full flex flex-col justify-between"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div>
              <h3
                className="text-2xl md:text-3xl font-extrabold text-ink uppercase tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CREATORS <span className="text-blue">LOVE</span> WHO?
              </h3>
              <p className="text-base text-ink/70 mt-5 leading-relaxed italic">
                &ldquo;I had no idea a YC founder followed me three weeks ago. Who? showed me in my morning report. That one connection changed everything.&rdquo;
              </p>
              <p className="text-sm font-bold text-ink/40 mt-4">@earlyuser</p>
            </div>
          </div>
        </AnimateIn>

        {/* Join CTA card - blue like Tea's */}
        <AnimateIn>
          <div
            className="bg-blue p-8 md:p-10 h-full flex flex-col justify-between"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div>
              <h3
                className="text-2xl md:text-3xl font-extrabold text-ink uppercase tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                JOIN WHO? TODAY
              </h3>
              <p className="text-sm text-ink/50 mt-2">Free early access. No credit card.</p>
            </div>

            <div className="mt-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 text-sm text-ink bg-cream rounded-full placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-ink/20"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  <button
                    type="submit"
                    className="btn-hover w-full px-5 py-3.5 text-sm font-bold bg-card text-ink rounded-full"
                  >
                    Join waitlist
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 px-5 py-3.5 bg-cream rounded-full animate-fade-in-up">
                  <span className="w-6 h-6 bg-lime rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className="text-sm font-bold text-ink">You&apos;re on the list!</span>
                </div>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
