"use client";

import { useEffect, useRef, useState } from "react";
import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { card, cardInner, pill } from "@/lib/styles";

/* ── Counter ── */
function Counter() {
  const [count, setCount] = useState(142);
  const prevRef = useRef("142");
  useEffect(() => {
    const iv = setInterval(() => { setCount((c) => { prevRef.current = String(c); return c >= 999 ? 142 : c + 1; }); }, 500);
    return () => clearInterval(iv);
  }, []);
  const curr = String(count), prev = prevRef.current.padStart(curr.length, "0");
  return (
    <span className={`${pill} text-[10px] font-bold text-ink bg-yellow/80 px-2.5 py-0.5 tabular-nums`}>
      {curr.split("").map((d, i) => d === prev[i]
        ? <span key={i} className="inline-block" style={{ width: "0.55em" }}>{d}</span>
        : <span key={i} className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.55em" }}>
            <span className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-out 0.3s forwards" }}>{prev[i]}</span>
            <span className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-in 0.3s forwards" }}>{d}</span>
          </span>
      )}
      <span>+</span>
    </span>
  );
}

/* ── Notif stack ── */
const handles = ["@xj29dk","@user_8847","@marketing.guru99","@s1lv3rf0x","@cool_dude_42","@jan__smith","@noname9281","@theboss_real","@growth.hacks","@randomguy334"];

function NotifStack() {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useRef(true);
  const [off, setOff] = useState(0);
  useEffect(() => { const el = ref.current; if(!el) return; const o = new IntersectionObserver(([e])=>{vis.current=e.isIntersecting},{threshold:0}); o.observe(el); return ()=>o.disconnect(); }, []);
  useEffect(() => { const iv = setInterval(()=>{if(vis.current)setOff(o=>o+1);},350); return ()=>clearInterval(iv); }, []);
  const items = Array.from({length:5},(_,i)=>({ h: handles[(off+i)%handles.length], k: off+i }));
  return (
    <div ref={ref} className="flex flex-col gap-1.5 p-3">
      {items.map((n,i) => (
        <div key={n.k} className={`flex items-center gap-2.5 px-3 py-2 bg-ink/[0.03] rounded-2xl ${i===0?"animate-[notif-slide-in_0.3s_ease-out]":""}`}>
          <div className="w-7 h-7 rounded-full bg-ink/[0.06] shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-ink/20">Notification</p>
            <p className="text-xs text-ink/35 truncate">{n.h} followed you</p>
          </div>
          <span className="text-[9px] text-ink/15 font-semibold">now</span>
        </div>
      ))}
    </div>
  );
}

const signals = [
  { name: "Sara R.", stat: "89K followers", platform: "Instagram", src: "/icons/instagram-appstore-raw.jpg" },
  { name: "James M.", stat: "1.2M followers", platform: "X", src: "/icons/x-appstore-raw.jpg" },
  { name: "Priya S.", stat: "310K followers", platform: "TikTok", src: "/icons/tiktok-appstore-raw.jpg" },
];

export default function Comparison() {
  return (
    <section className={`${card} bg-cream`}>
      <div className="px-6 pt-12 md:pt-16">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink uppercase tracking-tight text-center mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Noise vs <span className={`${pill} inline-block bg-yellow px-5 py-0.5`}>Signal</span>
          </h2>
        </AnimateIn>
      </div>

      <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <AnimateIn>
          <div className={`${cardInner} bg-white h-[360px] flex flex-col`}>
            <div className="px-4 py-3 border-b-2 border-ink flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span style={{ animation: "bell-ring 2s ease-in-out infinite", display: "inline-block" }}>🔔</span>
                <span className="text-xs font-bold text-ink/50 uppercase" style={{ fontFamily: "var(--font-display)" }}>Notifications</span>
              </div>
              <Counter />
            </div>
            <div className="flex-1 overflow-hidden relative">
              <NotifStack />
              <div className="absolute bottom-0 inset-x-0 h-14 pointer-events-none" style={{ background: "linear-gradient(to top, white, transparent)" }} />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className={`${cardInner} bg-yellow h-[360px] flex flex-col`}>
            <div className="px-4 py-3 border-b-2 border-ink">
              <span className="text-xs font-bold text-ink/60 uppercase" style={{ fontFamily: "var(--font-display)" }}>✨ Who? Report</span>
            </div>
            <div className="flex-1 px-3 pb-3 flex flex-col justify-center gap-2">
              {signals.map((s) => (
                <div key={s.name} className="flex items-center gap-3 p-3 bg-cream rounded-xl border-2 border-ink">
                  <div className="w-10 h-10 rounded-xl border-2 border-ink shrink-0 overflow-hidden">
                    <Image src={s.src} alt={s.platform} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.name}</p>
                    <p className="text-xs text-ink/40">{s.stat}</p>
                  </div>
                  <span className={`${pill} bg-blue text-white text-[10px] font-semibold px-2.5 py-0.5`}>{s.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
