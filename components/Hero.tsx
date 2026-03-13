import FloatingIcons from "./FloatingIcons";
import DailyReportCard from "./DailyReportCard";
import TypeWriter from "./TypeWriter";
import PhoneMockup from "./PhoneMockup";
import CurveDrawer from "./CurveDrawer";
import ConstantShimmer from "./ConstantShimmer";
import HoverShimmer from "./HoverShimmer";

export default function Hero() {
  return (
    <section className="relative px-5 pt-8 md:pt-20 pb-10 md:pb-16 overflow-x-clip">
      <CurveDrawer />
      {/* Icons behind everything */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          bottom: "-40px",
          left: "50%",
          width: "100vw",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      >
        <FloatingIcons />
      </div>

      <div className="relative mx-auto max-w-3xl" style={{ zIndex: 1 }}>
        {/* Headline */}
        <div
          className="text-center mb-5 md:mb-7 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <h1
            className="text-[2.5rem] sm:text-[3.2rem] md:text-[5rem] tracking-tight leading-[1.06]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="font-normal text-muted">Know</span>{" "}
            <span className="relative inline-block font-bold text-ink">
              <span className="relative z-10"><ConstantShimmer>who</ConstantShimmer></span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3.5 md:h-5 bg-lime -z-0 sketch-underline"
                style={{ borderRadius: "var(--radius-sm)" }}
              />
            </span>
            <br />
            <span className="font-normal text-muted">actually follows you.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-md mx-auto min-h-[28px]">
            <TypeWriter />
          </p>
        </div>

        {/* Phone with card — z-index above icons */}
        <div
          className="flex justify-center mb-5 opacity-0 animate-fade-in-up relative"
          style={{ animationDelay: "150ms", zIndex: 2 }}
        >
          <PhoneMockup>
            <DailyReportCard />
          </PhoneMockup>
        </div>

        {/* CTA */}
        <div
          className="flex justify-center opacity-0 animate-fade-in-up relative"
          style={{ animationDelay: "300ms", zIndex: 2 }}
        >
          <a
            href="#waitlist"
            className="btn-hover-dark inline-flex items-center px-8 py-4 text-lg font-bold bg-ink text-cream border-[3px] border-ink"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <HoverShimmer>Get your daily report</HoverShimmer>
          </a>
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <svg
            className="w-5 h-5 text-muted/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "bounce-down 2s ease-in-out infinite" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
