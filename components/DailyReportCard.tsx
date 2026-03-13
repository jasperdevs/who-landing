import Image from "next/image";
import { AppIconX } from "./Icons";
import Avatar from "./Avatar";

export default function DailyReportCard() {
  return (
    <div
      className="border-[3px] border-ink bg-card shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
      style={{ borderRadius: "var(--radius-xl)", width: "100%", maxWidth: 330 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3 border-b-[3px] border-ink">
        <Image
          src="/who-icon.png"
          alt="Who?"
          width={20}
          height={20}
          style={{ borderRadius: "22%" }}
        />
        <span
          className="text-sm font-bold text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your signal
        </span>
        <span className="text-xs text-muted ml-auto">Today</span>
      </div>

      {/* Featured follower */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-start gap-3">
          <Avatar src="/avatars/elon.png" alt="Elon M." size={44} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-ink">Elon M.</span>
              <AppIconX size={15} />
            </div>
            <p className="text-xs text-muted mt-0.5">followed you 2 min ago</p>

            {/* Context tags */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span
                className="text-[11px] font-bold text-ink bg-lime px-2.5 py-0.5 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                142M followers
              </span>
              <span
                className="text-[11px] font-bold text-ink bg-blue px-2.5 py-0.5 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                Top 0.01%
              </span>
              <span
                className="text-[11px] font-bold text-ink bg-apricot px-2.5 py-0.5 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                Tech
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights strip */}
      <div className="mx-5 mb-4">
        <div
          className="bg-cream border-[2px] border-ink/10 px-4 py-3 flex items-center gap-3"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          <div
            className="w-7 h-7 bg-lime border-[2px] border-ink flex items-center justify-center shrink-0"
            style={{ borderRadius: 8 }}
          >
            <svg className="w-3.5 h-3.5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-ink">Unusual activity</p>
            <p className="text-[11px] text-muted">3 notable follows in the last hour</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-2.5 border-t-[3px] border-ink bg-cream/50 text-center"
        style={{ borderRadius: "0 0 25px 25px" }}
      >
        <p className="text-xs font-bold text-muted">
          +11 new today &middot; 4 notable
        </p>
      </div>
    </div>
  );
}
