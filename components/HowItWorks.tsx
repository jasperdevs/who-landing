import AnimateIn from "./AnimateIn";
import { AppIconX, AppIconInstagram, AppIconTikTok } from "./Icons";

export default function HowItWorks() {
  return (
    <section id="about" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div
              className="border-[3px] border-ink bg-blue p-6 flex flex-col card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <AppIconX size={24} />
                <AppIconInstagram size={24} />
                <AppIconTikTok size={24} />
              </div>
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Connect your accounts
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                Link X, Instagram, TikTok and more. Takes 30 seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="border-[3px] border-ink bg-lime p-6 flex flex-col card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-cream flex items-center justify-center mb-4"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We analyze every follower
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                Who? scans and surfaces the followers that actually matter.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="border-[3px] border-ink bg-card p-6 flex flex-col card-hover"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                className="w-10 h-10 border-[3px] border-ink bg-apricot flex items-center justify-center mb-4"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get your daily signal
              </h3>
              <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                A daily report with insights, not just a list of usernames.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
