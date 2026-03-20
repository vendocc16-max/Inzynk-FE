interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function MetricCard({
  value,
  label,
  description,
  size = "md",
  className = "",
}: MetricCardProps) {
  const valueSize = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl md:text-7xl",
  };

  return (
    <div className={className}>
      <div
        className={`${valueSize[size]} font-headline font-black text-primary mb-2 tracking-tighter`}
      >
        {value}
      </div>
      <div className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">
        {label}
      </div>
      {description && (
        <p className="text-on-surface-variant mt-2 text-sm">{description}</p>
      )}
    </div>
  );
}
