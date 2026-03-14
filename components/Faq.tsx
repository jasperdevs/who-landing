"use client";

import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";
import HoverShimmer from "./HoverShimmer";

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
          <FaqCard bg="bg-card" q="Is this just a follower tracker?">
            No. Follower trackers show you numbers. <BrandName size="text-sm" /> shows you people. We analyze bios, follower counts, and cross-platform presence to surface who actually matters.
          </FaqCard>
          <FaqCard bg="bg-blue" q="How is this different from notifications?">
            Your notifications show @xk29d followed you. <BrandName size="text-sm" /> shows you &quot;Sarah Chen, VP Design at Figma (89K followers) followed you.&quot; That&apos;s the difference.
          </FaqCard>
          <FaqCard bg="bg-card" q="What platforms do you support?">
            X, Instagram, TikTok, Threads, Bluesky, and LinkedIn. Connect them all in 30 seconds.
          </FaqCard>
          <FaqCard bg="bg-lime" q="Is my data safe?">
            We never post on your behalf. We only read public follower data. Your accounts are encrypted and you can disconnect anytime.
          </FaqCard>
          <FaqCard bg="bg-card" q="How much does it cost?">
            Free during early access. We&apos;ll announce pricing before anything changes. Early waitlist members get the best deal.
          </FaqCard>
          <FaqCard bg="bg-apricot" q="When do I get my report?">
            Every morning at 8am, your timezone. A notification with the highlights, full report in the app.
          </FaqCard>
        </div>
      </div>
    </section>
  );
}

function FaqCard({ bg, q, children }: { bg: string; q: string; children: React.ReactNode }) {
  return (
    <AnimateIn>
      <div
        className={`${bg} border-[3px] border-ink p-5 md:p-6 card-hover h-full`}
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        <h3
          className="text-lg font-bold text-ink leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <HoverShimmer>{q}</HoverShimmer>
        </h3>
        <p className="text-sm text-ink/60 mt-3 leading-relaxed">
          {children}
        </p>
      </div>
    </AnimateIn>
  );
}
