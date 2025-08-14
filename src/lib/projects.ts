import type { TechnologyName } from "@/lib/technologies";

export type Project = {
  name: string;
  description: string;
  url: string;            // demo / live / preview
  actionLabel?: string;   // CTA principal
  repo?: string;          // enlace al repo (opcional)
  tech: TechnologyName[]; // nombres válidos definidos en technologies
  featured?: boolean;
  image?: string;         // thumbnail/cover (opcional)
};

export const projects: Project[] = [
  {
    name: "SEMEFO Dashboard",
    description: "Web system for managing forensic data and generating reports.",
    url: "https://github.com/jaxbel/semefo",
    actionLabel: "Source code",
    tech: ["WebAssembly", "Swagger", "MySQL"],
    featured: true
  },
  {
    name: "Softnode.mx",
    description:
      "Platform for custom software services. Cloud-integrated with admin dashboard.",
    url: "https://softnode.mx",
    actionLabel: "Preview",
    tech: ["MySQL", "React", "TypeScript"],
    featured: false,

  },
  {
    name: "Jaxbel.dev",
    description:
      "My personal portfolio showcasing projects, skills, and blog posts.",
    url: "https://jaxbel.dev",
    actionLabel: "View portfolio",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    featured: true
  }
];
