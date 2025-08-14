// src/components/Section.tsx
import React from "react";
import type { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  bg?: "default" | "muted";
  size?: "sm" | "md" | "lg";
  id?: string;
}

const padding = {
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-24 md:py-28",
} as const;

const bgClass = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
} as const;

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  bg = "default",
  size = "md",
  className = "",
  ...rest
}) => (
  <section
    id={id}
    // scroll-mt evita que el navbar fijo tape el ancla
    className={`${bgClass[bg]} ${padding[size]} w-full scroll-mt-24 ${className}`}
    {...rest}
  >
    <div className="max-w-screen-lg mx-auto px-4 md:px-8">
      {children}
    </div>
  </section>
);
