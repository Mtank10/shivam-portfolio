"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import fullstack from '../../public/assets/fullstack.jpg';

const experiences = [
  {
    company: "Eduuis Techno Solutions Pvt Ltd",
    role: "Backend Developer",
    duration: "May 2024 - Feb 2025",
    type: "Full-time",
    location: "Remote",
    description: "Led backend development for parental control applications with advanced security features.",
    achievements: [
      "Developed secure APIs for parent-child activity monitoring with JWT authentication",
      "Implemented role-based access control (RBAC) with different permission levels",
      "Built app restriction mechanisms and usage tracking systems",
      "Optimized MySQL queries for fast data retrieval and improved performance",
      "Designed location tracking and screen time monitoring APIs"
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    image: fullstack
  },
  {
    company: "Croptr Technology",
    role: "Backend Developer Intern",
    duration: "Sept 2023 – Feb 2024",
    type: "Internship",
    location: "Hybrid",
    description: "Gained hands-on experience in full-stack development and modern web technologies.",
    achievements: [
      "Developed and maintained backend APIs using Node.js and Express.js",
      "Worked with both MongoDB and MySQL databases for different project requirements",
      "Implemented Git version control and followed Agile development methodologies",
      "Conducted thorough code reviews and wrote comprehensive unit tests",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "Git"],
    image: fullstack
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600 rounded-full"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className={`relative mb-16 ${
                index % 2 === 0 
                  ? 'md:ml-8 md:pl-16' 
                  : 'md:mr-8 md:pr-16 md:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full shadow-glow ${
                index % 2 === 0 
                  ? 'left-5 md:left-auto md:-right-3' 
                  : 'left-5 md:right-auto md:-left-3'
              } top-8 z-10`}>
                <div className="absolute inset-1 bg-white dark:bg-dark-900 rounded-full"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
              </div>

              {/* Experience Card */}
              <div className="ml-16 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass p-8 rounded-2xl hover:shadow-glow transition-all duration-500"
                >
                  {/* Header */}
                  <div className={`flex items-start space-x-6 mb-6 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                  }`}>
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gradient-to-r from-primary-600 to-secondary-600 flex-shrink-0">
                      <Image
                        src={experience.image}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                        <BuildingOfficeIcon className="w-5 h-5" />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                          {experience.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.3) + (achievementIndex * 0.1) }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.05) }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}