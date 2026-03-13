import {
  IconBell,
  IconUser,
  IconEye,
  IconTrendingUp,
  IconSearch,
  IconArrowRight,
} from "./Icons";

const questions = [
  { text: "who just followed you?", color: "bg-blue", icon: IconBell },
  { text: "who has 1M followers?", color: "bg-lime", icon: IconTrendingUp },
  { text: "who\u2019s a founder?", color: "bg-card", icon: IconUser },
  { text: "who unfollowed?", color: "bg-apricot", icon: IconEye },
  { text: "who noticed you?", color: "bg-card", icon: IconSearch },
  { text: "who matters?", color: "bg-lime", icon: IconArrowRight },
];

export default function QuestionWall() {
  return (
    <section className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {questions.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.text}
                className={`border-2 border-ink ${q.color} p-8 flex items-end justify-between gap-5 min-h-[120px]`}
                style={{ borderRadius: 24 }}
              >
                <h3
                  className="text-[1.65rem] font-bold text-ink leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {q.text}
                </h3>
                <div
                  className="w-12 h-12 border-2 border-ink bg-cream flex items-center justify-center shrink-0"
                  style={{ borderRadius: 14 }}
                >
                  <Icon className="w-5 h-5 text-ink" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
