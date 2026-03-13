"use client";

import Image from "next/image";

const NOISE_TEXT =
  "@xj29dk followed you · @user_8847 followed you · @marketing.guru99 followed you · @s1lv3rf0x followed you · @cool_dude_42 followed you · @noname9281 followed you · @theboss_real followed you · @growth.hacks followed you · @randomguy334 followed you · @social_media_tips followed you · @entrepreneur247 followed you · @followback_plz followed you · @daily.quotes99 followed you · @mk_travels followed you · @user29471 followed you · @motivate.daily followed you · ";

const SIGNAL_TEXT =
  "Elon M. just followed you · 142M followers · Emma C. entered your orbit · 2.4M followers · Naval R. noticed you · 1.8M · Sara R. followed you · 89K · A founder just entered your orbit · James M. followed your startup · 1.2M followers · 3 verified accounts followed you today · Priya S. discovered you · 310K followers · ";

// Left: chaotic spiral curving down
const CURVE_LEFT =
  "M50 50C67 143 147 293 334 353C490 399 633 294 550 185C467 75 288 282 549 442";

// Right: thick band sweeping across
const CURVE_RIGHT =
  "M2 564C112 558 316 554 518 490C703 431 875 445 1022 453";

export default function HeroRibbon() {
  return (
    <div className="relative w-full" style={{ marginTop: -20 }}>
      {/* LEFT: noise spiral */}
      <div className="absolute left-0 top-0 w-[55%] h-full pointer-events-none overflow-visible">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: "visible" }}
        >
          <path id="noise-path" d={CURVE_LEFT} fill="none" stroke="none" />
          <text
            fontSize="14"
            fontWeight="400"
            fill="#121212"
            opacity="0.2"
            fontFamily="var(--font-body)"
          >
            <textPath href="#noise-path">
              <animate
                attributeName="startOffset"
                from="-200%"
                to="0%"
                dur="40s"
                repeatCount="indefinite"
              />
              {NOISE_TEXT}
              {NOISE_TEXT}
            </textPath>
          </text>
        </svg>
      </div>

      {/* CENTER: Who? logo */}
      <div className="relative z-10 flex justify-center" style={{ paddingTop: 200 }}>
        <div
          className="w-16 h-16 border-2 border-ink bg-card flex items-center justify-center"
          style={{ borderRadius: 20 }}
        >
          <Image
            src="/who-icon.png"
            alt="Who?"
            width={40}
            height={40}
            style={{ borderRadius: "22%" }}
          />
        </div>
      </div>

      {/* RIGHT: signal band */}
      <div
        className="w-full pointer-events-none"
        style={{ marginTop: -60 }}
      >
        <svg
          viewBox="0 0 1024 620"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: 180, overflow: "visible" }}
        >
          <path
            id="signal-path"
            d={CURVE_RIGHT}
            fill="none"
            stroke="#121212"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <text
            fontSize="16"
            fontWeight="600"
            fill="#fff"
            fontFamily="var(--font-body)"
          >
            <textPath href="#signal-path" dominantBaseline="central">
              <animate
                attributeName="startOffset"
                from="-300%"
                to="0%"
                dur="55s"
                repeatCount="indefinite"
              />
              {SIGNAL_TEXT}
              {SIGNAL_TEXT}
              {SIGNAL_TEXT}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
