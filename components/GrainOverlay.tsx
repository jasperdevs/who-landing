"use client";

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <style>{`
        @keyframes grain-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .grain-a { animation: grain-flicker 0.1s steps(1) infinite; }
        .grain-b { animation: grain-flicker 0.1s steps(1) infinite 0.05s; }
      `}</style>
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] grain-a">
        <filter id="grain-a">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="1" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-a)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] grain-b">
        <filter id="grain-b">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" seed="42" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-b)" />
      </svg>
    </div>
  );
}
