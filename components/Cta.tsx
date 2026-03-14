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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Testimonial */}
        <AnimateIn>
          <div className="neo-card-static bg-sky p-6 md:p-8 h-full flex flex-col justify-between">
            <div>
              <h3
                className="text-xl md:text-2xl font-extrabold text-ink uppercase tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Creators{" "}
                <span className="neo-pill inline-block bg-blue text-white px-3 py-0.5 text-lg">
                  Love
                </span>{" "}
                Who?
              </h3>
              <p className="text-sm text-ink/50 mt-5 leading-relaxed italic">
                &ldquo;I had no idea a YC founder followed me three weeks
                ago. Who? showed me in my morning report. That one
                connection changed everything.&rdquo;
              </p>
              <p className="text-xs font-extrabold text-ink/25 mt-3 uppercase">
                @earlyuser
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Join form */}
        <AnimateIn>
          <div className="neo-card-static bg-yellow p-6 md:p-8 h-full flex flex-col justify-between">
            <div>
              <h3
                className="text-xl md:text-2xl font-extrabold text-ink uppercase tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Join Who? Today
              </h3>
              <p className="text-xs text-ink/40 mt-1 font-semibold">
                Free early access. No credit card.
              </p>
            </div>

            <div className="mt-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-3 text-sm text-ink bg-cream rounded-full border-2 border-ink placeholder:text-ink/25 focus:outline-none focus:ring-2 focus:ring-blue font-medium"
                  />
                  <button
                    type="submit"
                    className="neo-btn w-full px-5 py-3 bg-ink text-white text-sm"
                  >
                    Join Waitlist →
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 px-5 py-3 bg-cream rounded-full border-2 border-ink animate-fade-in-up">
                  <span className="w-6 h-6 bg-blue text-white rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    className="text-sm font-extrabold text-ink uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    You&apos;re on the list!
                  </span>
                </div>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
