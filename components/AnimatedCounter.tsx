"use client";

import { useEffect, useState, useRef } from "react";

function SlotDigit({ digit, prevDigit }: { digit: string; prevDigit: string }) {
  if (digit === prevDigit)
    return <span className="inline-block" style={{ width: "0.55em" }}>{digit}</span>;
  return (
    <span className="inline-block overflow-hidden relative" style={{ height: "1.2em", width: "0.55em" }}>
      <span key={`o-${prevDigit}-${digit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-out 0.3s forwards" }}>{prevDigit}</span>
      <span key={`n-${digit}-${prevDigit}`} className="absolute inset-0 flex items-center justify-center" style={{ animation: "slot-in 0.3s forwards" }}>{digit}</span>
    </span>
  );
}

export default function AnimatedCounter() {
  const [count, setCount] = useState(142);
  const prevRef = useRef("142");
  useEffect(() => {
    const iv = setInterval(() => {
      setCount((c) => { prevRef.current = String(c); return c >= 999 ? 142 : c + 1; });
    }, 500);
    return () => clearInterval(iv);
  }, []);
  const curr = String(count);
  const prev = prevRef.current.padStart(curr.length, "0");
  return (
    <span className="pill-badge text-[10px] font-bold text-ink bg-yellow/80 px-2.5 py-0.5 tabular-nums inline-flex items-center gap-0.5">
      {curr.split("").map((d, i) => <SlotDigit key={i} digit={d} prevDigit={prev[i] || "0"} />)}
      <span>+</span>
    </span>
  );
}
