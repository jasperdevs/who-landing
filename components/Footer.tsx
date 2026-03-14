import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="neo-card-static bg-ink px-6 py-8">
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/whologo.png"
            alt="Who?"
            width={32}
            height={32}
            className="rounded-lg border-2 border-white/20"
          />
          <span
            className="text-xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who?
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Credit */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[10px] text-white/20 font-medium">
          <span>
            Built by{" "}
            <a
              href="https://x.com/napsdev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white/30 hover:text-white transition-colors"
            >
              @napsdev
            </a>
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <span>&copy; {new Date().getFullYear()} Who?</span>
        </div>
      </div>
    </footer>
  );
}
