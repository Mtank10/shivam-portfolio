import chat from '../public/assets/chat.jpg'
import kanban from '../public/assets/kanban.jpg'
export const PROFILE = {
    name: "Shivam Raj",
  summary: "Hardworking and passionate software developer with strong organizational skills eager to secure software developer position. Ready to help team achieve company goals.",
  contact: {
    phone: "+91 8800804205",
    email: "rajshivam691@gmail.com",
    linkedin: "linkedin.com/in/shivamraj10/",
    github: "github.com/Mtank10"
  }
}

export const EXPERIENCE = [
    {
      company: "Croptr Technology Pvt Ltd",
      role: "Backend Developer Intern",
      duration: "Sept 2023 – Feb 2024",
      points: [
        "Developed and maintained backend APIs using NodeJS and ExpressJS",
        "Worked with MongoDB and MySQL databases",
        "Implemented Git version control and Agile methodologies",
        "Conducted code reviews and wrote unit tests"
      ]
    },
    {
      company: "Freelancing",
      role: "Full Stack Developer",
      duration: "May 2024 – Present",
      points: [
        "Integrated third-party APIs to enhance application functionality",
        "Designed and implemented responsive web applications",
        "Developed and managed databases using NodeJS, ORM and SQL/No-SQL"
      ]
    }
  ];

  export const PROJECTS = [
    {
      title: "Scalable Chat-App",
      tech: ["Node.js", "Next.js", "Redis", "Kafka", "PostgreSQL"],
      points: [
        "Real-time messaging using Redis Pub/Sub",
        "Authentication with JWT",
        "Apache Kafka for message throughput",
        "Multi-server communication handling"
      ],
      githubUrl: "https://github.com/Mtank10",
      image:chat
    },
    {
      title: "Kanban Board",
      tech: ["React", "JavaScript", "CSS"],
      points: [
        "Drag-and-drop functionality",
        "Progress tracking with status updates",
        "Interactive UI with color coding",
        "Board management features"
      ],
      githubUrl: "https://kanban-board-eta-ten.vercel.app/",
      image:kanban
    }
  ];
  
  export const SKILLS = {
    languages: ["JavaScript", "Java", "TypeScript"],
    frameworks: ["Node.js", "React", "Next.js", "Redis"],
    tools: ["Git", "GitHub", "VS Code", "Linux"],
    databases: ["MySQL", "MongoDB", "Prisma ORM"]
  };
