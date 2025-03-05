"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setActiveSection(id || "");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-4"
        >
          <Link href="/" className="text-2xl font-bold text-primary dark:text-secondary">
            Shivam
          </Link>
        </motion.div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {["home", "projects", "experience", "skills","contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === section
                    ? "text-primary dark:text-secondary font-semibold"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-secondary"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-primary/10 dark:bg-secondary/10 hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6 text-primary dark:text-secondary" />
            ) : (
              <MoonIcon className="w-6 h-6 text-primary dark:text-secondary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}