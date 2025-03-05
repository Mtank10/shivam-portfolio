import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {project.points.map((point: string, i: number) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-primary dark:bg-secondary rounded-full mr-2" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}