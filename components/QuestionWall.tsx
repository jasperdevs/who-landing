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

        {/* Bento grid with explicit rows for dramatic sizing */}
        <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[70px] gap-3">

          {/* HUGE — VC discovery (spans 4 cols, 3 rows) */}
          <AnimateIn className="col-span-4 row-span-3">
            <div
              className="border-[3px] border-ink bg-blue p-6 md:p-8 card-hover h-full flex flex-col justify-between"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">You would have missed</p>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar src="/avatars/james.png" alt="Marc" size={56} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>Marc Benioff</span>
                      <AppIconX size={16} />
                    </div>
                    <p className="text-sm text-ink/50">Partner @ a16z · 540K followers</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-bold text-ink bg-lime/60 px-3 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>VC</span>
                  <span className="text-xs font-bold text-ink bg-cream px-3 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>Crypto</span>
                  <span className="text-xs font-bold text-ink bg-apricot/60 px-3 py-1 border-[2px] border-ink/20" style={{ borderRadius: 8 }}>Top 0.1%</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Tall narrow — creator (2 cols, 5 rows on desktop) */}
          <AnimateIn className="col-span-2 row-span-3 md:row-span-5">
            <div
              className="border-[3px] border-ink bg-lime p-5 flex flex-col justify-between card-hover h-full"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div>
                <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-3">Hidden</p>
                <Avatar src="/avatars/emma.png" alt="Emma" size={48} />
                <h3 className="text-lg md:text-xl font-bold text-ink leading-snug tracking-tight mt-3" style={{ fontFamily: "var(--font-display)" }}>
                  <HoverShimmer>A designer with 2M followers</HoverShimmer>
                </h3>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <AppIconInstagram size={14} />
                <p className="text-[11px] text-ink/50">Followed 3 days ago</p>
              </div>
            </div>
          </AnimateIn>

          {/* Small square — unfollower alert */}
          <AnimateIn className="col-span-2 row-span-2">
            <div
              className="border-[3px] border-ink bg-apricot p-4 flex flex-col justify-between card-hover h-full"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[9px] font-bold text-ink/40 uppercase tracking-widest">Alert</p>
              <div>
                <p className="text-base font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                  <HoverShimmer>2 whales left</HoverShimmer>
                </p>
                <p className="text-[11px] text-ink/50 mt-0.5">100K+ accounts</p>
              </div>
            </div>
          </AnimateIn>

          {/* Small square — viral */}
          <AnimateIn className="col-span-2 row-span-2">
            <div
              className="border-[3px] border-ink bg-card p-4 flex flex-col justify-between card-hover h-full"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-[9px] font-bold text-ink/40 uppercase tracking-widest">Trending</p>
              <div>
                <p className="text-2xl font-bold text-ink tabular-nums" style={{ fontFamily: "var(--font-display)" }}>+47</p>
                <p className="text-[11px] text-ink/50">follows in 1 hour</p>
              </div>
            </div>
          </AnimateIn>

          {/* Wide panoramic — cross-platform (4 cols, 2 rows) */}
          <AnimateIn className="col-span-4 row-span-2">
            <div
              className="border-[3px] border-ink bg-card p-5 flex items-center gap-4 card-hover h-full"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="flex -space-x-3 shrink-0">
                <Avatar src="/avatars/sara.png" alt="" size={38} />
                <Avatar src="/avatars/priya.png" alt="" size={38} />
                <Avatar src="/avatars/james.png" alt="" size={38} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-ink leading-snug tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Same person, 3 platforms
                </h3>
                <p className="text-xs text-muted mt-0.5">Followed you on X, IG, and TikTok. That means something.</p>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <AppIconX size={22} />
                <AppIconInstagram size={22} />
                <AppIconTikTok size={22} />
              </div>
            </div>
          </AnimateIn>

          {/* Small — YC founders */}
          <AnimateIn className="col-span-2 row-span-2">
            <div
              className="border-[3px] border-ink bg-blue p-4 flex flex-col justify-center card-hover h-full text-center"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-3xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>3</p>
              <p className="text-xs font-bold text-ink/50 mt-1">YC founders in your last 200 followers</p>
            </div>
          </AnimateIn>

          {/* Tiny accent — stat */}
          <AnimateIn className="col-span-2 row-span-2">
            <div
              className="border-[3px] border-ink bg-lime p-4 flex flex-col justify-center card-hover h-full text-center"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <p className="text-3xl font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>89%</p>
              <p className="text-xs font-bold text-ink/50 mt-1">of notable follows go unnoticed</p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
