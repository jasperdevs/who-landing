import Image from "next/image";

/* ── Real app store icons with iOS rounded-square shape ── */

export function AppIconX({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/x-appstore-raw.jpg"
      alt="X"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

export function AppIconInstagram({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/instagram-appstore-raw.jpg"
      alt="Instagram"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

export function AppIconTikTok({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/tiktok-appstore-raw.jpg"
      alt="TikTok"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

export function AppIconBluesky({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/bluesky-appstore-icon.png"
      alt="Bluesky"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

export function AppIconLinkedIn({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/linkedin-appstore-icon.png"
      alt="LinkedIn"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

export function AppIconThreads({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/icons/threads-appstore-icon.png"
      alt="Threads"
      width={size}
      height={size}
      className="object-cover shrink-0"
      style={{ width: size, height: size, borderRadius: "22%" }}
    />
  );
}

/* ── Utility SVG icons ── */

export function IconBell({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export function IconUser({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function IconEye({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconTrendingUp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function IconSearch({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
