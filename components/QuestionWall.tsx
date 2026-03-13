import {
  IconBell,
  IconUser,
  IconEye,
  IconTrendingUp,
  IconSearch,
  IconArrowRight,
} from "./Icons";
import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";

export default function QuestionWall() {
  return (
    <section className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ask anything.
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Who? answers the questions your notifications never could.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {/* Large -- who noticed you? */}
            <div
              className="col-span-2 border-[3px] border-ink bg-blue p-6 md:p-7 card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3
                  className="text-2xl md:text-3xl font-bold text-ink leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  who noticed you?
                </h3>
                <div
                  className="w-11 h-11 border-[3px] border-ink bg-cream flex items-center justify-center shrink-0"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  <IconSearch className="w-5 h-5 text-ink" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex -space-x-3">
                  <Avatar src="/avatars/sara.png" alt="Sara" size={34} />
                  <Avatar src="/avatars/james.png" alt="James" size={34} />
                  <Avatar src="/avatars/priya.png" alt="Priya" size={34} />
                </div>
                <span
                  className="text-sm font-bold text-ink bg-cream px-3 py-1.5 border-[2px] border-ink self-center"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  +12 this week
                </span>
              </div>
            </div>

            {/* Tall -- who matters? */}
            <div
              className="col-span-2 md:col-span-1 md:row-span-2 border-[3px] border-ink bg-lime p-6 md:p-7 flex flex-col justify-between card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-11 h-11 border-[3px] border-ink bg-cream flex items-center justify-center"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <IconArrowRight className="w-5 h-5 text-ink" />
              </div>
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-ink leading-snug tracking-tight mt-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  who<br />matters?
                </h3>
                <p className="text-sm text-ink/60 mt-2">
                  Filter the noise. Surface the signal.
                </p>
              </div>
            </div>

            {/* Small -- who just followed? */}
            <div
              className="border-[3px] border-ink bg-card p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-cream flex items-center justify-center"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <IconBell className="w-4 h-4 text-ink" />
              </div>
              <h3
                className="text-lg font-bold text-ink leading-snug tracking-tight mt-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                who just followed?
              </h3>
            </div>

            {/* Small -- who unfollowed? */}
            <div
              className="border-[3px] border-ink bg-apricot p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-cream flex items-center justify-center"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <IconEye className="w-4 h-4 text-ink" />
              </div>
              <h3
                className="text-lg font-bold text-ink leading-snug tracking-tight mt-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                who unfollowed?
              </h3>
            </div>

            {/* Wide -- who has 1M+ followers? */}
            <div
              className="col-span-2 border-[3px] border-ink bg-card p-6 md:p-7 flex items-center justify-between gap-4 card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div>
                <h3
                  className="text-2xl font-bold text-ink leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  who has 1M+ followers?
                </h3>
                <p className="text-sm text-muted mt-1">Find the big accounts in your followers.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className="text-sm font-bold text-ink bg-lime px-3 py-1.5 border-[2px] border-ink"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  3 found
                </span>
                <div
                  className="w-11 h-11 border-[3px] border-ink bg-cream flex items-center justify-center"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  <IconTrendingUp className="w-5 h-5 text-ink" />
                </div>
              </div>
            </div>

            {/* Bottom right -- who's a founder? (fills the gap) */}
            <div
              className="border-[3px] border-ink bg-card p-5 flex flex-col justify-between min-h-[120px] card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-cream flex items-center justify-center"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <IconUser className="w-4 h-4 text-ink" />
              </div>
              <h3
                className="text-lg font-bold text-ink leading-snug tracking-tight mt-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                who&apos;s a founder?
              </h3>
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
