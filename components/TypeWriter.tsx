"use client";

import { useEffect, useState } from "react";

const phrases = ["See who just followed you.", "See who has 1M followers.", "See who noticed you.", "See who matters."];

export default function TypeWriter() {
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const p = phrases[pi];
    if (!del && ci === p.length) { const t = setTimeout(() => setDel(true), 1600); return () => clearTimeout(t); }
    if (del && ci === 0) { const t = setTimeout(() => { setDel(false); setPi((i) => (i + 1) % phrases.length); }, 300); return () => clearTimeout(t); }
    const t = setTimeout(() => setCi((c) => c + (del ? -1 : 1)), del ? 20 : 35);
    return () => clearTimeout(t);
  }, [ci, del, pi]);

  return (
    <span>
      {phrases[pi].substring(0, ci)}
      <span className="inline-block w-[2px] h-[1.1em] bg-blue ml-0.5 align-middle rounded-full" style={{ animation: "cursor-blink 0.8s step-end infinite" }} />
    </span>
  );
}
