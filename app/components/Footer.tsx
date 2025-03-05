"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative py-12"
      style={{
        background: 'linear-gradient(45deg, #141e30, #243b55)',
        color: '#ffffff'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4">Shivam Raj</h3>
            <p className="text-gray-300">Building digital experiences with passion</p>
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://github.com/Mtank10" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#43cea2] transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shivamraj10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#43cea2] transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="mailto:rajshivam691@gmail.com"
                className="flex items-center gap-2 hover:text-[#43cea2] transition-colors"
              >
                <MailIcon size={20} />
                Email
              </a>
            </div>
          </div>

          <div className="text-gray-300">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>+91 8800804205</p>
            <p>Delhi, India</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Shivam Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}