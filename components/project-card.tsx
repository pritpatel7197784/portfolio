import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
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
          <div className="mt-2 text-sm leading-7 text-foreground/72">{problem}</div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Solution</p>
          <div className="mt-2 text-sm leading-7 text-foreground/72">{solution}</div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/55">Impact</p>
          <div className="mt-2 text-sm leading-7 text-cyan-300">{impact}</div>
        </div>
      </div>
    </article>
  );
}
