import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-background text-foreground shadow-md transition-colors">
        <a href="#inicio" className="text-2xl font-bold">
          {"{}"}
        </a>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <ModeToggle />

          {/* Menú hamburguesa */}
          <div
            className="space-y-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-foreground" />
            <div className="w-6 h-0.5 bg-foreground" />
          </div>

          
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-background text-foreground z-40 flex flex-col items-center justify-center gap-8 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {["Inicio", "Proyectos", "Servicios", "Contacto"].map((name) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
