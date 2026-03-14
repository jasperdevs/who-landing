"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { card, btn } from "@/lib/styles";

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
        <div className={`${card} bg-yellow p-8 md:p-12`}>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold text-ink uppercase tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Your New Followers Are Waiting
            </h3>
            <p className="text-base text-ink/40 mt-3 font-medium">
              Free during early access. No credit card. Cancel anytime.
            </p>

            {/* Social proof */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {["/avatars/sara.png", "/avatars/james.png", "/avatars/priya.png", "/avatars/emma.png", "/avatars/alex.png"].map((src, i) => (
                  <Image key={i} src={src} alt="" width={28} height={28} className="w-7 h-7 rounded-full border-2 border-yellow object-cover" />
                ))}
              </div>
              <span className="text-sm text-ink/50 font-medium">
                Join <span className="font-bold text-ink">2,400+</span> creators
              </span>
            </div>

            <div className="mt-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                    className="flex-1 px-5 py-3.5 text-sm text-ink bg-white rounded-full border-[3px] border-ink placeholder:text-ink/25 focus:outline-none focus:ring-2 focus:ring-blue font-medium" />
                  <button type="submit" className={`${btn} px-7 py-3.5 bg-ink text-white text-sm`}>Join Waitlist →</button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 px-5 py-3.5 bg-white rounded-full border-[3px] border-ink max-w-sm mx-auto animate-[fade-in-up_0.5s_ease-out]">
                  <span className="w-6 h-6 bg-blue text-white rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
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
