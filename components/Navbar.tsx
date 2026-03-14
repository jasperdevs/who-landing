"use client";

import { useState } from "react";
import Image from "next/image";
import BrandName from "./BrandName";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-5 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Right side - desktop links + mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="text-sm font-semibold text-muted hover:text-ink px-4 py-2 link-hover rounded-full">
              Features
            </a>
            <a href="#faq" className="text-sm font-semibold text-muted hover:text-ink px-4 py-2 link-hover rounded-full">
              FAQ
            </a>
            <a
              href="#waitlist"
              className="btn-hover-dark ml-2 inline-flex items-center px-6 py-2.5 text-sm font-bold bg-ink text-cream rounded-full"
            >
              Join waitlist
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-ink/5 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <>
          <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} />
          <div
            className="md:hidden mx-5 mb-3 bg-card rounded-2xl p-5 shadow-lg"
            style={{ animation: "menu-slide-down 0.25s ease-out" }}
          >
            <a href="#features" onClick={() => setOpen(false)} className="block py-3 text-lg font-semibold text-ink">Features</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block py-3 text-lg font-semibold text-ink">FAQ</a>
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center py-3.5 bg-ink text-cream text-lg font-bold rounded-full"
            >
              Join waitlist
            </a>
          </div>
        </>
      )}
    </nav>
  );
}
