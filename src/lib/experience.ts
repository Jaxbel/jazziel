// src/lib/experience.ts

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  project?: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "ITJuana",
    location: "Tijuana",
    period: "Apr 2025 – Present",
    project: "Kernel / Platform Support",
    description: "Modernizing CI/CD infrastructure and core platform libraries to standardize engineering practices and enhance developer productivity.",
    bulletPoints: [
      "Refactored legacy systems into modern shared libraries used across multiple teams.",
      "Optimized CI/CD pipelines using GitLab/GitHub and Terraform for seamless delivery.",
      "Collaborated on core architectural standards to reduce technical debt and improve scalability."
    ],
    technologies: ["Java", "Spring Boot", "Maven", "GitLab", "Terraform", "Postgres", "Docker"]
  },
  {
    role: "Python Developer",
    company: "Tri Source International",
    location: "Tijuana",
    period: "Jul 2024 – Feb 2025",
    project: "AI Solutions Development",
    description: "Engineered scalable AI applications and virtual assistants, focusing on LLM integration and workflow automation.",
    bulletPoints: [
      "Developed intelligent solutions leveraging LLMs (OpenAI) and Python to optimize workflows.",
      "Built automation tools that significantly improved operational efficiency and task execution.",
      "Integrated advanced voice processing into AI-driven virtual assistant platforms."
    ],
    technologies: ["Python", "LLMs", "FastAPI", "OpenAI", "Git"]
  }
];
