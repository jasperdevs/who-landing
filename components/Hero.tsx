"use client";

import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Hero() {
  return (
    <section className="neo-card-static bg-cream overflow-hidden">
      <motion.div
        className="px-6 pt-14 pb-16 md:pt-20 md:pb-24 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="neo-pill bg-yellow text-ink px-5 py-1.5 mb-8 inline-flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-ink animate-pulse" />
          <span
            className="text-xs font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Open Beta
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-center leading-[1.08]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-ink uppercase tracking-tight">
            Know
          </span>
          <span className="block text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold uppercase tracking-tight mt-1">
            <span
              className="neo-pill inline-block bg-blue text-white px-6 py-1"
            >
              WHO
            </span>
          </span>
          <span className="block text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-ink uppercase tracking-tight mt-1">
            Follows You
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-ink/60 text-center max-w-md min-h-[32px] font-medium"
        >
          <TypeWriter />
        </motion.p>

        {/* Feature pills */}
        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          {["Unmask bots", "Track engagements", "Filter noise"].map((tag) => (
            <span
              key={tag}
              className="neo-pill bg-sky text-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="https://apps.apple.com"
            className="neo-btn flex items-center gap-2.5 px-7 py-3 text-sm bg-ink text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download Free
          </a>
          <a
            href="#features"
            className="neo-btn flex items-center gap-2 px-7 py-3 text-sm bg-yellow text-ink"
          >
            How It Works
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Platform strip */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <span
            className="text-[10px] font-bold text-ink/30 uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connects With
          </span>
          <div className="flex items-center gap-2.5">
            {[
              { src: "/icons/x-appstore-raw.jpg", alt: "X" },
              { src: "/icons/instagram-appstore-raw.jpg", alt: "Instagram" },
              { src: "/icons/tiktok-appstore-raw.jpg", alt: "TikTok" },
              { src: "/icons/threads-appstore-icon.png", alt: "Threads" },
              { src: "/icons/bluesky-appstore-icon.png", alt: "Bluesky" },
              { src: "/icons/linkedin-appstore-icon.png", alt: "LinkedIn" },
            ].map((p) => (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={32}
                height={32}
                className="rounded-lg border-2 border-ink/10 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
