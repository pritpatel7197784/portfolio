type ProjectCardProps = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
};

export function ProjectCard({
  title,
  problem,
  solution,
  impact
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <p className="eyebrow">Featured Program</p>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Problem</p>
          <p className="mt-2 text-sm leading-7 text-foreground/72">{problem}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Solution</p>
          <p className="mt-2 text-sm leading-7 text-foreground/72">{solution}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Impact</p>
          <p className="mt-2 text-sm leading-7 text-cyan-300">{impact}</p>
        </div>
      </div>
    </article>
  );
}
