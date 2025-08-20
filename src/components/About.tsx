import type { FC } from "react";
import { Section } from "./Section";
import { LocationCard } from "./LocationCard";

export const About: FC = () => (
  <Section id="about" size="md" className="bg-background text-foreground">
    <h2 className="text-3xl font-bold text-center mb-8">About me</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {/* Location */}
        <div className="rounded-2xl border border-border bg-card/70 shadow-sm">
          <LocationCard />
        </div>

        {/* Short bio */}
        <div className="p-6 md:p-7 rounded-2xl border border-border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Hi, I’m Jazziel 👋</h3>
          <p className="text-sm text-muted-foreground leading-6">
            Full‑stack developer focused on shipping clean, efficient and scalable products.
            I work across the stack—from data models and APIs to accessible, polished UIs—
            and I’m constantly learning to push quality and speed in delivery.
          </p>

          {/* Availability badge (green "online") */}
          <div className="mt-4 inline-flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Open to new opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Right: connect + stats + learning */}
      <div className="space-y-6">
        {/* Connect */}
        <div className="p-6 md:p-7 rounded-2xl border border-border bg-card shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <a
              href="/jazziel_bello_cv.pdf"
              download="Jazziel_Bello_Resume.pdf"
              className="text-sm font-medium text-primary hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
            >
              Download résumé
            </a>

          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://github.com/jaxbel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jazziel-bello/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:jazzieldev@gmail.com"
                className="hover:text-foreground hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
                aria-label="Send email"
              >
                jazzieldev@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 md:p-6 rounded-2xl border border-border bg-card shadow-sm text-center">
            <p className="text-sm text-muted-foreground mb-1">Projects shipped</p>
            <p className="text-2xl font-bold">10+</p>
          </div>
          <div className="p-5 md:p-6 rounded-2xl border border-border bg-card shadow-sm text-center">
            <p className="text-sm text-muted-foreground mb-1">Coding hours</p>
            <p className="text-2xl font-bold">1200+</p>
          </div>
        </div>

        {/* Currently learning (no tech stack list) */}
        <div className="p-6 md:p-7 rounded-2xl border border-border bg-card shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Currently learning</h3>
          <p className="text-sm text-muted-foreground leading-6">
            PyTorch · Deep Learning & Artificial Intelligence — focusing on practical
            model training, evaluation, and deployment for real‑world apps.
          </p>
        </div>
      </div>
    </div>
  </Section>
);
