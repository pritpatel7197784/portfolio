type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export function ExperienceTimeline({
  items
}: {
  items: ExperienceItem[];
}) {
  return (
    <div className="mt-8 space-y-6">
      {items.map((item, index) => (
        <div key={item.company} className="grid gap-4 md:grid-cols-[140px_1fr]">
          <div className="hidden md:flex md:justify-center">
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
              {index < items.length - 1 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
            </div>
          </div>
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
              </div>
              <p className="font-[family-name:var(--font-mono)] text-sm text-foreground/62">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-foreground/72">{item.summary}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
