import Button from "./Button";

interface CTASectionProps {
  headline: string;
  subtitle?: string;
  primaryLabel: string;
  secondaryLabel?: string;
  variant?: "dark" | "light";
}

export default function CTASection({
  headline,
  subtitle,
  primaryLabel,
  secondaryLabel,
  variant = "light",
}: CTASectionProps) {
  const bgClass =
    variant === "dark"
      ? "bg-on-surface text-white py-32"
      : "bg-surface-container-low rounded-xl p-16 border border-outline-variant/10";

  return (
    <section className={`${bgClass}`}>
      <div
        className={`max-w-screen-2xl mx-auto ${
          variant === "dark" ? "px-8" : ""
        } flex flex-col items-center text-center`}
      >
        <h2
          className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {subtitle && (
          <p
            className={`text-xl max-w-2xl mx-auto mb-10 ${
              variant === "dark" ? "text-surface-variant" : "text-on-surface-variant"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary">{primaryLabel}</Button>
          {secondaryLabel && (
            <Button
              variant="secondary"
              className={
                variant === "dark"
                  ? "border-white/30 text-white hover:bg-white/10"
                  : ""
              }
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
