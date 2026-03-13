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

      <div className="relative px-5 py-4">
        <div
          className="mx-auto max-w-3xl flex items-center justify-between h-16 px-5 border-[3px] border-ink bg-card"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/who-icon.png"
              alt="Who?"
              width={34}
              height={34}
              style={{ borderRadius: "22%" }}
            />
            <span
              className="text-2xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who?
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            <a href="#features" className="text-[15px] font-medium text-muted hover:text-ink link-hover">Features</a>
            <a href="#about" className="text-[15px] font-medium text-muted hover:text-ink link-hover">About</a>
            <a
              href="#waitlist"
              className="btn-hover-dark inline-flex items-center px-6 py-2.5 text-[15px] font-semibold bg-ink text-cream"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Join waitlist
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 border-[3px] border-ink flex items-center justify-center"
            style={{ borderRadius: "var(--radius-sm)" }}
            aria-label="Menu"
          >
            <span className="text-ink font-bold text-lg leading-none">{open ? "\u00d7" : "\u2261"}</span>
          </button>
        </div>

        {open && (
          <div
            className="md:hidden mt-2 mx-auto max-w-3xl border-[3px] border-ink bg-card p-5"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <a href="#features" onClick={() => setOpen(false)} className="block py-3 px-3 text-lg font-medium text-muted hover:text-ink">Features</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-3 px-3 text-lg font-medium text-muted hover:text-ink">About</a>
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center py-3.5 bg-ink text-cream text-lg font-semibold"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Join waitlist
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
