import { ReactNode } from "react";

interface EditorialGridProps {
  children: ReactNode;
  className?: string;
}

export default function EditorialGrid({
  children,
  className = "",
}: EditorialGridProps) {
  return <div className={`editorial-grid ${className}`}>{children}</div>;
}
