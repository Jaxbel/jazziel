import type { Icon } from "@/components/ui/icons";

export const technologies = [
  {
    name: "Tailwind CSS",
    icon: "TailwindCSS",
    url: "https://tailwindcss.com",
  },
  {
    name: "React",
    icon: "React",
    url: "https://react.dev",
  },
  {
    name: "React Native",
    icon: "ReactNative",
    url: "https://reactnative.dev",
  },
  {
    name: "Node.js",
    icon: "Node",
    url: "https://nodejs.org",
  },
  {
    name: "TypeScript",
    icon: "TypeScript",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Docker",
    icon: "Docker",
    url: "https://www.docker.com",
  },
  {
    name: "PostgreSQL",
    icon: "Postgres",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    icon: "Redis",
    url: "https://redis.io",
  },
  {
    name: "JWT",
    icon: "Jwt",
    url: "https://jwt.io",
  },
  {
    name: "Swagger",
    icon: "Swagger",
    url: "https://swagger.io",
  },
] as const satisfies Technology[];

export interface Technology {
  name: string;
  url: string;
  icon: Icon;
}
export type Technologies = typeof technologies;
export type TechnologyName = Technologies[number]["name"];

type TechnologyMap = {
  [T in TechnologyName]: Extract<Technologies[number], { name: T }>;
};

export function getTechnology<T extends TechnologyName>(name: T) {
  return technologies.find((t) => t.name === name) as TechnologyMap[T];
}
