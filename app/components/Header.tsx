"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";


const roles = ["Frontend Developer", "Fullstack Developer", "Backend Developer", "Freelancer"];

export default function Header() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      style={{ 
        background: 'linear-gradient(135deg, #43cea2, #185a9d)',
        color: '#ffffff'
      }}
      className="pt-32 pb-20 dark:bg-gradient-to-br dark:from-#141e30 dark:to-#243b55"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Shivam Raj</h1>
          
          <motion.div
            key={currentRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl mb-8 h-12 text-gray-200"
          >
            {roles[currentRole]}
          </motion.div>

          <p className="text-xl mb-12 text-gray-200">
          Building digital experiences that matter. Passionate about creating
          efficient, scalable solutions with modern technologies.
            Crafting digital experiences with modern web technologies
          </p>

          <motion.a
            href="https://drive.google.com/file/d/12UY8eVAOqP1hlnvIMsUZ3laMM_opAF_9/view?usp=sharing"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white/20 px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowDownTrayIcon className="w-6 h-6 mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}