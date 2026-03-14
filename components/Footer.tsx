import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="bento bg-cream px-6 py-8">
      <div className="flex flex-col items-center gap-4">
        <a href="#">
          <Image src="/who.png" alt="Who?" width={72} height={28} className="h-6 w-auto opacity-40" />
        </a>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs font-semibold text-ink/30 hover:text-ink transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[10px] text-ink/20 font-medium">
          <span>Built by{" "}<a href="https://x.com/napsdev" target="_blank" rel="noopener noreferrer" className="font-bold text-ink/30 hover:text-ink transition-colors">@napsdev</a></span>
          <span className="hidden sm:inline">&middot;</span>
          <span>&copy; {new Date().getFullYear()} Who?</span>
        </div>
      </div>
    </footer>
  );
}
