// src/components/FeaturedProjects.tsx
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Icons } from "@/components/ui/icons";
import { projects } from "@/lib/projects";
import { getTechnology, type TechnologyName } from "@/lib/technologies";

type IconKey = keyof typeof Icons;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

export const FeaturedProjects: FC = () => (
  <Section id="projects" className="scroll-mt-24">
    <div className="container px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects where I solved complex problems and delivered tangible impact.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={itemVariants}
            className="group glass rounded-[32px] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 border border-white/10"
          >
            {/* Project Image Placeholder / Visual */}
            <div className="h-48 bg-muted relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110">
                  <Icons.Folder className="w-24 h-24 text-muted-foreground/30 group-hover:text-primary/20 transition-colors" />
               </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tName) => {
                  const t = getTechnology(tName as TechnologyName);
                  if (!t) return null;
                  const Icon = Icons[t.icon as IconKey];
                  return (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-[10px] font-bold tracking-wider uppercase border border-border/50"
                    >
                      <Icon className="w-3 h-3" />
                      {t.name}
                    </span>
                  );
                })}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                >
                  {project.actionLabel ?? "View Project"}
                  <Icons.ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-y-[-2px] group-hover/link:translate-x-[2px]" />
                </a>
                
                {project.repo && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground"
                    title="Source Code"
                  >
                    <Icons.GitHub className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-2xl border-2 border-border px-10 text-sm font-bold transition-all hover:bg-foreground hover:text-background hover:border-foreground"
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </div>
  </Section>
);
