"use client"
import Navbar from './components/Navbar'
import Header from "./components/Header";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCard from "./components/ProjectCard";
import { PROFILE, PROJECTS, SKILLS } from "@/data/resume";
import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, CommandLineIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Header />

      {/* Skills Section */}
      <section id="skills" className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory 
              icon={<CodeBracketIcon className="w-8 h-8" />} 
              title="Languages" 
              items={SKILLS.languages} 
            />
            <SkillCategory
              icon={<CpuChipIcon className="w-8 h-8" />}
              title="Frameworks"
              items={SKILLS.frameworks}
            />
            <SkillCategory
              icon={<CommandLineIcon className="w-8 h-8" />}
              title="Tools"
              items={SKILLS.tools}
            />
            <SkillCategory
              icon={<CircleStackIcon className="w-8 h-8" />}
              title="Databases"
              items={SKILLS.databases}
            />
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#06b6d4]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${PROFILE.contact.email}`} className="bg-[#06b6d4] text-white px-6 py-3 rounded-lg hover:bg-[#06b6d4]/90 transition">
              Send Email
            </a>
            <a href={`https://${PROFILE.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

function SkillCategory({ icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <span className="text-[#06b6d4]">{icon}</span>
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}