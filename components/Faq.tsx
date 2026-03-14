"use client";

import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";

const faqs = [
  {
    q: "Is this just a follower tracker?",
    a: <>No. Follower trackers show numbers. <BrandName size="text-sm" /> shows you people — bios, follower counts, cross-platform presence. The signal behind the noise.</>,
  },
  {
    q: "What platforms?",
    a: "X, Instagram, TikTok, Threads, Bluesky, and LinkedIn. Connect them all in 30 seconds.",
  },
  {
    q: "Is my data safe?",
    a: "We never post on your behalf. Read-only access. Encrypted. Disconnect anytime.",
  },
  {
    q: "How much?",
    a: "Free during early access. Best deal for early waitlist members.",
  },
  {
    q: "When do I get my report?",
    a: "Every morning at 8am, your timezone. Full report in the app.",
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <AnimateIn>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink text-center uppercase mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          YEAH BUT...
        </h2>
      </AnimateIn>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <AnimateIn key={i}>
            <div className="bg-card p-6 md:p-7 rounded-2xl">
              <h3
                className="text-lg font-bold text-ink leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {faq.q}
              </h3>
              <p className="text-base text-ink/50 mt-2 leading-relaxed">{faq.a}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
