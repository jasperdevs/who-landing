"use client";

import { useEffect, useState } from "react";

const phrases = [
  "See who just followed you.",
  "See who has 1M followers.",
  "See who noticed you.",
  "See who matters.",
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 30;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function TypeWriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];

    if (!isDeleting && charIdx === phrase.length) {
      // Finished typing -- pause then start deleting
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIdx === 0) {
      // Finished deleting -- move to next phrase
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      const t = setTimeout(() => {}, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const t = setTimeout(() => {
      setCharIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(t);
  }, [charIdx, isDeleting, phraseIdx]);

  const currentText = phrases[phraseIdx].substring(0, charIdx);

  return (
    <span>
      {currentText}
      <span className="inline-block w-[2px] h-[1.1em] bg-ink/40 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
