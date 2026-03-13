import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";
import HoverShimmer from "./HoverShimmer";

const faqs = [
  {
    q: "Is this just a follower tracker?",
    a: "No. Follower trackers show you numbers. Who? shows you people. We analyze bios, follower counts, and cross-platform presence to surface who actually matters.",
    bg: "bg-card",
  },
  {
    q: "How is this different from notifications?",
    a: "Your notifications show @xk29d followed you. Who? shows you 'Sarah Chen, VP Design at Figma (89K followers) followed you.' That's the difference.",
    bg: "bg-blue",
  },
  {
    q: "What platforms do you support?",
    a: "X, Instagram, TikTok, Threads, Bluesky, and LinkedIn. Connect them all in 30 seconds.",
    bg: "bg-card",
  },
  {
    q: "Is my data safe?",
    a: "We never post on your behalf. We only read public follower data. Your accounts are encrypted and you can disconnect anytime.",
    bg: "bg-lime",
  },
  {
    q: "How much does it cost?",
    a: "Free during early access. We'll announce pricing before anything changes. Early waitlist members get the best deal.",
    bg: "bg-card",
  },
  {
    q: "When do I get my report?",
    a: "Every morning at 8am, your timezone. A notification with the highlights, full report in the app.",
    bg: "bg-apricot",
  },
];

export default function Faq() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <HoverShimmer>Yeah but...</HoverShimmer>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Fair questions. Real answers.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <AnimateIn key={i}>
              <div
                className={`${faq.bg} border-[3px] border-ink p-5 md:p-6 card-hover h-full`}
                style={{ borderRadius: "var(--radius-xl)" }}
              >
                <h3
                  className="text-lg font-bold text-ink leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>{faq.q}</HoverShimmer>
                </h3>
                <p className="text-sm text-ink/60 mt-3 leading-relaxed">
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
