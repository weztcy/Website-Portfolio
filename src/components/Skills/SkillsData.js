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
  SiClaude,

  SiTailwindcss,

} from "react-icons/si";



import { 
  BsOpenai
} from "react-icons/bs";



import {
  GiBananaPeeled
} from "react-icons/gi";

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

    title: "Prompt Engineering & Generative AI",

    icon: FaRobot,


    skills: [

      {
        name: "ChatGPT",
        icon: BsOpenai,
      },


      {
        name: "Claude",
        icon: SiClaude,
      },


      {
        name: "Google Gemini",
        icon: SiGooglegemini,
      },


      {
        name: "DALL-E",
        icon: BsOpenai,
      },


      {
        name: "Nano Banana",
        icon: GiBananaPeeled,
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