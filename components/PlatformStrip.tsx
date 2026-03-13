import {
  AppIconX,
  AppIconInstagram,
  AppIconTikTok,
  AppIconBluesky,
  AppIconLinkedIn,
  AppIconThreads,
} from "./Icons";

const platforms = [
  { icon: AppIconX, label: "X" },
  { icon: AppIconInstagram, label: "Instagram" },
  { icon: AppIconTikTok, label: "TikTok" },
  { icon: AppIconThreads, label: "Threads" },
  { icon: AppIconBluesky, label: "Bluesky" },
  { icon: AppIconLinkedIn, label: "LinkedIn" },
];

export default function PlatformStrip() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-semibold text-muted uppercase tracking-wider mb-6">
          Works across your favorite platforms
        </p>
        <div className="flex items-center justify-center gap-5 md:gap-8 flex-wrap">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.label} className="flex items-center gap-2.5">
                <Icon size={28} />
                <span className="text-[14px] font-medium text-ink hidden sm:inline">
                  {p.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
