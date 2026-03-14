"use client";

import { motion } from "framer-motion";
import TypeWriter from "../TypeWriter";
import HoverShimmer from "../HoverShimmer";
import Image from "next/image";
import { ArrowRight, Download, Users, Zap, ShieldAlert } from "lucide-react";

export default function Deco1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className="relative mt-8 pt-10 pb-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 bg-white"></div>
      
      <div className="absolute top-20 -left-20 w-72 h-72 bg-red border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-sm -z-10 -rotate-12 opacity-10"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-blue border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-sm -z-10 rotate-12 opacity-10"></div>

      <motion.div 
        className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow cursor-default"
        >
          <div className="w-2 h-2 rounded-full bg-red animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-wide text-ink">Now in open beta on the App Store</span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center relative">
          <h1
            className="text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="font-bold text-ink">Know </span>
            <span className="font-extrabold text-ink relative inline-block">
              who
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-red opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </motion.svg>
            </span>
            <br />
            <span className="font-bold text-ink">actually </span>
            <span className="relative inline-block font-extrabold text-ink group">
              <span className="relative z-10 px-2" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.1)" }}>follows</span>
              <span
                className="absolute -bottom-1 left-[-2px] right-[-2px] h-3 md:h-6 bg-yellow group-hover:bg-yellow transition-colors -z-0 rounded-sm border-2 border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </span>
            <span className="font-bold text-ink"> you.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-2xl text-ink font-medium text-center max-w-2xl min-h-[32px]"
        >
          <TypeWriter />
        </motion.p>
        
        {/* Dynamic features snippet */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold uppercase tracking-wide text-ink">
           <div className="flex items-center gap-2 bg-white border-2 border-border px-3 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Users size={18} className="text-blue" /> Unmask bots</div>
           <div className="flex items-center gap-2 bg-white border-2 border-border px-3 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Zap size={18} className="text-yellow" /> Track engagements</div>
           <div className="flex items-center gap-2 bg-white border-2 border-border px-3 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><ShieldAlert size={18} className="text-red" /> Filter noise</div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://apps.apple.com"
            className="btn-hover w-full sm:w-auto group relative inline-flex justify-center items-center gap-2.5 px-8 py-4 text-lg font-bold uppercase tracking-wide bg-ink text-white rounded-md transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-out skew-x-12" />
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <HoverShimmer>Download for Free</HoverShimmer>
          </a>
          
          <a href="#features" className="btn-hover w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wide bg-white border-2 border-ink text-ink rounded-md transition-all">
            See how it works
            <ArrowRight size={20} strokeWidth={2.5} />
          </a>
        </motion.div>

        {/* Platform icons row */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <span className="text-sm font-medium text-ink/50 uppercase tracking-widest">Connects seamlessly with</span>
          <div className="flex items-center gap-4 md:gap-6 bg-white px-6 py-3 rounded-md border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {[
              { src: "/icons/x-appstore-raw.jpg", alt: "X" },
              { src: "/icons/instagram-appstore-raw.jpg", alt: "Instagram" },
              { src: "/icons/tiktok-appstore-raw.jpg", alt: "TikTok" },
              { src: "/icons/threads-appstore-icon.png", alt: "Threads", scale: true },
              { src: "/icons/bluesky-appstore-icon.png", alt: "Bluesky" },
              { src: "/icons/linkedin-appstore-icon.png", alt: "LinkedIn" },
            ].map((p) => (
              <motion.div
                key={p.alt}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={32}
                  height={32}
                  className="rounded-[8px] opacity-70 hover:opacity-100 transition-opacity shadow-sm"
                  style={p.scale ? { transform: "scale(1.06)" } : undefined}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
