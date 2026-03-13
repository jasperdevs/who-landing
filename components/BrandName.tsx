"use client";

/**
 * Animated "Who?" brand text.
 * The "?" bounces and flips like the Pixar lamp every few seconds.
 * Use this everywhere the app name appears for consistent branding.
 */
export default function BrandName({ className = "", size = "text-2xl" }: { className?: string; size?: string }) {
  return (
    <span
      className={`${size} font-bold tracking-tight text-ink ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      Who
      <span className="brand-qmark inline-block origin-bottom">?</span>
    </span>
  );
}
