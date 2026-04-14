export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="surface flex items-center gap-4 px-6 py-5">
        <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-blue-400 [animation-delay:180ms]" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-slate-400 [animation-delay:360ms]" />
        <p className="text-sm uppercase tracking-[0.28em] text-foreground/70">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}
