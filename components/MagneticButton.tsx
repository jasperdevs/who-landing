"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  style,
  href,
  type,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState("translate(0px, 0px)");

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  }

  function handleMouseLeave() {
    setTransform("translate(0px, 0px)");
  }

  const props = {
    ref: ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>,
    className,
    style: {
      ...style,
      transform,
      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <a href={href} {...props} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
