"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bento bg-cream px-5 py-3 flex items-center justify-between relative">
      <a href="#" className="flex items-center">
        <Image src="/who.png" alt="Who?" width={80} height={32} className="h-7 w-auto" />
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        <a href="#features" className="px-4 py-2 text-sm font-semibold text-ink/50 hover:text-ink transition-colors rounded-full">Features</a>
        <a href="#faq" className="px-4 py-2 text-sm font-semibold text-ink/50 hover:text-ink transition-colors rounded-full">FAQ</a>
        <a href="#waitlist" className="pill-btn ml-2 px-6 py-2.5 text-sm bg-yellow text-ink">Join Waitlist</a>
      </div>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center" aria-label="Menu">
        <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          {open ? (
            <><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></>
          ) : (
            <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
          )}
        </svg>
      </button>

      {/* Mobile */}
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-3 right-3 mt-2 z-50 bento bg-cream p-4" style={{ animation: "menu-slide-down 0.2s ease-out" }}>
            <a href="#features" onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-ink">Features</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-ink">FAQ</a>
            <a href="#waitlist" onClick={() => setOpen(false)} className="pill-btn block mt-2 text-center py-3 bg-yellow text-ink text-base">Join Waitlist</a>
          </div>
        </>
      )}
    </nav>
  );
}
