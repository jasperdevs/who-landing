"use client";

import AnimateIn from "./AnimateIn";
import { card, cardInner, pill } from "@/lib/styles";

const features = [
  { icon: "🔔", title: "Follow Alerts", desc: "Know when someone important follows you", bg: "bg-yellow" },
  { icon: "🔍", title: "Profile Lookup", desc: "Bios, stats, cross-platform presence", bg: "bg-sky" },
  { icon: "📊", title: "Daily Report", desc: "Every morning — your follower intel", bg: "bg-cream" },
  { icon: "🌐", title: "Cross-Platform", desc: "X, IG, TikTok, Threads, Bluesky, LinkedIn", bg: "bg-blue", light: true },
  { icon: "🛡️", title: "Privacy First", desc: "Read-only. Encrypted. Disconnect anytime", bg: "bg-yellow" },
  { icon: "⚡", title: "Instant Setup", desc: "Connect all accounts in 30 seconds", bg: "bg-sky" },
];

export default function Features() {
  return (
    <section id="features" className={`${card} bg-cream`}>
      <div className="px-6 py-12 md:py-16">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink uppercase tracking-tight text-center mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Your <span className={`${pill} inline-block bg-yellow px-5 py-0.5`}>Tools</span>
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((f) => (
            <AnimateIn key={f.title}>
              <div className={`${cardInner} p-5 h-full ${f.bg} ${f.light ? "text-white" : "text-ink"}`}>
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="text-sm font-extrabold uppercase tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                <p className={`text-xs leading-relaxed ${f.light ? "text-white/60" : "text-ink/40"}`}>{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
