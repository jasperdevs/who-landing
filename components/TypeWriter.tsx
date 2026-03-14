"use client";

import { useEffect, useState } from "react";

const phrases = [
  "See who just followed you.",
  "See who has 1M followers.",
  "See who noticed you.",
  "See who matters.",
];

const TYPE_SPEED = 35;
const DELETE_SPEED = 20;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 300;

export default function TypeWriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];

    if (!deleting && charIdx === phrase.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }

    const speed = deleting ? DELETE_SPEED : TYPE_SPEED;
    const t = setTimeout(() => {
      setCharIdx((c) => c + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span>
      {phrases[phraseIdx].substring(0, charIdx)}
      <span
        className="inline-block w-[2px] h-[1.1em] bg-blue ml-0.5 align-middle rounded-full"
        style={{ animation: "cursor-blink 0.8s step-end infinite" }}
      />
    </span>
  );
}
