import Image from "next/image";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#about" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-6">
      <div
        className="mx-auto max-w-3xl border-[3px] border-ink bg-card overflow-hidden"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        {/* Top row */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/who-icon.png"
              alt="Who?"
              width={36}
              height={36}
              style={{ borderRadius: "22%" }}
            />
            <div>
              <span
                className="text-2xl font-bold text-ink tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Who?
              </span>
              <p className="text-xs text-muted mt-0.5">Social intelligence for creators.</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4 flex-wrap">
            {links.map((l) => (
              <MagneticButton
                key={l.label}
                href={l.href}
                className="text-sm font-bold text-ink bg-cream px-4 py-2 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
                strength={0.2}
              >
                {l.label}
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="px-6 md:px-8 py-4 border-t-[2px] border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            Built by{" "}
            <a
              href="https://x.com/napsdev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ink hover:opacity-70 transition-opacity"
            >
              @napsdev
            </a>
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Who?
          </p>
        </div>
      </div>
    </footer>
  );
}
