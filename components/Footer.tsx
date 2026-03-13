const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink">
      <div className="mx-auto max-w-3xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="text-xl font-bold text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who?
          </span>
          <span className="text-sm text-muted">
            Built by{" "}
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ink hover:opacity-70 transition-opacity"
            >
              @yourhandle
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Who?
          </span>
        </div>
      </div>
    </footer>
  );
}
