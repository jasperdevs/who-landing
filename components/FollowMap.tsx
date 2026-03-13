import Avatar from "./Avatar";
import AnimateIn from "./AnimateIn";

const following = [
  { src: "/avatars/emma.png", name: "Emma C." },
  { src: "/avatars/sara.png", name: "Sara R." },
  { src: "/avatars/priya.png", name: "Priya S." },
];

export default function FollowMap() {
  return (
    <section id="about" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See who they follow.
            </h2>
            <p className="mt-3 text-lg text-muted max-w-sm mx-auto leading-relaxed">
              Curious about someone? See their recent follows,
              patterns, and who they pay attention to.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div
            className="border-[3px] border-ink bg-card overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div className="px-6 py-5 border-b-[3px] border-ink flex items-center justify-between">
              <span className="text-base font-bold text-ink">Following activity</span>
              <span
                className="text-sm font-bold text-ink bg-apricot px-4 py-1.5 border-[2px] border-ink"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                This week
              </span>
            </div>

            <div className="p-6 border-b-[3px] border-ink flex items-center gap-4">
              <Avatar src="/avatars/alex.png" alt="Alex K." size={52} />
              <div>
                <p
                  className="text-xl font-bold text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Alex K.
                </p>
                <p className="text-sm text-muted mt-0.5">
                  @alexkim &middot; followed 5 new accounts
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold text-muted uppercase tracking-wider mb-4">
                Recently followed
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {following.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center gap-3 p-3.5 border-[3px] border-ink bg-cream card-hover"
                    style={{ borderRadius: "var(--radius-lg)" }}
                  >
                    <Avatar src={f.src} alt={f.name} size={40} />
                    <p className="text-[15px] font-bold text-ink">{f.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <span
                  className="text-sm font-bold px-4 py-1.5 border-[2px] border-ink bg-blue text-ink"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  Follows mostly creators
                </span>
                <span
                  className="text-sm font-bold px-4 py-1.5 border-[2px] border-ink bg-lime text-ink"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  3 mutual follows
                </span>
                <span
                  className="text-sm font-bold px-4 py-1.5 border-[2px] border-ink bg-cream text-ink"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  Active daily
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
