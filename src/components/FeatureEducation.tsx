import type { FC } from "react";
import { Section } from "@/components/Section";
import { education as educationData } from "@/lib/education";
import type { EdcucationItem } from "@/lib/education";

const isInProgress = (text?: string) =>
  (text ?? "").toLowerCase().includes("in progress") ||
  (text ?? "").toLowerCase().includes("en curso");

export const FeaturedEducation: FC = () => {
  const list: EdcucationItem[] = Array.isArray(educationData) ? educationData : [];

  return (
    <Section id="education" size="md">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

      {list.length === 0 && (
        <div className="rounded-lg border border-border bg-card/60 p-4 text-sm text-muted-foreground">
          No education items yet.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((edu) => {
          const showInProgress = isInProgress(edu.detail) || isInProgress(edu.year);

          return (
            <article
              key={`${edu.institution}-${edu.detail}`}
              className={[
                "group relative flex h-full flex-col rounded-2xl border border-border bg-card/60 backdrop-blur",
                "p-6 shadow-sm transition",
                "hover:shadow-lg hover:border-primary/30",
                edu.featured ? "ring-1 ring-primary/10" : "",
              ].join(" ")}
            >
              {edu.url && (
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label={`${edu.institution} — ${edu.detail}`}
                  tabIndex={0}
                />
              )}

              <div className="relative z-10 flex h-full flex-col">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0 max-w-full">
                    {edu.image ? (
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-12 h-12 object-contain rounded-md border border-border bg-background/50 shrink-0"
                        loading="lazy"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="w-12 h-12 rounded-md border border-dashed border-border grid place-items-center text-xs text-muted-foreground select-none shrink-0"
                      >
                        Logo
                      </span>
                    )}

                    <div className="min-w-0 max-w-full">
                      <h3 className="text-base font-semibold text-foreground break-words line-clamp-2 leading-snug">
                        {edu.url ? (
                          <a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          edu.institution
                        )}
                      </h3>

                      {edu.year && (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                          {edu.year}
                        </p>
                      )}
                    </div>
                  </div>

                  {showInProgress && (
                    <span className="shrink-0 rounded-full border border-border bg-background/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      In progress
                    </span>
                  )}
                </div>



                {/* Detail */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground leading-6 line-clamp-3 break-words">
                    {edu.detail}
                  </p>
                </div>

                {/* Footer */}
                {(edu.certification || edu.certificationUrl) && (
                  <div className="mt-auto pt-4">
                    {edu.certificationUrl ? (
                      <a
                        href={edu.certificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {edu.certification ?? "View credential"}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-primary break-words">
                        {edu.certification}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Hover/focus outline */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all duration-200 group-hover:ring-1 group-hover:ring-primary/20"
              />
            </article>
          );
        })}
      </div>
    </Section>
  );
};
