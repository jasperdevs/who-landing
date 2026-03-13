import FloatingIcons from "./FloatingIcons";
import DailyReportCard from "./DailyReportCard";
import MagneticButton from "./MagneticButton";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative px-5 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden">
      {/* Canvas covers section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingIcons />
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-28 md:w-44 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 30%, transparent 100%)" }}
      />
      <div className="absolute inset-y-0 right-0 w-28 md:w-44 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to left, var(--color-cream) 0%, var(--color-cream) 30%, transparent 100%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to top, var(--color-cream), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Headline */}
        <div className="text-center mb-5 md:mb-7 opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <h1
            className="text-[3.2rem] md:text-[5rem] tracking-tight leading-[1.06]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="font-normal text-muted">Know</span>{" "}
            <span className="relative inline-block font-bold text-ink">
              <span className="relative z-10">Who?</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3.5 md:h-5 bg-lime -z-0"
                style={{ borderRadius: "var(--radius-sm)" }}
              />
            </span>
            <br />
            <span className="font-normal text-muted">follows you.</span>
          </h1>

          <p className="mt-4 text-lg text-muted leading-relaxed max-w-md mx-auto h-[28px]">
            <TypeWriter />
          </p>
        </div>

        {/* Card with glow */}
        <div className="flex justify-center mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[40px] animate-pulse"
              style={{
                background: "radial-gradient(ellipse at center, rgba(185,242,124,0.3) 0%, rgba(169,198,255,0.15) 40%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />
            <div className="relative">
              <DailyReportCard />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <MagneticButton
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 text-lg font-bold bg-ink text-cream border-[3px] border-ink"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            Get your daily report
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
