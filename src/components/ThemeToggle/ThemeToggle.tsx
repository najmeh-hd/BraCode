"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="w-10 h-10 rounded-xl bg-border animate-pulse" />;
  }

  const isDark = theme === "dark";

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 200);
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className="relative w-10 h-10 border border-foreground-secondary border-dashed rounded-2xl bg-border overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ease-in"
        aria-label="تغییر تم"
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isDark ? (
              <Sun className="w-6 h-6 fill-yellow-300 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 fill-blue-400 text-blue-200" />
            )}
          </motion.div>
        </div>
      </motion.button>

    </>
  );
}
