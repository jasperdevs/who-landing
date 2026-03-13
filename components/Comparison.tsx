"use client";

import { AppIconX, AppIconInstagram, AppIconTikTok, IconBell } from "./Icons";
import Avatar from "./Avatar";

const noise = [
  "@xj29dk followed you", "@user_8847 followed you",
  "@marketing.guru99 followed you", "@s1lv3rf0x followed you",
  "@cool_dude_42 followed you", "@jan__smith followed you",
  "@noname9281 followed you", "@theboss_real followed you",
  "@growth.hacks followed you", "@randomguy334 followed you",
  "@social_media_tips followed you", "@x8k2mq followed you",
  "@entrepreneur247 followed you", "@followback_plz followed you",
  "@daily.quotes99 followed you", "@user29471 followed you",
  "@mk_travels followed you", "@motivate.daily followed you",
  "@xj29dk followed you", "@user_8847 followed you",
  "@marketing.guru99 followed you", "@s1lv3rf0x followed you",
  "@cool_dude_42 followed you", "@jan__smith followed you",
];

const signal = [
  { avatar: "/avatars/sara.png", name: "Sara R.", followers: "89K", icon: <AppIconInstagram size={26} /> },
  { avatar: "/avatars/james.png", name: "James M.", followers: "1.2M", icon: <AppIconX size={26} /> },
  { avatar: "/avatars/priya.png", name: "Priya S.", followers: "310K", icon: <AppIconTikTok size={26} /> },
];

export default function Comparison() {
  return (
    <section id="features" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[15px] font-semibold text-muted mb-5 text-center md:text-left">Right now</p>
            <div className="border-2 border-ink bg-card h-[460px] overflow-hidden relative" style={{ borderRadius: 28 }}>
              <div className="px-6 py-4 border-b-2 border-ink flex items-center gap-2.5">
                <IconBell className="w-4 h-4 text-muted" />
                <span className="text-[13px] font-semibold text-muted">Notifications</span>
              </div>
              <div className="relative h-[calc(100%-54px)] overflow-hidden">
                <div style={{ animation: "scroll-noise 6s linear infinite" }}>
                  {noise.map((n, i) => (
                    <div key={i} className="px-6 py-3.5 border-b border-ink/5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-ink/8 shrink-0" />
                      <span className="text-[14px] text-muted/70 truncate">{n}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-card to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[15px] font-semibold text-ink mb-5 text-center md:text-left">With Who?</p>
            <div className="border-2 border-ink bg-blue h-[460px] flex flex-col" style={{ borderRadius: 28 }}>
              <div className="px-6 py-4 border-b-2 border-ink">
                <span
                  className="text-lg font-bold text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Who?
                </span>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-4">
                {signal.map((s) => (
                  <div key={s.name} className="flex items-center gap-4 p-4 border-2 border-ink bg-cream" style={{ borderRadius: 20 }}>
                    <Avatar src={s.avatar} alt={s.name} size={50} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-semibold text-ink">{s.name}</p>
                      <p className="text-[13px] text-muted mt-0.5">{s.followers} followers</p>
                    </div>
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
