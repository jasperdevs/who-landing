import Avatar from "./Avatar";

const following = [
  { src: "/avatars/emma.png", name: "Emma C." },
  { src: "/avatars/sara.png", name: "Sara R." },
  { src: "/avatars/priya.png", name: "Priya S." },
];

export default function FollowMap() {
  return (
    <section id="about" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See who they follow.
          </h2>
          <p className="mt-5 text-[17px] text-muted max-w-md mx-auto leading-relaxed">
            Curious about someone? See their recent follows,
            patterns, and who they pay attention to.
          </p>
        </div>

        <div
          className="mx-auto max-w-lg border-2 border-ink bg-card overflow-hidden"
          style={{ borderRadius: 28 }}
        >
          <div className="px-7 py-5 border-b-2 border-ink flex items-center justify-between">
            <span className="text-[15px] font-semibold text-ink">Following activity</span>
            <span
              className="text-xs font-semibold text-ink bg-apricot px-3.5 py-1.5 border border-ink"
              style={{ borderRadius: 10 }}
            >
              This week
            </span>
          </div>

          <div className="p-7 border-b-2 border-ink flex items-center gap-5">
            <Avatar src="/avatars/alex.png" alt="Alex K." size={60} />
            <div>
              <p
                className="text-xl font-bold text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Alex K.
              </p>
              <p className="text-[14px] text-muted mt-0.5">@alexkim &middot; followed 5 new accounts</p>
            </div>
          </div>

          <div className="p-7">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-5">
              Recently followed
            </p>

            <div className="space-y-3">
              {following.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-4 p-4 border-2 border-ink bg-cream"
                  style={{ borderRadius: 18 }}
                >
                  <Avatar src={f.src} alt={f.name} size={44} />
                  <p className="text-[15px] font-semibold text-ink">{f.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span
                className="text-[13px] font-semibold px-4 py-2 border-2 border-ink bg-blue text-ink"
                style={{ borderRadius: 12 }}
              >
                Follows mostly creators
              </span>
              <span
                className="text-[13px] font-semibold px-4 py-2 border-2 border-ink bg-lime text-ink"
                style={{ borderRadius: 12 }}
              >
                3 mutual follows
              </span>
              <span
                className="text-[13px] font-semibold px-4 py-2 border-2 border-ink bg-cream text-ink"
                style={{ borderRadius: 12 }}
              >
                Active daily
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
