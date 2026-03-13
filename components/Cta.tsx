export default function Cta() {
  return (
    <section id="waitlist" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div
          className="border-2 border-ink bg-lime p-14 md:p-24 text-center"
          style={{ borderRadius: 36 }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Know who&apos;s watching.
          </h2>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-10 py-4 text-[17px] font-semibold bg-ink text-cream hover:opacity-90 transition-opacity"
              style={{ borderRadius: 20 }}
            >
              Get early access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
