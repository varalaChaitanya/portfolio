import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
        level: "Advanced",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        level: "Advanced",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: "Intermediate",
      },
    ],
  },

  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        level: "Intermediate",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#808080",
        level: "Intermediate",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        level: "Advanced",
      },
    ],
  },

  {
    category: "Database",
    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        level: "Intermediate",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        level: "Intermediate",
      },
    ],
  },

  {
    category: "Tools",
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        level: "Intermediate",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        level: "Intermediate",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        level: "Intermediate",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
        level: "Advanced",
      },
    ],
  },
];