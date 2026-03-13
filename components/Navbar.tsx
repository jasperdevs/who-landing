"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: 100,
          background: "linear-gradient(to bottom, #f6eedb 0%, #f6eedb 50%, rgba(246,238,219,0) 100%)",
        }}
      />

      <div className="relative px-6 py-4">
        <div
          className="mx-auto max-w-4xl flex items-center justify-between h-14 px-6 border-2 border-ink bg-card"
          style={{ borderRadius: 22 }}
        >
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/who-icon.png"
              alt="Who?"
              width={30}
              height={30}
              style={{ borderRadius: "22%" }}
            />
            <span
              className="text-2xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who?
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[15px] font-medium text-muted hover:text-ink transition-colors">Features</a>
            <a href="#about" className="text-[15px] font-medium text-muted hover:text-ink transition-colors">About</a>
            <a
              href="#waitlist"
              className="inline-flex items-center px-5 py-2 text-[15px] font-semibold bg-ink text-cream hover:opacity-90 transition-opacity"
              style={{ borderRadius: 14 }}
            >
              Get early access
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 border-2 border-ink flex items-center justify-center"
            style={{ borderRadius: 12 }}
            aria-label="Menu"
          >
            <span className="text-ink font-bold text-base leading-none">{open ? "\u00d7" : "\u2261"}</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 mx-auto max-w-4xl border-2 border-ink bg-card p-5" style={{ borderRadius: 22 }}>
            <a href="#features" onClick={() => setOpen(false)} className="block py-3 px-3 text-base font-medium text-muted hover:text-ink">Features</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-3 px-3 text-base font-medium text-muted hover:text-ink">About</a>
            <a href="#waitlist" onClick={() => setOpen(false)} className="block mt-3 text-center py-3 bg-ink text-cream text-base font-semibold" style={{ borderRadius: 14 }}>Get early access</a>
          </div>
        )}
      </div>
    </nav>
  );
}
