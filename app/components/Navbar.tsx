"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
          Shivam
        </Link>

        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
}