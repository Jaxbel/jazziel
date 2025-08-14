// src/components/Hero.tsx
import React from "react";
import type { FC } from "react";
import { Section } from "./Section";

export const Hero: FC = () => (
  <Section
    id="hero"
    size="sm"
    className="h-[90vh] md:h-screen scroll-mt-24 flex flex-col items-center justify-center text-center gap-6 px-6 bg-background text-foreground"
  >
    <span className="text-sm uppercase tracking-wider text-muted-foreground">
      Software Engineer
    </span>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
      Hi, I&apos;m <span className="text-primary">Jazziel Bello</span>
    </h1>

    <p className="max-w-prose text-sm sm:text-base leading-6 text-muted-foreground">
      Backend‑focused developer with a love for clean code, security, and building smart
      systems. I craft APIs, dashboards, and automation tools with tech that scales.
    </p>

    <img
      src="/jazziel.jpg"
      alt="Jazziel Bello"
      className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl object-cover shadow-xl mx-auto my-6 border border-border bg-card"
      loading="lazy"
    />
  </Section>
);
