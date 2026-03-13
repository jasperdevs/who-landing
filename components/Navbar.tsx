"use client";

import { useState } from "react";
import Image from "next/image";
import HoverShimmer from "./HoverShimmer";
import BrandName from "./BrandName";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="relative px-5 py-3">
        <div
          className="mx-auto max-w-3xl flex items-center justify-between h-14 px-5 border-[3px] border-ink bg-card/90 backdrop-blur-md"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/who-icon.png"
              alt="Who?"
              width={30}
              height={30}
              style={{ borderRadius: "22%" }}
            />
            <BrandName size="text-xl" />
          </a>

          <div className="hidden md:flex items-center gap-2">
            <a href="#features" className="text-sm font-medium text-muted hover:text-ink px-4 py-2 link-hover">
              <HoverShimmer>Features</HoverShimmer>
            </a>
            <a href="#about" className="text-sm font-medium text-muted hover:text-ink px-4 py-2 link-hover">
              <HoverShimmer>About</HoverShimmer>
            </a>
            <a
              href="#waitlist"
              className="btn-hover-dark inline-flex items-center px-5 py-2 text-sm font-bold bg-ink text-cream border-[3px] border-ink ml-2"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <HoverShimmer>Join waitlist</HoverShimmer>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 border-[2px] border-ink flex items-center justify-center btn-hover active:translate-y-[1px]"
            style={{ borderRadius: "var(--radius-sm)" }}
            aria-label="Menu"
          >
            <span className="text-ink font-bold text-lg leading-none">{open ? "\u00d7" : "\u2261"}</span>
          </button>
        </div>

        {open && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[-1]"
              onClick={() => setOpen(false)}
            />
            <div
              className="md:hidden mt-2 mx-auto max-w-3xl border-[3px] border-ink bg-card p-5"
              style={{ borderRadius: "var(--radius-lg)", animation: "menu-slide-down 0.25s ease-out" }}
            >
              <a href="#features" onClick={() => setOpen(false)} className="block py-3 px-3 text-lg font-medium text-muted hover:text-ink link-hover">Features</a>
              <a href="#about" onClick={() => setOpen(false)} className="block py-3 px-3 text-lg font-medium text-muted hover:text-ink link-hover">About</a>
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="block mt-3 text-center py-3.5 bg-ink text-cream text-lg font-semibold btn-hover-dark"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                Join waitlist
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
