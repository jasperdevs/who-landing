const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="mx-auto max-w-4xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-5">
        <span
          className="text-xl font-bold text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who?
        </span>
        <div className="flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-[13px] font-medium text-muted">
          &copy; {new Date().getFullYear()} Who?
        </p>
      </div>
    </footer>
  );
}
