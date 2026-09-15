import {
  FaComments,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaChartLine,
  FaSyncAlt,
  FaDatabase,
  FaLaptopCode,
  FaPalette,
  FaRobot,
  FaProjectDiagram,
  FaFileAlt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaTrello,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
} from "react-icons/fa";

import { FaHexagonNodes } from "react-icons/fa6";

import {
  SiMysql,
  SiStreamlit,
  SiLaravel,
  SiPostman,
  SiNotion,
  SiGooglesheets,
  SiGoogledrive,
  SiGoogleforms,
  SiGmail,
  SiGoogledocs,
  SiGooglegemini,
  SiTailwindcss,
  SiNextdotjs,
  SiOllama,
  SiLmstudio
} from "react-icons/si";

import { LuBrainCircuit } from "react-icons/lu";

/*
|--------------------------------------------------------------------------
| Soft Skills
|--------------------------------------------------------------------------
*/

export const softSkills = [
  {
    id: 1,
    name: "Communication",
    icon: FaComments,
  },

  {
    id: 2,
    name: "Teamwork",
    icon: FaUsers,
  },

  {
    id: 3,
    name: "Time Management",
    icon: FaClock,
  },

  {
    id: 4,
    name: "Problem-Solving",
    icon: FaLightbulb,
  },

  {
    id: 5,
    name: "Analytical Thinking",
    icon: FaChartLine,
  },

  {
    id: 6,
    name: "Adaptability",
    icon: FaSyncAlt,
  },
];

/*
|--------------------------------------------------------------------------
| Technical Skills
|--------------------------------------------------------------------------
*/

export const technicalSkills = [
  {
    id: 1,

    title: "Data Analysis & Machine Learning",

    icon: FaDatabase,

    skills: [
      {
        name: "Microsoft Excel",
        icon: FaFileExcel,
      },

      {
        name: "Google Sheets",
        icon: SiGooglesheets,
      },

      {
        name: "Python",
        icon: FaPython,
      },

      {
        name: "SQL",
        icon: SiMysql,
      },

      {
        name: "Streamlit",
        icon: SiStreamlit,
      },
    ],
  },

  {
    id: 2,

    title: "Web Development",

    icon: FaLaptopCode,

    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
      },

      {
        name: "CSS",
        icon: FaCss3Alt,
      },

      {
        name: "JavaScript",
        icon: FaJs,
      },

      {
        name: "React",
        icon: FaReact,
      },

      {
        name: "Next.js",
        icon: SiNextdotjs,
      },

      {
        name: "Node.js",
        icon: FaNodeJs,
      },

      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },

      {
        name: "Laravel",
        icon: SiLaravel,
      },

      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },

  {
    id: 3,

    title: "UI/UX, Design & Presentation",

    icon: FaPalette,

    skills: [
      {
        name: "Figma",
        icon: FaFigma,
      },

      {
        name: "Canva",
        icon: FaPalette,
      },

      {
        name: "Microsoft PowerPoint",
        icon: FaFilePowerpoint,
      },
    ],
  },

  {
    id: 4,

    title: "Artificial Intelligence",

    icon: FaRobot,

    skills: [
      {
        name: "LLM",
        icon: LuBrainCircuit,
      },

      {
        name: "AI Agents",
        icon: FaHexagonNodes,
      },

      {
        name: "Ollama",
        icon: SiOllama,
      },

      {
        name: "LM Studio",
        icon: SiLmstudio,
      },

      {
        name: "Google Antigravity",
        icon: SiGooglegemini,
      },
    ],
  },

  {
    id: 5,

    title: "Project Management & Collaboration",

    icon: FaProjectDiagram,

    skills: [
      {
        name: "GitHub",
        icon: FaGithub,
      },

      {
        name: "Trello",
        icon: FaTrello,
      },

      {
        name: "Notion",
        icon: SiNotion,
      },
    ],
  },

  {
    id: 6,

    title: "Office & Productivity Tools",

    icon: FaFileAlt,

    skills: [
      {
        name: "Microsoft Word",
        icon: FaFileWord,
      },

      {
        name: "Google Docs",
        icon: SiGoogledocs,
      },

      {
        name: "Google Drive",
        icon: SiGoogledrive,
      },

      {
        name: "Google Forms",
        icon: SiGoogleforms,
      },

      {
        name: "Gmail",
        icon: SiGmail,
      },
    ],
  },
];
