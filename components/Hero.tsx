import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="px-6 pt-14 md:pt-28 pb-20 md:pb-32">
      <div className="mx-auto max-w-4xl">
        {/* Headline + subtitle */}
        <div className="text-center mb-16 md:mb-20">
          <h1
            className="text-[3.5rem] md:text-[5.5rem] tracking-tight leading-[1.05] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0ms", fontFamily: "var(--font-display)" }}
          >
            <span className="font-normal text-muted">Find out</span>{" "}
            <span className="relative inline-block font-bold text-ink">
              <span className="relative z-10">Who?</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-4 md:h-5 bg-lime -z-0"
                style={{ borderRadius: 8 }}
              />
            </span>
            <br />
            <span className="font-normal text-muted">follows you.</span>
          </h1>

          <p
            className="mt-7 text-[17px] md:text-lg text-muted leading-relaxed max-w-[28rem] mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            All your followers from every platform, in one place.
            Finally readable.
          </p>

          <div
            className="mt-9 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#waitlist"
              className="inline-flex items-center px-8 py-4 text-[16px] font-semibold bg-ink text-cream hover:opacity-90 transition-opacity"
              style={{ borderRadius: 18 }}
            >
              Get early access
            </a>
          </div>
        </div>

        {/* Visual: icons left → report right */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
