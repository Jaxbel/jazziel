// src/components/Hero.tsx
import React, { useState, useCallback, useEffect, useRef } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";

const EASTER_EGG_CLICKS = 15;
const CLICK_WINDOW_MS = 2000;
const HAT_VISIBLE_MS = 8000;
const HAT_SRC = "/easter-eggs/strawhatt-1.png"; // usa el que tengas

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jaxbel",
    ariaLabel: "GitHub profile",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors"
      >
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.7 5.44.7 11.79c0 5 3.26 9.23 7.78 10.72.57.1.78-.25.78-.56
             0-.28-.01-1.02-.02-2-3.17.69-3.84-1.53-3.84-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7
             1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.11-.75.4-1.25.72-1.54-2.53-.29-5.19-1.26-5.19-5.6
             0-1.24.45-2.25 1.18-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 2.87-.39
             10.9 10.9 0 0 1 2.87.39c2.18-1.47 3.14-1.16 3.14-1.16.63 1.58.24 2.75.12 3.04.74.79 1.18 1.8 1.18 3.04
             0 4.35-2.67 5.3-5.21 5.59.41.36.77 1.09.77 2.2 0 1.59-.02 2.87-.02 3.26 0 .31.21.67.79.56
             4.51-1.49 7.77-5.72 7.77-10.71C23.3 5.44 18.35.5 12 .5Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jazziel-bello/",
    ariaLabel: "LinkedIn profile",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors"
      >
        <path
          fill="currentColor"
          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 15H7v-7h2.5ZM8 9.5A1.25 1.25 0 1 1 8 7a1.25 1.25 0 0 1 0 2.5ZM19 18h-2.5v-3.7c0-.9-.32-1.5-1.12-1.5-.61 0-.97.41-1.13.81-.06.15-.08.35-.08.55V18H11v-7h2.4v1.02A2.39 2.39 0 0 1 15.6 11c1.59 0 3.4.97 3.4 3.62Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jazzieldev@gmail.com",
    ariaLabel: "Send email",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors"
      >
        <path
          fill="currentColor"
          d="M4 4h16a2 2 0 0 1 2 2v1.2l-10 5.6L2 7.2V6a2 2 0 0 1 2-2Zm0 5.3V18h16V9.3l-7.55 4.23a2 2 0 0 1-1.9 0Z"
        />
      </svg>
    ),
  },
];

const socialContainer = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const socialItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: FC = () => {
  const [tapCount, setTapCount] = useState(0);
  const [hatOn, setHatOn] = useState(false);
  const [hatKey, setHatKey] = useState(0);
  const clickTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  // Preload del sombrero
  useEffect(() => {
    const img = new Image();
    img.src = HAT_SRC;
  }, []);

  const resetClickTimer = useCallback(() => {
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current);
    clickTimerRef.current = window.setTimeout(() => setTapCount(0), CLICK_WINDOW_MS);
  }, []);

  const handleTap = useCallback(() => {
    setTapCount((prev) => {
      const next = prev + 1;
      if (!hatOn && next >= EASTER_EGG_CLICKS) {
        setHatOn(true);
        setHatKey((k) => k + 1);
        return 0; // reinicia después de activar
      }
      return next;
    });
    resetClickTimer();
  }, [hatOn, resetClickTimer]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTap();
    }
  };

  // Auto-ocultar sombrero después de un tiempo
  useEffect(() => {
    if (hatOn) {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => setHatOn(false), HAT_VISIBLE_MS);
    }
    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [hatOn]);

  // Limpieza de timers
  useEffect(() => {
    return () => {
      if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <Section
      id="hero"
      size="sm"
      className="min-h-[90vh] md:min-h-screen scroll-mt-24 flex flex-col items-center justify-center text-center gap-6 px-6 bg-background text-foreground"
    >
      <span className="text-sm uppercase tracking-wider text-muted-foreground">
        Software Engineer
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
        Hi, I&apos;m <span className="text-primary">Jazziel Bello</span>
      </h1>

      <p className="max-w-prose text-sm sm:text-base leading-6 text-muted-foreground">
        Backend-focused developer with a love for clean code, security, and building smart
        systems. I craft APIs, dashboards, and automation tools with tech that scale.
      </p>

      {/* Avatar + Easter Egg */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Profile picture — click 15 times for a surprise"
        title="Click me 15 times…"
        onClick={handleTap}
        onKeyDown={handleKeyDown}
        className="relative select-none mx-auto w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
      >
        <img
          src="/jazziel.jpg"
          alt="Jazziel Bello"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl object-cover shadow-xl mx-auto my-6 border border-border bg-card"
          loading="lazy"
          draggable={false}
        />

        <AnimatePresence>
          {hatOn && (
            <motion.img
              key={hatKey}
              src={HAT_SRC}
              alt="Straw hat"
              className={[
                "absolute left-1/2 -translate-x-1/2 pointer-events-none",
                "w-[84%] sm:w-[82%] md:w-[80%] lg:w-[78%]",
                "-top-[10%] sm:-top-[9%] md:-top-[8%] lg:-top-[7%]",
                "drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]",
              ].join(" ")}
              initial={{ y: -160, rotate: 0, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
              exit={{ y: -120, opacity: 0 }}
              transition={{ type: "spring", stiffness: 600, damping: 24, mass: 0.9 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Social links */}
      <motion.div
        className="mt-2 flex items-center justify-center gap-3 sm:gap-4"
        variants={socialContainer}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.ariaLabel}
            variants={socialItem}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/60 backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-primary/5"
          >
            <span className="sr-only">{link.label}</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
};
