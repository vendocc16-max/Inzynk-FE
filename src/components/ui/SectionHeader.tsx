interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2
        className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight"
        dangerouslySetInnerHTML={{ __html: headline }}
      />
      {subtitle && (
        <p
          className={`text-on-surface-variant text-lg leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
