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
    <section id="waitlist" className="bg-yellow py-20 md:py-28 border-b-3 border-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial */}
          <AnimateIn>
            <div className="neo-card bg-white p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-extrabold text-ink uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Creators{" "}
                  <span className="bg-blue text-white px-2 border-2 border-ink">
                    Love
                  </span>{" "}
                  Who?
                </h3>
                <p className="text-base text-ink/60 mt-6 leading-relaxed italic">
                  &ldquo;I had no idea a YC founder followed me three weeks
                  ago. Who? showed me in my morning report. That one
                  connection changed everything.&rdquo;
                </p>
                <p className="text-sm font-extrabold text-ink/30 mt-4 uppercase">
                  @earlyuser
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Signup */}
          <AnimateIn>
            <div className="neo-card bg-ink p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Join Who? Today
                </h3>
                <p className="text-sm text-white/50 mt-2 font-medium">
                  Free early access. No credit card.
                </p>
              </div>

              <div className="mt-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-5 py-3.5 text-sm text-ink bg-white border-3 border-white placeholder:text-ink/30 focus:outline-none focus:border-yellow font-medium"
                    />
                    <button
                      type="submit"
                      className="neo-btn w-full px-5 py-3.5 bg-yellow text-ink text-sm"
                    >
                      Join Waitlist →
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 px-5 py-3.5 bg-yellow border-3 border-ink animate-fade-in-up">
                    <span className="w-7 h-7 bg-ink text-white flex items-center justify-center shrink-0 border-2 border-ink">
                      <svg
                        className="w-4 h-4"
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
      </div>
    </section>
  );
}
