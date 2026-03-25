// src/components/Hero.tsx
import { useState, useCallback, useEffect, useRef } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Section } from "./Section";

const EASTER_EGG_CLICKS = 15;
const CLICK_WINDOW_MS = 2000;
const HAT_VISIBLE_MS = 8000;
const HAT_SRC = "/easter-eggs/strawhatt-1.png";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jaxbel",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path fill="currentColor" d="M12 .5C5.65.5.7 5.44.7 11.79c0 5 3.26 9.23 7.78 10.72.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.17.69-3.84-1.53-3.84-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.11-.75.4-1.25.72-1.54-2.53-.29-5.19-1.26-5.19-5.6 0-1.24.45-2.25 1.18-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 2.87-.39 10.9 10.9 0 0 1 2.87.39c2.18-1.47 3.14-1.16 3.14-1.16.63 1.58.24 2.75.12 3.04.74.79 1.18 1.8 1.18 3.04 0 4.35-2.67 5.3-5.21 5.59.41.36.77 1.09.77 2.2 0 1.59-.02 2.87-.02 3.26 0 .31.21.67.79.56 4.51-1.49 7.77-5.72 7.77-10.71C23.3 5.44 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jazziel-bello/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 15H7v-7h2.5ZM8 9.5A1.25 1.25 0 1 1 8 7a1.25 1.25 0 0 1 0 2.5ZM19 18h-2.5v-3.7c0-.9-.32-1.5-1.12-1.5-.61 0-.97.41-1.13.81-.06.15-.08.35-.08.55V18H11v-7h2.4v1.02A2.39 2.39 0 0 1 15.6 11c1.59 0 3.4.97 3.4 3.62Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jazzieldev@gmail.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v1.2l-10 5.6L2 7.2V6a2 2 0 0 1 2-2Zm0 5.3V18h16V9.3l-7.55 4.23a2 2 0 0 1-1.9 0Z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export const Hero: FC = () => {
  const tapCountRef = useRef(0);
  const [hatOn, setHatOn] = useState(false);
  const clickTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = HAT_SRC;
  }, []);

  const handleTap = useCallback((e: React.MouseEvent) => {
    // Evitar que el click en los botones dispare el easter egg si están dentro
    if ((e.target as HTMLElement).closest('a')) return;

    tapCountRef.current += 1;
    if (!hatOn && tapCountRef.current >= EASTER_EGG_CLICKS) {
      setHatOn(true);
      tapCountRef.current = 0;
    }

    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current);
    clickTimerRef.current = window.setTimeout(() => {
      tapCountRef.current = 0;
    }, CLICK_WINDOW_MS);
  }, [hatOn]);

  useEffect(() => {
    let timer: number;
    if (hatOn) {
      timer = window.setTimeout(() => setHatOn(false), HAT_VISIBLE_MS);
    }
    return () => window.clearTimeout(timer);
  }, [hatOn]);

  return (
    <Section
      id="hero"
      className="relative flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* Background Ornament */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(hsl(var(--muted-foreground)/0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-6 flex flex-col items-center text-center gap-12 sm:gap-16"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-bold text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-balance leading-[0.9]"
          >
            Building products that <span className="text-primary italic font-serif">actually</span> work.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed"
          >
            Hi, I&apos;m <span className="text-foreground font-bold">Jazziel Bello</span>, a Software Engineer dedicated to crafting high-performance systems and exceptional digital experiences.
          </motion.p>
        </div>

        {/* Media & Actions Container */}
        <div className="flex flex-col items-center gap-20 w-full">
          {/* Profile / Avatar */}
          <motion.div
            variants={itemVariants}
            className="relative group cursor-pointer select-none"
            onClick={handleTap}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[40px] overflow-hidden border border-border/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] bg-muted"
            >
              <img
                src="/jazziel.jpg"
                alt="Jazziel Bello"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all" />
            </motion.div>

            <AnimatePresence>
              {hatOn && (
                <motion.img
                  src={HAT_SRC}
                  alt="Straw hat"
                  className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[85%] drop-shadow-2xl z-10 pointer-events-none"
                  initial={{ y: -100, opacity: 0, rotate: -10 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </AnimatePresence>

            {/* Social Links Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 flex gap-6 shadow-2xl border border-white/10 z-20">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-125 active:scale-90"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-foreground px-10 text-sm font-bold text-background shadow-xl hover:bg-foreground/90 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-border bg-background px-10 text-sm font-bold transition-all hover:bg-secondary"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
