import type { Icon } from "@/components/ui/icons";

export interface Technology {
  name: string;
  url: string;
  icon: Icon;
}

export const technologies = [
  // Backend
  { name: "Java", icon: "Java", url: "https://www.java.com" },
  { name: "Spring Boot", icon: "SpringBoot", url: "https://spring.io/projects/spring-boot" },
  { name: "Python", icon: "Python", url: "https://www.python.org" },
  { name: "FastAPI", icon: "FastApi", url: "https://fastapi.tiangolo.com" },
  { name: "Swagger", icon: "Swagger", url: "https://swagger.io" },
  { name: "TypeScript", icon: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "Node.js", icon: "Node", url: "https://nodejs.org" },

  // Frontend
  { name: "React", icon: "React", url: "https://react.dev" },
  { name: "Remix", icon: "Remix", url: "https://remix.run" },
  { name: "Tailwind CSS", icon: "TailwindCSS", url: "https://tailwindcss.com" },

  // Data
  { name: "PostgreSQL", icon: "Postgres", url: "https://www.postgresql.org" },
  { name: "MySQL", icon: "MySQL", url: "https://www.mysql.com" },
  { name: "Prisma", icon: "Prisma", url: "https://www.prisma.io" },
  { name: "Redis", icon: "Redis", url: "https://redis.io" },

  // DevOps & Tools
  { name: "Docker", icon: "Docker", url: "https://www.docker.com" },
  { name: "Git", icon: "Git", url: "https://git-scm.com" },
  { name: "GitLab", icon: "GitLab", url: "https://gitlab.com" },
  { name: "Terraform", icon: "Terraform", url: "https://www.terraform.io" },

  // Mobile & Desktop
  { name: "React Native", icon: "ReactNative", url: "https://reactnative.dev" },
  { name: "Expo", icon: "Expo", url: "https://expo.dev" },
  { name: "WebAssembly", icon: "WebAssembly", url: "https://webassembly.org" },

  // Testing & Docs
  { name: "Vitest", icon: "Vitest", url: "https://vitest.dev" },
  { name: "MDX", icon: "Mdx", url: "https://mdxjs.com" },
  { name: "Markdown", icon: "Md", url: "https://daringfireball.net/projects/markdown" },

  // Extra
  { name: "JWT", icon: "Jwt", url: "https://jwt.io" },
] as const satisfies Technology[];

export type Technologies = typeof technologies;
export type TechnologyName = Technologies[number]["name"];

type TechnologyMap = {
  [T in TechnologyName]: Extract<Technologies[number], { name: T }>;
};

export function getTechnology<T extends TechnologyName>(name: T) {
  return technologies.find((t) => t.name === name) as TechnologyMap[T];
}
