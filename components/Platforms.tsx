"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const platforms = [
  { src: "/icons/x-appstore-raw.jpg", name: "X" },
  { src: "/icons/instagram-appstore-raw.jpg", name: "Instagram" },
  { src: "/icons/tiktok-appstore-raw.jpg", name: "TikTok" },
  { src: "/icons/threads-appstore-icon.png", name: "Threads" },
  { src: "/icons/bluesky-appstore-icon.png", name: "Bluesky" },
  { src: "/icons/linkedin-appstore-icon.png", name: "LinkedIn" },
];

const marquee = [...platforms, ...platforms];

export default function Platforms() {
  return (
    <AnimateIn>
      <section className="px-4 md:px-0">
        <div className="section-shell overflow-hidden rounded-[36px] px-4 py-8 md:px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-white/76">
            Connected platforms
          </p>
          <div className="mt-6 overflow-hidden">
            <div className="flex w-max items-center gap-4 animate-[marquee-scroll_22s_linear_infinite]">
              {marquee.map((platform, index) => (
                <div key={`${platform.name}-${index}`} className="glass-card flex items-center gap-3 rounded-full px-4 py-3">
                  <Image
                    src={platform.src}
                    alt={platform.name}
                    width={38}
                    height={38}
                    className="h-9 w-9 rounded-[14px] object-cover"
                  />
                  <span className="text-sm font-semibold text-[var(--ink-strong)]">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimateIn>
  );
}
