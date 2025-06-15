"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/resume";
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CommandLineIcon, 
  CircleStackIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline";

const skillCategories = [
  {
    icon: <CodeBracketIcon className="w-8 h-8" />,
    title: "Languages",
    items: SKILLS.languages,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: <CpuChipIcon className="w-8 h-8" />,
    title: "Frameworks",
    items: SKILLS.frameworks,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: <CommandLineIcon className="w-8 h-8" />,
    title: "Tools",
    items: SKILLS.tools,
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: <CircleStackIcon className="w-8 h-8" />,
    title: "Databases",
    items: SKILLS.databases,
    gradient: "from-orange-500 to-red-600"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SparklesIcon className="w-8 h-8 text-primary-600" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Technical Skills
            </h2>
            <SparklesIcon className="w-8 h-8 text-secondary-600" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div className="glass p-8 rounded-2xl hover:shadow-glow transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 transition-all duration-300">
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill}
                        </span>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 text-center">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold rounded-full`}>
                    {category.items.length} Skills
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}