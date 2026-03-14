"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="neo-card-static bg-cream px-5 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5">
        <Image
          src="/whologo.png"
          alt="Who?"
          width={36}
          height={36}
          className="rounded-xl border-2 border-ink"
        />
        <span
          className="text-xl font-extrabold text-ink tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who?
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-2">
        <a
          href="#features"
          className="px-4 py-1.5 text-sm font-bold text-ink/60 hover:text-ink transition-colors rounded-full"
        >
          Features
        </a>
        <a
          href="#faq"
          className="px-4 py-1.5 text-sm font-bold text-ink/60 hover:text-ink transition-colors rounded-full"
        >
          FAQ
        </a>
        <a
          href="#waitlist"
          className="neo-btn ml-2 px-6 py-2 text-sm bg-yellow text-ink"
        >
          Join Waitlist
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-ink"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
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

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute top-20 left-4 right-4 z-50 neo-card-static bg-yellow p-5"
          style={{ animation: "menu-slide-down 0.2s ease-out" }}
        >
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block py-3 text-lg font-bold text-ink"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="block py-3 text-lg font-bold text-ink"
          >
            FAQ
          </a>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="neo-btn block mt-3 text-center py-3 bg-ink text-white text-base"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
