// src/components/TechStack.tsx
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Icons } from "@/components/ui/icons";
import { technologies, type TechnologyName } from "@/lib/technologies";

type IconKey = keyof typeof Icons;

type Category = {
  title: string;
  items: TechnologyName[];
};

const CATEGORIES: Category[] = [
  { title: "Backend", items: ["Java", "Spring Boot", "Python", "FastAPI", "TypeScript", "Node.js"] },
  { title: "Frontend", items: ["React", "Remix", "TypeScript", "Tailwind CSS"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Prisma", "Redis"] },
  { title: "DevOps & Tools", items: ["Docker", "Git", "GitLab", "Terraform"] },
  { title: "Mobile & Desktop", items: ["React Native", "Expo", "WebAssembly"] },
  { title: "Testing & Docs", items: ["Vitest", "MDX", "Markdown"] },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

export const TechStack: FC = () => {
  return (
    <Section id="tech-stack" className="scroll-mt-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build modern software.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CATEGORIES.map((cat) => (
            <motion.article
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[32px] flex flex-col transition-shadow hover:shadow-2xl hover:shadow-primary/5 group"
            >
              <h3 className="text-lg font-bold mb-8 flex items-center justify-between">
                {cat.title}
                <span className="text-[10px] font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full uppercase tracking-widest">
                  {cat.items.length}
                </span>
              </h3>

              <div className="grid grid-cols-4 gap-4">
                {cat.items.map((name) => {
                  const tech = technologies.find((t) => t.name === name);
                  if (!tech) return null;
                  const Icon = Icons[tech.icon as IconKey];
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.15 }}
                      className="group/tech relative flex flex-col items-center gap-2"
                      title={tech.name}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-background/50 border border-border flex items-center justify-center p-3 transition-all group-hover/tech:bg-primary/10 group-hover/tech:border-primary/20 shadow-sm">
                        <Icon className="w-full h-full text-muted-foreground group-hover/tech:text-primary transition-colors" />
                      </div>
                      <span className="text-[9px] font-bold text-muted-foreground group-hover/tech:text-foreground transition-colors truncate w-full text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
