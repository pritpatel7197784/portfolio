type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-foreground/72 sm:text-base">{description}</p>
    </div>
  );
}
