import Image from "next/image";
import { card } from "@/lib/styles";

const links = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className={`${card} bg-ink px-6 py-10`}>
      <div className="flex flex-col items-center gap-5">
        <a href="#"><Image src="/who.png" alt="Who?" width={80} height={32} className="h-7 w-auto brightness-0 invert opacity-60" /></a>
        <p className="text-sm text-white/30 font-medium text-center max-w-xs">
          Turn follower noise into signal. Know who matters.
        </p>
        <div className="flex items-center gap-5">
          {links.map((l) => <a key={l.label} href={l.href} className="text-xs font-semibold text-white/30 hover:text-white transition-colors uppercase tracking-wider">{l.label}</a>)}
        </div>
        <div className="w-full max-w-xs h-px bg-white/10" />
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[10px] text-white/20 font-medium">
          <span>Built by <a href="https://x.com/napsdev" target="_blank" rel="noopener noreferrer" className="font-bold text-white/30 hover:text-white transition-colors">@napsdev</a></span>
          <span className="hidden sm:inline">&middot;</span>
          <span>&copy; {new Date().getFullYear()} Who?</span>
        </div>
      </div>
    </footer>
  );
}
