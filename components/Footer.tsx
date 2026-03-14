import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-12 border-t-3 border-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/whologo.png"
              alt="Who?"
              width={36}
              height={36}
              className="border-2 border-white/20"
              style={{ borderRadius: "8px" }}
            />
            <span
              className="text-2xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who?
            </span>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 text-xs text-white/30 font-medium">
            <span>
              Built by{" "}
              <a
                href="https://x.com/napsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/50 hover:text-white transition-colors"
              >
                @napsdev
              </a>
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span>&copy; {new Date().getFullYear()} Who?</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
