"use client";

import AnimateIn from "./AnimateIn";
import BrandName from "./BrandName";
import HoverShimmer from "./HoverShimmer";

function FaqCard({ bg, q, children, className = "" }: { bg: string; q: string; children: React.ReactNode; className?: string }) {
  return (
    <AnimateIn className={className}>
      <div className={`${bg} border-[3px] border-ink p-5 card-hover h-full flex flex-col justify-between`} style={{ borderRadius: "var(--radius-xl)" }}>
        <h3 className="text-base font-bold text-ink leading-snug tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <HoverShimmer>{q}</HoverShimmer>
        </h3>
        <p className="text-sm text-ink/60 mt-3 leading-relaxed">{children}</p>
      </div>
    </AnimateIn>
  );
}

export default function Faq() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
              <HoverShimmer>Yeah but...</HoverShimmer>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">Fair questions. Real answers.</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[80px] gap-3">

          {/* Big — tracker question */}
          <FaqCard bg="bg-card" q="Is this just a follower tracker?" className="col-span-4 row-span-2">
            No. Follower trackers show numbers. <BrandName size="text-sm" /> shows you people — bios, follower counts, cross-platform presence. The signal behind the noise.
          </FaqCard>

          {/* Tall — notifications */}
          <FaqCard bg="bg-blue" q="How is this different from notifications?" className="col-span-2 md:col-span-2 row-span-3">
            Notifications say @xk29d followed you. <BrandName size="text-sm" /> says &quot;Sarah Chen, VP Design at Figma, 89K followers.&quot;
          </FaqCard>

          {/* Small — platforms */}
          <FaqCard bg="bg-lime" q="What platforms?" className="col-span-2 row-span-2">
            X, Instagram, TikTok, Threads, Bluesky, LinkedIn. 30 seconds to connect.
          </FaqCard>

          {/* Small — data */}
          <FaqCard bg="bg-apricot" q="Is my data safe?" className="col-span-2 row-span-2">
            We never post on your behalf. Read-only access. Encrypted. Disconnect anytime.
          </FaqCard>

          {/* Wide — cost */}
          <FaqCard bg="bg-card" q="How much?" className="col-span-4 md:col-span-3 row-span-1">
            Free during early access. Best deal for early waitlist members.
          </FaqCard>

          {/* Small — timing */}
          <FaqCard bg="bg-card" q="When do I get my report?" className="col-span-2 md:col-span-3 row-span-1">
            Every morning at 8am, your timezone.
          </FaqCard>

        </div>
      </div>
    </section>
  );
}
