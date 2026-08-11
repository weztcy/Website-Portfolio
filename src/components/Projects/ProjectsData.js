import {
  Monitor,
  Database,
  Code2,
  ShoppingCart,
  Gavel,
} from "lucide-react";


export const projects = [
  {
    id: 1,

    images: [
      "/projects/prajagamer.png",
      "/projects/prajagamer-2.png",
      "/projects/prajagamer-3.png",
    ],

    icon: Monitor,

    title: "PRAJAGAMER",

    date: "2025",

    shortDescription:
      "A web-based internship registration platform designed to simplify student registration and administrative processes.",

    detailDescription: [
      "PRAJAGAMER is a web-based internship registration platform developed to simplify the process of managing student internship applications. The platform provides a centralized system where students can submit their internship registration information digitally.",

      "The system is designed to reduce manual administrative processes while helping administrators organize and review internship-related data more efficiently. Its interface focuses on accessibility, responsive design, and a straightforward registration workflow.",

      "This project also provided practical experience in building reusable React components, implementing responsive layouts with Tailwind CSS, and deploying a modern frontend application through Vercel.",
    ],

    technologies: [
      {
        name: "React",
        color:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
      },

      {
        name: "Tailwind CSS",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },

      {
        name: "Vercel",
        color:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300",
      },
    ],
  },


  {
    id: 2,

    images: [
      "/projects/siben.png",
      "/projects/siben-2.png",
    ],

    icon: Code2,

    title: "SIBEN",

    date: "2025",

    shortDescription:
      "A responsive web application for managing internship data, registration information, and administrative workflows.",

    detailDescription: [
      "SIBEN is a web application designed to support internship data management and registration activities through a structured digital interface.",

      "The application helps organize student information and internship-related records while providing users with a responsive and interactive experience. The project emphasizes clear information presentation and efficient navigation between different sections of the system.",
    ],

    technologies: [
      {
        name: "React",
        color:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
      },

      {
        name: "Bootstrap",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },

      {
        name: "JavaScript",
        color:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
      },
    ],
  },


  {
    id: 3,

    images: [
      "/projects/api-bencana.png",
      "/projects/api-bencana-2.png",
      "/projects/api-bencana-3.png",
      "/projects/api-bencana-4.png",
    ],

    icon: Database,

    title: "Disaster Data API",

    date: "2025",

    shortDescription:
      "A REST API service designed to manage and provide structured disaster-related information.",

    detailDescription: [
      "Disaster Data API is a backend-focused project designed to manage and distribute structured disaster-related information through REST API endpoints.",

      "The service implements backend concepts such as routing, request handling, response formatting, and structured data management using Node.js and Express.js.",

      "The API architecture is designed so that disaster information can be consumed by different frontend applications or other services without directly depending on the database implementation.",

      "Through this project, backend development concepts such as endpoint organization, HTTP request methods, API response structures, and separation between application logic and client interfaces were explored.",
    ],

    technologies: [
      {
        name: "Node.js",
        color:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },

      {
        name: "Express.js",
        color:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300",
      },

      {
        name: "API",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },


  {
    id: 4,

    images: [
      "/projects/pustakanesia.png",
    ],

    icon: Monitor,

    title: "Pustakanesia",

    date: "2024",

    shortDescription:
      "A digital library management website for organizing books and improving access to library information.",

    detailDescription: [
      "Pustakanesia is a web-based library management system developed to help organize book collections and improve access to library information.",

      "The application provides features for managing book records and supporting common library administration activities through a centralized digital system.",

      "Laravel is used to manage application logic, while MySQL provides structured storage for library-related data such as books and other supporting information.",
    ],

    technologies: [
      {
        name: "Laravel",
        color:
          "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
      },

      {
        name: "PHP",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
      },

      {
        name: "MySQL",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
    ],
  },


  {
    id: 5,

    images: [
      "/projects/silelo.png",
      "/projects/silelo-2.png",
      "/projects/silelo-3.png",
    ],

    icon: Gavel,

    title: "SiLelo Auction",

    date: "2024",

    shortDescription:
      "An online auction platform with digital payment integration for managing auction transactions.",

    detailDescription: [
      "SiLelo Auction is an online auction platform designed to support digital bidding and transaction management within a web-based environment.",

      "The application provides functionality for managing auction-related information while allowing users to participate in an organized digital auction workflow.",

      "Midtrans payment integration is used to support digital transaction processing, while Laravel handles the application logic and MySQL manages the underlying relational data.",

      "This project provides practical experience in combining web application development with third-party payment services and database-driven transaction workflows.",
    ],

    technologies: [
      {
        name: "Laravel",
        color:
          "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
      },

      {
        name: "Midtrans",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },

      {
        name: "MySQL",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
    ],
  },


  {
    id: 6,

    images: [
      "/projects/grosir.png",
      "/projects/grosir-2.png",
    ],

    icon: ShoppingCart,

    title: "Grosir Sembako",

    date: "2023",

    shortDescription:
      "A desktop application for managing grocery inventory, product data, and sales transactions.",

    detailDescription: [
      "Grosir Sembako is a desktop-based application developed to support inventory and sales management for grocery businesses.",

      "The application helps users organize product information, maintain inventory records, and manage sales-related data through a desktop interface.",
    ],

    technologies: [
      {
        name: "Java",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },

      {
        name: "Database",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
    ],
  },
];