// src/components/About.tsx
import type { FC } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { LocationCard } from "./LocationCard";
import { experience } from "@/lib/experience";
import { learning } from "@/lib/learning";

export const About: FC = () => (
  <Section id="about" size="sm" className="overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center py-8">
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Passionate about building software that solves real-world problems. 
          I bridge the gap between complex backend logic and intuitive user interfaces.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Top Grid: Bio, Stats & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-4">The Journey So Far</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Hi, I’m <span className="text-foreground font-medium">Jazziel</span>. I’ve spent the last few years deep-diving into the world of software engineering, driven by a curiosity for how things work under the hood. 
                </p>
                <p>
                  What started as a fascination with automation has evolved into a career building robust backend systems, sleek frontend interfaces, and integrating cutting-edge AI technologies into practical products.
                </p>
                <p>
                  I believe that <span className="text-primary italic">clean code is a love letter to your future self</span>. My approach is always centered on scalability, security, and exceptional user experience.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-6 rounded-3xl text-center"
              >
                <span className="block text-3xl font-bold mb-1">10+</span>
                <span className="text-sm text-muted-foreground">Projects Delivered</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass p-6 rounded-3xl text-center"
              >
                <span className="block text-3xl font-bold mb-1">1200+</span>
                <span className="text-sm text-muted-foreground">Coding Hours</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/50 h-[180px]"
            >
              <LocationCard />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl lg:h-full flex flex-col"
          >
            <h3 className="text-xl font-bold mb-8">Experience</h3>
            <div className="flex-1 flex flex-col justify-around relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border/50">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 py-4">
                  <div className="absolute left-0 top-[5px] w-[24px] h-[24px] rounded-full border-4 border-background bg-primary shadow-sm z-10" />
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="font-bold text-foreground text-sm sm:text-base leading-none">{item.role}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      item.period.toLowerCase().includes('present') 
                        ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' 
                        : 'text-muted-foreground bg-secondary/50'
                    }`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-primary mb-3 leading-none">{item.company}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {item.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-[9px] font-bold text-foreground/70 bg-background/50 border border-border/50 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Learning (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-3xl"
        >
          <h3 className="text-xl font-bold mb-4">Currently Mastering</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learning.map((item, index) => (
              <div key={index} className="space-y-3 p-4 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-bold text-foreground leading-tight text-sm">{item.title}</h4>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                    item.status === 'in-progress' ? 'bg-emerald-400/10 text-emerald-400' : 
                    item.status === 'planned' ? 'bg-amber-400/10 text-amber-400' : 
                    'bg-blue-400/10 text-blue-400'
                  }`}>
                    {item.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-[10px] text-primary/80 font-semibold">{item.provider}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="text-[8px] font-bold text-foreground/60 bg-background/30 border border-border/30 px-1 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);
