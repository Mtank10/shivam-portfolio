import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden shadow-xl"
      style={{
        background: 'linear-gradient(145deg, #43cea280, #185a9d80)',
        color: '#ffffff'
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full bg-white/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {project.points.map((point: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}