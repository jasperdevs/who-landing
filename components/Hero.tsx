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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-blue overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-8 w-32 h-32 bg-yellow border-3 border-ink rotate-12 opacity-20" />
      <div className="absolute top-40 right-12 w-24 h-24 bg-sky border-3 border-ink -rotate-6 opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow border-3 border-ink rotate-45 opacity-15" />

      <motion.div
        className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="neo-card-sm bg-yellow text-ink px-5 py-2 mb-10 inline-flex items-center gap-2"
        >
          <div className="w-2.5 h-2.5 bg-ink animate-pulse" />
          <span
            className="text-sm font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Now in Open Beta
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="text-center leading-[1.05]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-5xl sm:text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tight">
            Know
          </span>
          <span className="block text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-tight relative">
            <span className="relative z-10 text-ink bg-yellow px-4 py-1 border-3 border-ink inline-block"
              style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}>
              WHO
            </span>
          </span>
          <span className="block text-5xl sm:text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tight mt-2">
            Follows You
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.p
          variants={item}
          className="mt-8 text-lg md:text-xl text-white/80 text-center max-w-xl min-h-[32px] font-medium"
        >
          <TypeWriter />
        </motion.p>

        {/* Feature tags */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["Unmask bots", "Track engagements", "Filter noise"].map((tag) => (
            <span
              key={tag}
              className="neo-card-sm bg-white text-ink px-4 py-2 text-sm font-bold uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://apps.apple.com"
            className="neo-btn flex items-center gap-3 px-8 py-4 text-base bg-yellow text-ink"
          >
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download Free
          </a>
          <a
            href="#features"
            className="neo-btn flex items-center gap-2 px-8 py-4 text-base bg-white text-ink"
          >
            See How It Works
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Platform icons */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <span
            className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connects With
          </span>
          <div className="flex items-center gap-3 bg-ink/20 px-5 py-3 border-2 border-white/20">
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
                width={36}
                height={36}
                className="border-2 border-ink opacity-80 hover:opacity-100 transition-opacity"
                style={{ borderRadius: "8px" }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
