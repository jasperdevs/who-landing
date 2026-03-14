"use client";

import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";
import ScrollUnderline from "./ScrollUnderline";
import HoverShimmer from "./HoverShimmer";
import BrandName from "./BrandName";
import { AppIconX, AppIconInstagram, AppIconTikTok } from "./Icons";

export default function QuestionWall() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Discover{" "}
              <span className="relative inline-block">
                anyone.
                <ScrollUnderline />
              </span>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-md mx-auto leading-relaxed">
              Behind every follow is a person. <BrandName size="text-lg" /> shows you who they really are.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Large — VC discovery */}
          <AnimateIn>
            <div
              className="sm:col-span-2 border-[3px] border-ink bg-blue p-6 card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-3">You would have missed</p>
              <div className="flex items-center gap-3 mb-4">
                <Avatar src="/avatars/james.png" alt="Marc" size={44} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-ink">Marc B.</span>
                    <AppIconX size={14} />
                  </div>
                  <p className="text-xs text-ink/50">Partner @ a16z · 540K followers</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-bold text-ink bg-lime/60 px-2.5 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>VC</span>
                <span className="text-xs font-bold text-ink bg-cream px-2.5 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>Crypto</span>
                <span className="text-xs font-bold text-ink bg-apricot/60 px-2.5 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>Top 0.1%</span>
              </div>
            </div>
          </AnimateIn>

          {/* Tall — creator you didn't know */}
          <AnimateIn>
            <div
              className="sm:col-span-2 md:col-span-1 md:row-span-2 border-[3px] border-ink bg-lime p-6 flex flex-col justify-between card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div>
                <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-3">Hidden in your followers</p>
                <Avatar src="/avatars/emma.png" alt="Emma" size={48} />
                <h3
                  className="text-xl font-bold text-ink leading-snug tracking-tight mt-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>A designer with 2M followers</HoverShimmer>
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-4">
                <AppIconInstagram size={16} />
                <p className="text-xs text-ink/50">Followed you 3 days ago. You had no idea.</p>
              </div>
            </div>
          </AnimateIn>

          {/* Small — unfollower alert */}
          <AnimateIn>
            <div
              className="border-[3px] border-ink bg-apricot p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Alert</p>
              <div>
                <h3
                  className="text-lg font-bold text-ink leading-snug tracking-tight mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>2 whales unfollowed</HoverShimmer>
                </h3>
                <p className="text-xs text-ink/50 mt-1">Both had 100K+ followers</p>
              </div>
            </div>
          </AnimateIn>

          {/* Small — viral moment */}
          <AnimateIn>
            <div
              className="border-[3px] border-ink bg-card p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Trending</p>
              <div>
                <h3
                  className="text-lg font-bold text-ink leading-snug tracking-tight mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>+47 follows in 1 hour</HoverShimmer>
                </h3>
                <p className="text-xs text-ink/50 mt-1">Something you posted went viral</p>
              </div>
            </div>
          </AnimateIn>

          {/* Wide — cross-platform */}
          <AnimateIn>
            <div
              className="sm:col-span-2 border-[3px] border-ink bg-card p-6 flex items-center gap-4 card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="flex -space-x-2 shrink-0">
                <Avatar src="/avatars/sara.png" alt="" size={36} />
                <Avatar src="/avatars/priya.png" alt="" size={36} />
                <Avatar src="/avatars/james.png" alt="" size={36} />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-lg font-bold text-ink leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>Same person, 3 platforms</HoverShimmer>
                </h3>
                <p className="text-xs text-muted mt-0.5">They followed you on X, IG, and TikTok. That means something.</p>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <AppIconX size={20} />
                <AppIconInstagram size={20} />
                <AppIconTikTok size={20} />
              </div>
            </div>
          </AnimateIn>

          {/* Small — founder discovery */}
          <AnimateIn>
            <div
              className="border-[3px] border-ink bg-blue p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Discovery</p>
              <div>
                <h3
                  className="text-lg font-bold text-ink leading-snug tracking-tight mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <HoverShimmer>3 YC founders found</HoverShimmer>
                </h3>
                <p className="text-xs text-ink/50 mt-1">In your last 200 followers</p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
