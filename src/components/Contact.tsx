// src/components/Contact.tsx
import type { FC } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Icons } from "./ui/icons";

export const Contact: FC = () => (
  <Section id="contact" className="relative py-24 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight text-balance">
          Let’s build the <span className="text-primary italic">next</span> great thing together.
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:jazzieldev@gmail.com"
            className="group relative inline-flex h-14 items-center justify-center rounded-2xl bg-foreground px-10 text-sm font-bold text-background transition-all hover:bg-foreground/90 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icons.ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              Send a Message
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://linkedin.com/in/jazziel-bello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-border px-10 text-sm font-bold transition-all hover:bg-secondary hover:border-secondary"
          >
            Connect on LinkedIn
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Jazziel Bello. Built with passion.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#tech-stack" className="hover:text-primary transition-colors">Stack</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);
