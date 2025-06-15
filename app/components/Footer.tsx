"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PROFILE } from "@/data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: `https://${PROFILE.contact.github}`,
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: `https://${PROFILE.contact.linkedin}`,
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${PROFILE.contact.email}`,
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Shivam Raj
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Full Stack Developer passionate about creating innovative solutions 
                  and building exceptional digital experiences.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <a 
                    href={`mailto:${PROFILE.contact.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {PROFILE.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-primary-400">📱</span>
                  <span className="text-gray-300">{PROFILE.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-primary-400">📍</span>
                  <span className="text-gray-300">Delhi, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Shivam Raj. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of ☕</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                <span>Built with Next.js & Tailwind CSS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}