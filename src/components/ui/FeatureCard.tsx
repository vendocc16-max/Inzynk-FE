interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  linkText,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-surface-container-lowest p-12 rounded-lg shadow-sm group hover:shadow-xl transition-shadow duration-500 ${className}`}
    >
      <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-8 text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
      <div className="mt-8 pt-8 border-t border-outline-variant/10 text-primary font-semibold flex items-center gap-2 cursor-pointer">
        {linkText}{" "}
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  );
}
