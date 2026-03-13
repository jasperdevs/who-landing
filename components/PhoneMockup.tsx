export default function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 260,
        borderRadius: 44,
        padding: "6px",
        background: "#1a1a1a",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Side buttons */}
      <div
        className="absolute -right-[2px] top-[72px] w-[3px] h-[28px] bg-[#2a2a2a]"
        style={{ borderRadius: "0 2px 2px 0" }}
      />
      <div
        className="absolute -left-[2px] top-[60px] w-[3px] h-[20px] bg-[#2a2a2a]"
        style={{ borderRadius: "2px 0 0 2px" }}
      />
      <div
        className="absolute -left-[2px] top-[90px] w-[3px] h-[32px] bg-[#2a2a2a]"
        style={{ borderRadius: "2px 0 0 2px" }}
      />
      <div
        className="absolute -left-[2px] top-[128px] w-[3px] h-[32px] bg-[#2a2a2a]"
        style={{ borderRadius: "2px 0 0 2px" }}
      />

      {/* Screen */}
      <div
        className="relative overflow-hidden bg-card"
        style={{ borderRadius: 40 }}
      >
        {/* Status bar with time + notch + battery */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 relative z-20">
          {/* Time */}
          <span className="text-[11px] font-bold text-ink w-12">9:41</span>

          {/* Dynamic Island */}
          <div
            className="bg-[#1a1a1a]"
            style={{
              width: 80,
              height: 22,
              borderRadius: 20,
            }}
          />

          {/* Signal + battery */}
          <div className="flex items-center gap-1 w-12 justify-end">
            {/* Signal bars */}
            <svg className="w-[14px] h-[10px]" viewBox="0 0 16 12" fill="var(--color-ink)">
              <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="0.3" />
              <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="0.3" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="0.8" />
              <rect x="13" y="0" width="3" height="12" rx="0.5" />
            </svg>
            {/* Battery */}
            <svg className="w-[20px] h-[10px]" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="0.5" width="22" height="12" rx="2.5" stroke="var(--color-ink)" strokeWidth="1" opacity="0.4" />
              <rect x="2" y="2" width="16" height="9" rx="1.5" fill="var(--color-ink)" opacity="0.8" />
              <rect x="23.5" y="4" width="2" height="5" rx="1" fill="var(--color-ink)" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {children}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pt-1 pb-2.5">
          <div className="w-24 h-[4px] bg-ink/15 rounded-full" />
        </div>
      </div>
    </div>
  );
}
