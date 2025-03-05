"use client";

import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const professions = [
  "Fullstack Developer",
  "Backend Specialist",
  "Frontend Expert",
  "Software Engineer",
  "Freelance Developer",
];

export default function Header() {
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Shivam Raj
          </h1>
          
          <motion.div
            key={currentProfession}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl text-primary dark:text-secondary mb-8 h-12"
          >
            {professions[currentProfession]}
          </motion.div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Building digital experiences that matter. Passionate about creating
            efficient, scalable solutions with modern technologies.
          </p>

          <motion.a
            href="/ShivamCV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-primary dark:bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}