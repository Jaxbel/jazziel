// src/components/Hero.tsx
import React, { useState, useCallback, useEffect, useRef } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";

const EASTER_EGG_CLICKS = 15;
const CLICK_WINDOW_MS = 2000;
const HAT_VISIBLE_MS = 8000;
const HAT_SRC = "/easter-eggs/strawhatt.png"; // usa el que tengas

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
                "-top-[14%] sm:-top-[13%] md:-top-[12%] lg:-top-[11%]",
              ].join(" ")}
              initial={{ y: -160, rotate: 0, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
              exit={{ y: -120, opacity: 0 }}
              transition={{ type: "spring", stiffness: 600, damping: 24, mass: 0.9 }}
            />
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};
