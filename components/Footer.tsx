import Image from "next/image";
import BrandName from "./BrandName";

const links = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="mt-10 py-10 border-t border-ink/5">
      <div className="mx-auto max-w-5xl px-5">
        {/* Logo centered */}
        <div className="flex flex-col items-center gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/who-icon.png"
              alt="Who?"
              width={36}
              height={36}
              style={{ borderRadius: "22%" }}
            />
            <BrandName size="text-2xl" />
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted hover:text-ink link-hover"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 text-xs text-muted">
            <span>
              Built by{" "}
              <a
                href="https://x.com/napsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:opacity-70 transition-opacity"
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
