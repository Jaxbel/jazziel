// src/components/FeatureEducation.tsx
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Icons } from "@/components/ui/icons";
import { education as educationData } from "@/lib/education";
import type { EdcucationItem } from "@/lib/education";

const isInProgress = (text?: string) =>
  (text ?? "").toLowerCase().includes("in progress") ||
  (text ?? "").toLowerCase().includes("en curso");

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

export const FeaturedEducation: FC = () => {
  const list: EdcucationItem[] = Array.isArray(educationData) ? educationData : [];

  return (
    <Section id="education" className="scroll-mt-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            My academic foundation and continuous learning journey in the field of technology.
          </p>
        </motion.div>

        {list.length === 0 ? (
          <div className="glass p-8 rounded-[32px] text-center text-muted-foreground">
            No education items recorded yet.
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {list.map((edu) => {
              const showInProgress = isInProgress(edu.detail) || isInProgress(edu.year);

              return (
                <motion.article
                  key={`${edu.institution}-${edu.detail}`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative glass p-8 rounded-[32px] flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border flex items-center justify-center p-2.5 overflow-hidden shrink-0 shadow-sm group-hover:border-primary/20 transition-all">
                      {edu.image ? (
                        <img src={edu.image} alt={edu.institution} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <Icons.GraduationCap className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    {showInProgress && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/20 shadow-[0_0_12px_rgba(52,211,153,0.1)]"
                      >
                        In Progress
                      </motion.span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-tighter">
                      {edu.year}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed italic text-balance">
                      {edu.detail}
                    </p>
                  </div>

                  {(edu.certification || edu.certificationUrl) && (
                    <div className="mt-8 pt-6 border-t border-border/10">
                      {edu.certificationUrl ? (
                        <a
                          href={edu.certificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-all group/cred"
                        >
                          {edu.certification ?? "View Credential"}
                          <Icons.ExternalLink className="w-4 h-4 transition-transform group-hover/cred:translate-y-[-2px] group-hover/cred:translate-x-[2px]" />
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-primary">
                          {edu.certification}
                        </span>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>
    </Section>
  );
};
