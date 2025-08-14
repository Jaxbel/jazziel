// src/components/TechStack.tsx
import type { FC } from "react";
import { Section } from "@/components/Section";
import { Icons } from "@/components/ui/icons";
import { technologies, type TechnologyName } from "@/lib/technologies";

type IconKey = keyof typeof Icons;

type Category = {
  title: string;
  items: TechnologyName[];
};

const CATEGORIES: Category[] = [
  { title: "Backend", items: ["Java", "Spring Boot", "Python", "FastAPI", "Swagger", "TypeScript", "Node.js"] },
  { title: "Frontend", items: ["React", "Remix", "TypeScript", "Tailwind CSS"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Prisma", "Redis"] },
  { title: "DevOps & Tools", items: ["Docker", "Git", "GitLab", "Terraform"] },
  { title: "Mobile & Desktop", items: ["React Native", "Expo", "WebAssembly"] },
  { title: "Testing & Docs", items: ["Vitest", "MDX", "Markdown"] },
];

export const TechStack: FC = () => {
  return (
    <Section id="tech-stack" size="md" className="scroll-mt-24 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-sm text-muted-foreground">
          A snapshot of the tools I work with across the stack.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {CATEGORIES.map((cat) => (
          <article
            key={cat.title}
            className="h-full flex flex-col rounded-2xl border border-border bg-card shadow-sm p-5 sm:p-6 text-left"
          >
            <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>

            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
              {cat.items.map((name) => {
                const tech = technologies.find((t) => t.name === name);
                if (!tech) return null;
                const Icon = Icons[tech.icon as IconKey];
                return (
                  <a
                    key={`${cat.title}-${tech.name}`}
                    href={tech.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-col items-center gap-2"
                    title={tech.name}
                    aria-label={tech.name}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-border bg-background p-3 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <Icon className="w-full h-full" />
                    </div>
                    <span className="text-xs text-muted-foreground text-center leading-tight truncate w-full">
                      {tech.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>

    </Section>
  );
};
