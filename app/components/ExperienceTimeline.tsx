import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Professional Journey
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 pl-8 relative border-l-4 border-primary dark:border-secondary"
          >
            <div className="absolute w-4 h-4 bg-primary dark:bg-secondary rounded-full -left-[10px] top-0" />
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary dark:border-secondary">
                <Image
                  src="/croptr-logo.png" // Add company logos
                  alt="Croptr"
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Backend Developer Intern
                </h3>
                <p className="text-lg text-primary dark:text-secondary mb-2">
                  Croptr Technology • Sept 2023 – Feb 2024
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Developed and maintained backend APIs using Node.js</li>
                  <li>Implemented database solutions with MongoDB and MySQL</li>
                  <li>Conducted code reviews and wrote unit tests</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Add more timeline items similarly */}
        </div>
      </div>
    </section>
  );
}