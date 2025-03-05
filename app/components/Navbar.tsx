"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav 
      style={{ 
        background: theme === 'dark' 
          ? 'linear-gradient(45deg, #141e30, #243b55)'
          : 'linear-gradient(45deg, #43cea2, #185a9d)'
      }}
      className="fixed w-full top-0 z-50 text-white shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Shivam Raj
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {['home', 'projects', 'experience','skills','contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="hover:text-gray-200 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-inherit md:hidden bg-white/10"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {['home', 'projects', 'experience','skills','contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mt-4"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}