"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue border-b-3 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/whologo.png"
            alt="Who?"
            width={40}
            height={40}
            className="border-2 border-ink"
            style={{ borderRadius: "10px" }}
          />
          <span
            className="text-2xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who?
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#features"
            className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#faq"
            className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="#waitlist"
            className="neo-btn ml-3 px-6 py-2.5 text-sm bg-yellow text-ink"
          >
            Join Waitlist
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          <svg
            className="w-7 h-7 text-white"
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
      </div>

      {/* Mobile dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[-1]"
            onClick={() => setOpen(false)}
          />
          <div
            className="md:hidden mx-4 mb-3 bg-yellow border-3 border-ink p-5"
            style={{
              animation: "menu-slide-down 0.2s ease-out",
              boxShadow: "6px 6px 0px 0px var(--color-ink)",
            }}
          >
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-bold text-ink uppercase"
            >
              Features
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-bold text-ink uppercase"
            >
              FAQ
            </a>
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center py-3.5 bg-ink text-white text-lg font-extrabold uppercase border-3 border-ink"
            >
              Join Waitlist
            </a>
          </div>
        </>
      )}
    </nav>
  );
}
