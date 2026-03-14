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

const colors = ["bg-yellow", "bg-cream", "bg-sky", "bg-cream", "bg-yellow"];

export default function Faq() {
  return (
    <section id="faq" className="neo-card-static bg-ink overflow-hidden">
      <div className="px-6 py-14 md:py-20">
        <AnimateIn>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yeah But...
          </h2>
        </AnimateIn>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={i}>
              <div className={`neo-card p-5 md:p-6 ${colors[i]}`}>
                <h3
                  className="text-base font-extrabold text-ink uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm text-ink/50 mt-2 leading-relaxed">
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
