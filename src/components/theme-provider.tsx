"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

type Props = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
}: Props) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Read saved theme on mount (avoid SSR localStorage access)
  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem(storageKey) as Theme | null)
      : null) || defaultTheme;
    setThemeState(saved);
  }, [defaultTheme, storageKey]);

  // Apply theme to <html> and react to system changes
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (t: Theme) => {
      root.classList.remove("light", "dark");
      if (t === "system") {
        root.classList.add(mq.matches ? "dark" : "light");
      } else {
        root.classList.add(t);
      }
    };

    apply(theme);

    if (theme === "system") {
      const handler = () => apply("system");
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    }
  }, [theme]);

  const value = useMemo<ThemeContextState>(
    () => ({
      theme,
      setTheme: (t: Theme) => {
        setThemeState(t);
        try {
          localStorage.setItem(storageKey, t);
        } catch {}
      },
    }),
    [theme, storageKey]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
