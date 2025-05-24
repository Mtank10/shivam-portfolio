import chat from '../public/assets/chat.jpg'
import kanban from '../public/assets/kanban.jpg'
import care from '../public/assets/care.jpg'
import blog from '../public/assets/blog.png'
import recipehub from '../public/assets/recipehub.png'
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
      company: "Eduuis Techno Solutions Pvt Ltd",
      role: "Backend Developer",
      duration: "May 2024 – Jan 2025",
      points: [
        "Developed secure APIs to allow parents to monitor and manage child activities.",
        "Implemented role-based access control(RBAC) for parents and chidren with different permissions.",
        "Implemented JWT authentication for secure login and session.",
        "Managed structured data using MYSQL and optimized queries for fast retrieval.",
        "build mechanisums for parents to restrict-access to specific apps,websites or content.",
        "Designed APIs to track app usage, screen time,and location history of the child."
      ]
    }
  ];

  export const PROJECTS = [
    {
      title:"RecipeHub",
      tech:["Node","Express","Graphql","React","Tailwind css","Javascript","Prisma Orm","postgres"],
      points:[
        "Developed a full-stack recipe application using Node.js, Express, and GraphQL",
        "Implemented user authentication and authorization using JWT",
        "Designed and developed the frontend using React and Tailwind CSS",
        "Integrated Prisma ORM for database management with PostgreSQL",
        "Implemented features for users to create, edit, and delete recipes",
        "Deployed the application on Vercel for production"
      ],
      githubUrl:"https://recipehub-rosy.vercel.app",
      image:recipehub
    },
    {
      title:"Blog Fever",
      tech:["Next Js","CSS","GitHub","MongoDB"],
      points:[
        "Developed a blog website using Next.js",
        "Implemented user authentication with GitHub OAuth",
        "Usr can create, edit, and delete posts",
        "Integrated MongoDB for data storage",
        "Designed and developed the frontend using React"
      ],
      githubUrl:"https://blog-fever.vercel.app/",
      image:blog
    },
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
    },
    {
      title:"Care Connect",
      tech:["React","Javascript","CSS","Node.js","Express.js","MongoDB"],
      points:[
        "Implemented JWT token-based authentication for secure access",
        "Designed and developed the frontend using React",
        "Developed the backend using Node.js and Express.js",
        "Admin Panel: Manage users, doctors, and appointments efficiently",
        "Patients can book, reschedule, or cancel appointments"
      ],
      githubUrl:"https://care-connect-rust.vercel.app/",
      image:care
    }
  ];
  
  export const SKILLS = {
    languages: ["JavaScript", "Java", "TypeScript"],
    frameworks: ["Node.js", "React", "Next.js", "Redis"],
    tools: ["Git", "GitHub", "VS Code", "Linux"],
    databases: ["MySQL", "MongoDB", "Prisma ORM"]
  };
