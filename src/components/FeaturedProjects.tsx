import type { FC } from "react";
import { Section } from "@/components/Section";
import { Icons } from "@/components/ui/icons";
import { projects } from "@/lib/projects";
import { getTechnology, type TechnologyName } from "@/lib/technologies";

type IconKey = keyof typeof Icons;

export const FeaturedProjects: FC = () => (
  <Section id="projects" size="md" className="scroll-mt-24">
    <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <article
          key={project.name}
          className={[
            "group relative flex h-full flex-col rounded-2xl border border-border",
            "bg-card shadow-sm backdrop-blur p-6 transition",
            "hover:shadow-lg hover:border-primary/30",
            project.featured ? "ring-1 ring-primary/10" : "",
          ].join(" ")}
        >
          {/* Stretched link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} – ${project.actionLabel ?? "View"}`}
            className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 z-0"
            tabIndex={0}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col">
            {/* Tech chips */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.tech.map((tName) => {
                const t = getTechnology(tName as TechnologyName);
                if (!t) return null;
                const Icon = Icons[t.icon as IconKey];
                return (
                  <a
                    key={`${project.name}-${t.name}`}
                    href={t.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={t.name}
                    onClick={(e) => e.stopPropagation()}
                    className={[
                      "inline-flex items-center gap-1 rounded-md border border-border",
                      "bg-background/70 px-2 py-1 text-xs text-muted-foreground",
                      "hover:text-foreground hover:bg-background transition",
                      "focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="max-sm:hidden">{t.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Title + description */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold break-words line-clamp-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 inline-flex hover:underline underline-offset-4"
                >
                  {project.name}
                </a>
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-6 line-clamp-3 break-words">
                {project.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 flex items-center gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
              >
                {project.actionLabel ?? "View"}
              </a>

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded"
                >
                  Repository
                </a>
              )}
            </div>
          </div>

          {/* Hover/focus outline */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all duration-200 group-hover:ring-1 group-hover:ring-primary/20"
          />
        </article>
      ))}
    </div>

    <div className="flex justify-center mt-10">
      <a
        href="/projects"
        className={[
          "inline-flex items-center gap-2 rounded-lg border border-border",
          "px-6 py-2 text-sm font-medium",
          "hover:bg-muted transition",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        ].join(" ")}
      >
        See All Projects
      </a>
    </div>
  </Section>
);
