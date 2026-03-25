// src/components/NavBar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container px-6 mx-auto">
        <nav className={`glass rounded-3xl transition-all duration-300 flex items-center justify-between px-6 py-3 ${scrolled ? "shadow-lg shadow-primary/5" : ""
          }`}>
          <a href="#" className="group flex items-center gap-2 text-xl font-bold tracking-tighter text-foreground">
            <span className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
              J
            </span>
            <span className="hidden sm:inline">Jazziel</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-50 md:hidden p-8 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-xl transition-colors">
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
