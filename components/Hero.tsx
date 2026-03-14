import FloatingIcons from "./FloatingIcons";
import TypeWriter from "./TypeWriter";
import ConstantShimmer from "./ConstantShimmer";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-2">
      {/* Main hero card - lavender bg like Tea's purple */}
      <div
        className="relative overflow-hidden bg-lavender"
        style={{ borderRadius: "var(--radius-xl)", minHeight: "420px" }}
      >
        {/* Floating icons behind */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ zIndex: 0 }}>
          <FloatingIcons />
        </div>

        <div className="relative flex flex-col items-center justify-center px-6 py-16 md:py-24" style={{ zIndex: 1 }}>
          {/* Headline */}
          <div
            className="text-center mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            <h1
              className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] tracking-tight leading-[1.06]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="font-medium text-ink/60">know</span>{" "}
              <span className="relative inline-block font-bold text-ink">
                <span className="relative z-10"><ConstantShimmer>who</ConstantShimmer></span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3.5 md:h-5 bg-lime -z-0 sketch-underline"
                  style={{ borderRadius: 8 }}
                />
              </span>
              <br />
              <span className="font-medium text-ink/60">actually follows you.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink/50 leading-relaxed max-w-md mx-auto min-h-[28px]">
              <TypeWriter />
            </p>
          </div>

          {/* CTA */}
          <div
            className="flex justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#waitlist"
              className="btn-hover-dark inline-flex items-center px-8 py-4 text-lg font-bold bg-ink text-cream rounded-full"
            >
              Get early access
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar below hero - like Tea's "Join X women" row */}
      <div
        className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["sara", "james", "priya"].map((name) => (
              <Image
                key={name}
                src={`/avatars/${name}.png`}
                alt=""
                width={36}
                height={36}
                className="rounded-full border-2 border-cream"
              />
            ))}
          </div>
          <p className="text-sm text-ink">
            Join <span className="font-bold text-ink">2,400+</span> on the waitlist
          </p>
        </div>
        <a
          href="#waitlist"
          className="btn-hover inline-flex items-center px-6 py-2.5 text-sm font-bold text-ink bg-card border border-ink/10 rounded-full"
        >
          Sign up free
        </a>
      </div>
    </section>
  );
}
