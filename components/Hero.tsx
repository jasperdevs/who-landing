"use client";

import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import Image from "next/image";
import { card, cardInner, btn, pill } from "@/lib/styles";

const ctr = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const itm = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } };

const platforms = [
  { src: "/icons/x-appstore-raw.jpg", alt: "X" },
  { src: "/icons/instagram-appstore-raw.jpg", alt: "Instagram" },
  { src: "/icons/tiktok-appstore-raw.jpg", alt: "TikTok" },
  { src: "/icons/threads-appstore-icon.png", alt: "Threads" },
  { src: "/icons/bluesky-appstore-icon.png", alt: "Bluesky" },
  { src: "/icons/linkedin-appstore-icon.png", alt: "LinkedIn" },
];

export default function Hero() {
  return (
    <section className={`${card} bg-cream`}>
      <motion.div className="px-6 pt-12 pb-14 md:pt-16 md:pb-20 flex flex-col items-center" initial="hidden" animate="visible" variants={ctr}>

        <motion.div variants={itm} className={`${pill} bg-yellow text-ink px-4 py-1.5 mb-7 inline-flex items-center gap-2`}>
          <div className="w-2 h-2 rounded-full bg-ink/80 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-display)" }}>Open Beta</span>
        </motion.div>

        <motion.h1 variants={itm} className="text-center leading-[1.08]" style={{ fontFamily: "var(--font-display)" }}>
          <span className="block text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-ink uppercase tracking-tight">Know</span>
          <span className="block mt-2">
            <span className={`${pill} inline-block bg-blue text-white text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold uppercase tracking-tight px-8 py-1`}>WHO</span>
          </span>
          <span className="block text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-ink uppercase tracking-tight mt-2">Follows You</span>
        </motion.h1>

        <motion.p variants={itm} className="mt-5 text-lg md:text-xl text-ink/50 text-center max-w-md min-h-[32px] font-medium">
          <TypeWriter />
        </motion.p>

        <motion.div variants={itm} className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md">
          {[{ v: "6", l: "Platforms" }, { v: "8am", l: "Daily Report" }, { v: "100%", l: "Private" }].map((s) => (
            <div key={s.l} className={`${cardInner} bg-white px-4 py-3 flex flex-col items-center`}>
              <span className="text-2xl md:text-3xl font-extrabold text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.v}</span>
              <span className="text-[10px] font-semibold text-ink/40 uppercase tracking-wider mt-0.5">{s.l}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itm} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="https://apps.apple.com" className={`${btn} flex items-center gap-2.5 px-7 py-3.5 text-sm bg-ink text-white`}>
            <svg className="w-4 h-4" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download Free
          </a>
          <a href="#features" className={`${btn} flex items-center gap-2 px-7 py-3.5 text-sm bg-yellow text-ink`}>How It Works ↓</a>
        </motion.div>

        <motion.div variants={itm} className="mt-10 flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-semibold text-ink/25 uppercase tracking-[0.15em]">Connects with</span>
          <div className="flex items-center gap-2">
            {platforms.map((p) => (
              <Image key={p.alt} src={p.src} alt={p.alt} width={30} height={30} className="rounded-[9px] border-2 border-ink/10 opacity-50 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
