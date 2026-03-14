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
      <AnimateIn>
        <div className="bento bg-yellow p-6 md:p-10">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-extrabold text-ink uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Join Who? Today
            </h3>
            <p className="text-sm text-ink/40 mt-2 font-medium">
              Free early access. No credit card needed.
            </p>

            <div className="mt-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-5 py-3 text-sm text-ink bg-white rounded-full border-2 border-ink placeholder:text-ink/25 focus:outline-none focus:ring-2 focus:ring-blue font-medium"
                  />
                  <button type="submit" className="pill-btn px-7 py-3 bg-ink text-white text-sm">
                    Join Waitlist →
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 px-5 py-3 bg-white rounded-full border-2 border-ink max-w-sm mx-auto animate-fade-in-up">
                  <span className="w-6 h-6 bg-blue text-white rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>You&apos;re on the list!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
