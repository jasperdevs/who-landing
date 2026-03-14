"use client";

import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "Is this just a follower tracker?",
    a: "No. Follower trackers show numbers. Who? shows you people — bios, follower counts, cross-platform presence. The signal behind the noise.",
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
    <section id="faq" className="bg-blue py-20 md:py-28 border-b-3 border-ink">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight text-center mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yeah But...
          </h2>
        </AnimateIn>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AnimateIn key={i}>
              <div
                className={`neo-card p-7 ${
                  i % 2 === 0 ? "bg-yellow" : "bg-white"
                }`}
              >
                <h3
                  className="text-lg font-extrabold text-ink uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.q}
                </h3>
                <p className="text-base text-ink/60 mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
