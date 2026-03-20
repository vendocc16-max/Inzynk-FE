import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-gradient-gold text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20",
  secondary:
    "bg-transparent border border-outline-variant/30 text-on-surface px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-surface-container-high transition-all",
  tertiary:
    "text-primary font-semibold hover:underline transition-all inline-flex items-center gap-2",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
