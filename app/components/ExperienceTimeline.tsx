import { motion } from "framer-motion";
import Image from "next/image";
import fullstack from '../../public/assets/fullstack.jpg'
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
            className="mb-12 pl-8 relative border-l-4 border-[#43cea2],  dark:border-[#185a9d]"
          >
            <div className="absolute w-4 h-4 bg-[#43cea2] dark:bg-[#185a9d] rounded-full -left-[10px] top-0" />
            
            <div className="flex items-start space-x-4">
              <div className="w-[150px] h-[40px] relative rounded-full overflow-hidden border-2 border-primary dark:border-secondary">
                <Image
                  src={fullstack} // Add company logos
                  alt="Freelencing"
                  width={500}
                  height={500}
                  
                  className="object-contain p-2"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Backend Developer
                </h3>
                <p className="text-lg text-black dark:text-white/80 mb-2">
                  Eduuis techno Solutions pvt Ltd • May 2024 - Feb 2025
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Developed secure APIs to allow parents to monitor and manage child activities.Implemented role-based access control (RBAC) for parents and children with different permissions.</li>
                  <li>Implemented JWT authentication for secure login and sessionmanagement.Managed structured data using MySQL and optimized queries for fast retrieval.</li>
                  <li>Built mechanisms for parents to restrict access to specific apps, websites, or content.Designed APIs to track app usage, screen time, and location history of the child</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 pl-8 relative border-l-4 border-[#43cea2],  dark:border-[#185a9d]"
          >
            <div className="absolute w-4 h-4 bg-[#43cea2] dark:bg-[#185a9d] rounded-full -left-[10px] top-0" />
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary dark:border-secondary">
                <Image
                  src={fullstack} // Add company logos
                  alt="Croptr"
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Backend Developer Intern
                </h3>
                <p className="text-lg text-black dark:text-white/80 mb-2">
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
