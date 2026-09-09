import {
  BrainCircuit,
  Monitor,
  Palette,
  Database,
  Smartphone,
  ServerCog,
  FileCodeCorner,
} from "lucide-react";

// ==============================
// PROJECT IMAGES
// ==============================

import foodRecipeUiUx from "../../assets/projects/food-recipe-ui-ux.png";

import eParkingUiUx from "../../assets/projects/e-parking-ui-ux.png";

import aorusGamingUiUx from "../../assets/projects/aorus-gaming-ui-ux.png";

import aorusGamingShop from "../../assets/projects/aorus-gaming-shop.png";

import rasaNusantara from "../../assets/projects/rasa-nusantara.png";

import calgeo from "../../assets/projects/calgeo.png";

import personalDataManager from "../../assets/projects/personal-data-manager.png";

import numora from "../../assets/projects/numora.png";

import wholesaleGroceries from "../../assets/projects/wholesale-groceries.png";

import carWorkshopInventory from "../../assets/projects/car-workshop-inventory.png";

import pustakanesia from "../../assets/projects/pustakanesia.png";

import hotelSentimentAnalysis from "../../assets/projects/hotel-sentiment-analysis.png";

import sileloAuction from "../../assets/projects/silelo-auction.png";

import kipEligibilityPrediction from "../../assets/projects/kip-eligibility-prediction.png";

import centerOfMassCalculator1 from "../../assets/projects/center-of-mass-calculator1.png";
import centerOfMassCalculator2 from "../../assets/projects/center-of-mass-calculator2.png";

import disasterDataApi from "../../assets/projects/disaster-data-api.png";

import sibenWebsite from "../../assets/projects/siben-website.png";

import prajagamerUiUx from "../../assets/projects/prajagamer-ui-ux.png";

import prajagamerApi from "../../assets/projects/prajagamer-api.png";

import prajagamerWebsite from "../../assets/projects/prajagamer-website.png";

import bpbdKebumen from "../../assets/projects/bpbd-kebumen.png";

// import poliklinikUdinus from "../../assets/projects/poliklinik-udinus.png";

// import diabetesClassification from "../../assets/projects/diabetes-classification.png";

export const projects = [
  {
    id: 1,

    images: [foodRecipeUiUx],

    icon: Palette,

    title: "UI/UX Design for Food Recipe Application",

    date: "September 2021",

    shortDescription:
      "A mobile food recipe UI/UX design focused on presenting ingredients and cooking instructions through a clean, intuitive, and engaging interface.",

    detailDescription: [
      "Designed the UI/UX for a mobile Food Recipe application using Figma, focusing on presenting recipes with a clean and intuitive interface.",

      "Created wireframes, mockups, and interactive prototypes, including ingredient lists, cooking steps, and illustrations for each recipe, allowing users to easily navigate and enjoy a fun cooking experience.",
    ],

    technologies: [
      {
        name: "Figma",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "UI Design",
        color:
          "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
      },
      {
        name: "UX Design",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
      },
      {
        name: "Prototyping",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

  {
    id: 2,

    images: [eParkingUiUx],

    icon: Palette,

    title: "UI/UX Design for E-Parking Application",

    date: "October 2021",

    shortDescription:
      "A UI/UX design concept for an online parking application that enables users to search, book, and pay for parking spaces efficiently.",

    detailDescription: [
      "Designed the UI/UX for an E-Parking application using Figma, focusing on providing ease for users to search, book, and pay for parking spaces online.",

      "The application includes features such as parking location search, an interactive map, parking space booking, and a fast and secure payment process.",

      "The interface design was created to enable users to navigate the app efficiently, offering a more comfortable and stress-free parking experience.",
    ],

    technologies: [
      {
        name: "Figma",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "UI Design",
        color:
          "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
      },
      {
        name: "UX Design",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
      },
      {
        name: "Prototyping",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

  {
    id: 3,

    images: [aorusGamingUiUx],

    icon: Palette,

    title: "UI/UX Design for Aorus Gaming Shop Application",

    date: "November 2021",

    shortDescription:
      "A UI/UX design for a gaming e-commerce application featuring product discovery, filtering, product details, and a simplified checkout experience.",

    detailDescription: [
      "Designed the UI/UX for the Aorus Gaming Shop application using Figma, focusing on presenting gaming products with an engaging and intuitive interface.",

      "Created wireframes, mockups, and interactive prototypes, including product pages, search and filter features, and a simple checkout process, to ensure an efficient and enjoyable online shopping experience.",
    ],

    technologies: [
      {
        name: "Figma",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "UI Design",
        color:
          "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
      },
      {
        name: "UX Design",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
      },
      {
        name: "Prototyping",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

{
  id: 4,

  images: [aorusGamingShop],

  icon: Monitor,

  title: "AORUS Gaming Showcase Website",

  date: "December 2021",

  shortDescription:
    "A responsive gaming product showcase website focused on interactive user experience, product presentation, and maintaining AORUS premium gaming identity.",

  detailDescription: [
    "Developed the AORUS Gaming Showcase Website using HTML, JavaScript, and Bootstrap to create a responsive platform for presenting gaming products through structured layouts and interactive interfaces.",

    "Implemented responsive design, interactive components, and consistent visual presentation across different screen sizes while adapting the interface to match the AORUS gaming brand identity.",
  ],

  technologies: [
    {
      name: "HTML",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Bootstrap",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
  ],
},

{
  id: 5,

  images: [rasaNusantara],

  icon: Smartphone,

  title: "Rasa Nusantara - Indonesian Food Recipe Mobile App",

  date: "February 2022",

  shortDescription:
    "An Android recipe application that provides structured information about Indonesian food recipes, allowing users to explore dishes through recipe collections, detailed ingredients, cooking instructions, and an intuitive mobile interface.",

  detailDescription: [
    "Developed an Android Indonesian food recipe application using Java and Android Studio with XML for user interface design, focusing on structured recipe presentation and simple mobile user experience.",

    "Implemented recipe collection features that allow users to browse food information including images, recipe names, cooking duration, difficulty levels, ingredients, and step-by-step cooking instructions.",

    "Designed a clear navigation flow between recipe lists and detailed recipe pages to provide an organized and accessible way for users to discover and read Indonesian food recipes.",
  ],

  technologies: [
    {
      name: "Java",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Android Studio",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "Android SDK",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "XML",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
  ],
},

{
  id: 6,

  images: [calgeo],

  icon: Smartphone,

  title: "Calgeo - 2D Geometry Calculator Mobile App",

  date: "March 2022",

  shortDescription:
    "An Android geometry calculator application designed to simplify 2D shape measurements through automated calculations, structured input handling, and an intuitive mobile interface for users.",

  detailDescription: [
    "Developed a 2D geometry calculator mobile application using Java and Android Studio with XML for interface design, focusing on implementing mathematical calculation logic within an Android environment.",

    "Implemented dynamic calculation features that allow users to select geometric shapes, input required dimensions, and automatically generate measurement results based on predefined mathematical formulas.",

    "Designed a simple and structured user interface with input validation and clear navigation to provide an efficient experience for performing various 2D geometry calculations.",
  ],

  technologies: [
    {
      name: "Java",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Android Studio",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "Android SDK",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "XML",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
  ],
},

  {
  id: 7,

  images: [personalDataManager],

  icon: Smartphone,

  title: "Privena - Personal Data Manager Mobile App",

  date: "June 2022",

  shortDescription:
    "An Android personal data management application designed to securely manage personal notes through Firebase authentication and local data storage using Realm.",

  detailDescription: [
    "Developed an Android personal data management application using Java and Android Studio, focusing on secure note management and structured mobile data handling.",

    "Implemented user authentication using Firebase Authentication and developed note management features including creating, viewing, updating, and organizing personal notes.",

    "Integrated Realm Database for local data persistence, allowing users to securely store and manage notes efficiently while maintaining reliable access to personal information on the device.",
  ],

  technologies: [
    {
      name: "Java",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Android Studio",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "Android SDK",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "XML",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Firebase Authentication",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Realm",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
  ],
},

{
  id: 8,

  images: [numora],

  icon: Smartphone,

  title: "Numora - Calculator Mobile App",

  date: "July 2022",

  shortDescription:
    "A modern Android calculator application that provides basic and scientific calculation features through a clean interface, responsive layout, and smooth user interaction using modern Android development practices.",

  detailDescription: [
    "Developed a modern calculator mobile application using Kotlin, Android Studio, and Jetpack Compose, focusing on declarative UI development, reusable components, and responsive mobile interface design.",

    "Implemented basic and scientific calculation features including arithmetic operations, trigonometric functions, square root, power operations, factorial, and mathematical constants with dynamic calculation handling.",

    "Applied MVVM architecture and state management using Kotlin StateFlow to create a structured application flow with maintainable code organization and efficient user interaction management.",

    "Designed a premium dark-themed interface using Material 3 Design System with interactive calculator buttons, animations, and responsive layouts to provide a smooth user experience across different screen sizes.",
  ],

  technologies: [
  {
    name: "Kotlin",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  },
  {
    name: "Android Studio",
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  {
    name: "Jetpack Compose",
    color:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  },
  {
    name: "Material 3",
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    name: "Android SDK",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    name: "MVVM",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    name: "StateFlow",
    color:
      "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  },
],
},

  {
  id: 9,

  images: [wholesaleGroceries],

  icon: FileCodeCorner,

  title: "Wholesale Grocery Transaction Management Program",

  date: "August 2023",

  shortDescription:
    "A Java-based transaction management program designed to record and process wholesale grocery data, including product information, pricing calculations, payment handling, and structured transaction reporting.",

  detailDescription: [
    "Developed a Java-based wholesale grocery transaction management program to organize product data and automate basic transaction processing.",

    "Implemented transaction features including invoice recording, product information management, purchase and selling price calculation, and payment method handling for cash and credit transactions.",

    "Developed calculation logic for transaction processing, including tax calculation, credit payment interest, and purchase-based gift conditions.",

    "Created structured transaction reports to present detailed information from each completed transaction in an organized format.",
  ],

  technologies: [
    {
      name: "Java",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Transaction System",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
  ],
},

 {
  id: 10,

  images: [carWorkshopInventory],

  icon: Monitor,

  title: "Car Workshop Inventory Desktop App",

  date: "September 2023",

  shortDescription:
    "A desktop-based inventory management application designed to support car workshop operations through spare parts management, customer and distributor data management, transaction processing, and structured reporting.",

  detailDescription: [
    "Developed a desktop-based Car Workshop Inventory application using Java, NetBeans IDE, and MySQL to centralize workshop data management and improve operational efficiency.",

    "Implemented inventory management features including spare parts stock monitoring, product data organization, customer and distributor management, and database-driven transaction recording.",

    "Developed incoming and outgoing transaction management with structured reporting features to help workshop owners monitor inventory activity and review operational data.",

    "Designed a user-friendly desktop interface using Java Swing with JDBC integration to provide efficient interaction between application features and MySQL database management.",
  ],

  technologies: [
    {
      name: "Java",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "NetBeans",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "MySQL",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "Java Swing",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      name: "JDBC",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
  ],
},

 {
  id: 11,

  images: [sileloAuction],

  icon: Monitor,

  title: "SiLelo - Online Auction Website",

  date: "May 2023",

  shortDescription:
    "An online auction web application designed to support digital bidding activities through user management, product management, auction transactions, and secure payment integration.",

  detailDescription: [
    "Collaborated with a team to develop the SiLelo online auction website using PHP, CodeIgniter, and Bootstrap to create a structured platform for managing auction activities.",

    "Developed backend functionality including user authentication, product management, bidding workflows, and auction transaction processing to support the core platform operations.",

    "Integrated Midtrans API for secure payment processing and created a structured transaction flow between completed auctions and digital payments.",

    "Implemented responsive interface design using Bootstrap to provide a consistent and accessible user experience across different devices.",
  ],

  technologies: [
    {
      name: "PHP",
      color:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
    },
    {
      name: "CodeIgniter",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
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
    {
      name: "MySQL",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "Midtrans API",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
  ],
},

  



{
  id: 12,

  images: [
    pustakanesia
  ],

  icon: Monitor,

  title: "Pustakanesia - Digital Library Website",

  date: "June 2023",

  shortDescription:
    "A digital library web application designed to provide structured access to book resources through catalog management, book search, digital borrowing, and user authentication features.",

  detailDescription: [
    "Collaborated with a team to develop the Pustakanesia digital library website using PHP, Laravel, and Bootstrap with a focus on building an accessible and responsive library management platform.",

    "Developed core features including user authentication, book search functionality, catalog management, digital borrowing workflow, and structured library data management.",

    "Implemented responsive interface design using Bootstrap and integrated backend functionality to provide secure access, organized navigation, and efficient user interaction within the digital library system.",

    "Integrated MySQL database management to support structured storage and processing of user, book catalog, and borrowing transaction data.",
  ],

  technologies: [
    {
      name: "PHP",
      color:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
    },
    {
      name: "Laravel",
      color:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
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
    {
      name: "MySQL",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
  ],
},

{
  id: 13,

  images: [centerOfMassCalculator1, centerOfMassCalculator2],

  icon: BrainCircuit,

  title: "Center of Mass and Velocity Calculator Program",

  date: "August 2023",

  shortDescription:
    "A Python-based physics computation application designed to calculate and visualize the center of mass and center-of-mass velocity of multiple objects through interactive input and 2D and 3D visualization.",

  detailDescription: [
    "Developed a Python-based computational model to calculate the center of mass and center-of-mass velocity for systems containing multiple objects with different physical parameters.",

    "Implemented dynamic object input processing that allows users to define object properties including mass, position, and velocity for automated physics calculations.",

    "Integrated numerical computation and visualization features using Python libraries to display object configurations and calculated center points in 2D and 3D environments.",

    "Created an interactive visualization model to improve understanding of physics concepts by presenting calculation results through structured graphical representations.",
  ],

  technologies: [
    {
      name: "Python",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "NumPy",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "Matplotlib",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      name: "2D & 3D Visualization",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
  ],
},

 {
  id: 14,

  images: [hotelSentimentAnalysis],

  icon: BrainCircuit,

  title: "Jakarta Hotel Review Sentiment Analysis Website",

  date: "September 2023",

  shortDescription:
    "A machine learning web application designed to analyze customer sentiment from Jakarta hotel reviews using text processing, Support Vector Classifier modeling, and an interactive Streamlit interface.",

  detailDescription: [
    "Developed a hotel review sentiment analysis web application using Python and Streamlit to classify customer opinions based on collected review data.",

    "Collected hotel review datasets through web scraping using SerpAPI, then performed data processing and integrated a Support Vector Classifier model for sentiment prediction.",

    "Implemented a machine learning workflow that processes user review input, applies the trained classification model, and presents sentiment analysis results through an interactive web interface.",

    "Designed a simple and accessible Streamlit application to demonstrate the implementation of machine learning models in analyzing customer feedback and extracting sentiment insights.",
  ],

  technologies: [
    {
      name: "Python",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "Streamlit",
      color:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    },
    {
      name: "Scikit-learn",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "SVC",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      name: "Pandas",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "SerpAPI",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
  ],
},

 {
  id: 15,

  images: [kipEligibilityPrediction],

  icon: BrainCircuit,

  title: "KIP Student Eligibility Prediction Website",

  date: "October 2023",

  shortDescription:
    "A machine learning web application designed to predict student eligibility for the KIP assistance program using student data processing, Naive Bayes classification, and an interactive Streamlit interface.",

  detailDescription: [
    "Developed a student eligibility prediction web application using Python and Streamlit to support classification of KIP assistance program candidates based on student data.",

    "Processed student datasets from SMP Sepuluh November 02 Semarang and implemented data preprocessing and Naive Bayes classification to generate eligibility predictions.",

    "Integrated the trained machine learning model into a Streamlit-based interface that allows users to input student information and receive structured prediction results.",

    "Designed a simple and accessible application workflow to demonstrate the implementation of machine learning classification for educational decision-support systems.",
  ],

  technologies: [
    {
      name: "Python",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "Streamlit",
      color:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    },
    {
      name: "Scikit-learn",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Naive Bayes",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      name: "Pandas",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
  ],
},

  

{
  id: 16,

  images: [bpbdKebumen],

  icon: Monitor,

  title: "BPBD Kebumen Web Replication",

  date: "April 2024",

  shortDescription:
    "A frontend web replication project that recreates the BPBD Kabupaten Kebumen website interface using ReactJS and Bootstrap with a component-based architecture, reusable UI elements, and responsive design implementation.",

  detailDescription: [
    "Developed a frontend web replication of the BPBD Kabupaten Kebumen website using ReactJS and JavaScript to recreate the original interface structure and user experience.",

    "Implemented a component-based architecture with reusable UI components and props-based data handling to maintain organized and scalable frontend development.",

    "Applied Bootstrap responsive design principles to ensure consistent layouts, navigation behavior, and interface presentation across different screen sizes.",

    "Focused on creating a modular frontend structure that demonstrates modern React development practices through reusable components and structured page composition.",
  ],

  technologies: [
    {
      name: "ReactJS",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Bootstrap",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
  ],
},

 {
  id: 17,

  images: [disasterDataApi],

  icon: ServerCog,

  title: "Siben API",

  date: "May 2024",

  shortDescription:
    "A REST API service developed to provide structured natural disaster information through accessible endpoints, enabling applications to retrieve disaster data including type, location, causes, impacts, and event details.",

  detailDescription: [
    "Developed Siben API using JavaScript and Node.js to provide structured natural disaster information through accessible API endpoints.",

    "Implemented structured disaster data management including disaster types, event timestamps, locations, causes, and impacts using JSON-based responses.",

    "Designed the API as a reusable data service that allows integration with client applications for dynamic disaster information delivery.",

    "Deployed the API using Vercel to provide accessible and reliable service availability for external application integration.",
  ],

  technologies: [
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Node.js",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "JSON",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "REST API",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Vercel",
      color:
        "bg-gray-100 text-gray-700 dark:bg-gray-700/40 dark:text-gray-300",
    },
  ],
},

  {
  id: 18,

  images: [sibenWebsite],

  icon: Monitor,

  title: "Siben - Disaster Preparedness Website",

  date: "June 2024",

  shortDescription:
    "A disaster preparedness web platform that provides disaster management information, disaster data, news, and weather forecasts through API integrations within a responsive and user-friendly interface.",

  detailDescription: [
    "Developed Siben disaster preparedness website using JavaScript, ReactJS, and Bootstrap to provide accessible information and guidance related to natural disasters.",

    "Implemented structured content categories including Disaster Management, Disaster Data, Disaster News, and Weather Forecasts to organize disaster-related information efficiently.",

    "Integrated multiple APIs to deliver dynamic information, including Siben API for disaster data, Detik.com API for disaster news, and BMKG API for weather forecast information.",

    "Designed a responsive component-based interface using ReactJS and Bootstrap to provide consistent access to disaster information across different devices.",
  ],

  technologies: [
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "ReactJS",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "Bootstrap",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      name: "REST API",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Siben API",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "Detik.com API",
      color:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    },
    {
      name: "BMKG API",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
  ],
},

  {
    id: 19,

    images: [prajagamerUiUx],

    icon: Palette,

    title: "UI/UX Design for Prajagamer Website",

    date: "August 2024",

    shortDescription:
      "A responsive UI/UX design for the Prajagamer internship registration platform focused on simplicity, usability, and an intuitive registration experience.",

    detailDescription: [
      "Designed the UI/UX for the Prajagamer website using Figma, focusing on the ease of self-registration for internships at the Semarang City Disdukcapil.",

      "The design is responsive and user-friendly, featuring a simple registration flow, a participant dashboard view, and a clean, intuitive data management interface.",

      "The design process included creating wireframes, high-fidelity mockups, and interactive prototypes to ensure an efficient and comfortable user experience from start to finish.",
    ],

    technologies: [
      {
        name: "Figma",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "UI Design",
        color:
          "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
      },
      {
        name: "UX Design",
        color:
          "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
      },
      {
        name: "Prototyping",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

 {
  id: 20,

  images: [prajagamerApi],

  icon: ServerCog,

  title: "Prajagamer API",

  date: "September 2024",

  shortDescription:
    "A REST API service developed to support internship registration and participant data management through structured data exchange between frontend applications and backend systems.",

  detailDescription: [
    "Developed Prajagamer API using JavaScript and Node.js as a backend service to support data communication between the frontend application and the platform data management system.",

    "Implemented API functionality for internship registration processing, participant data retrieval, and participant information updates through structured endpoints.",

    "Designed consistent API responses and data workflows to improve application reliability, maintain data synchronization, and support efficient registration management.",

    "Built the API as a scalable backend service to support future platform development and additional data integration requirements.",
  ],

  technologies: [
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Node.js",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      name: "REST API",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
  ],
},

  {
  id: 21,

  images: [prajagamerWebsite],

  icon: Monitor,

  title: "Prajagamer - Internship Registration Website",

  date: "September 2024",

  shortDescription:
    "A web-based internship registration platform designed to streamline applicant registration, participant data management, and administrative workflows through a responsive interface and integration with Prajagamer API.",

  detailDescription: [
    "Collaborated with a team to develop Prajagamer, an internship self-registration website using JavaScript, ReactJS, and Tailwind CSS to simplify the internship application process.",

    "Implemented online registration features, participant data management, and integration with Prajagamer API to support efficient data submission, retrieval, and processing within the platform.",

    "Developed a responsive and component-based frontend architecture using ReactJS with Tailwind CSS to provide a structured and user-friendly registration experience.",

    "The platform was designed to reduce manual administration processes, minimize data handling errors, and improve efficiency in internship registration management.",
  ],

  technologies: [
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "ReactJS",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "Tailwind CSS",
      color:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      name: "REST API",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "Prajagamer API",
      color:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
  ],
},

{
  id: 22,

  images: [/* poliklinikUdinus */],

  icon: Monitor,

  title: "Poliklinik Udinus Website",

  date: "January 2025",

  shortDescription:
    "A web-based clinic management system developed to support healthcare workflows through role-based access, patient registration, doctor management, examination processes, medicine management, and centralized clinical data management.",

  detailDescription: [
    "Developed a web-based Poliklinik Udinus management system using PHP, MySQL, and Bootstrap as part of the BNSP Web Developer certification project.",

    "Implemented role-based functionality for administrators, patients, and doctors, including authentication, data management, registration workflows, and examination processes.",

    "Developed clinic management features such as doctor management, patient management, medicine management, examination scheduling, patient history tracking, and examination cost calculation.",

    "Designed a responsive interface using Bootstrap and a centralized database system using MySQL to maintain structured clinical data and support efficient healthcare operational workflows.",
  ],

  technologies: [
    {
      name: "PHP",
      color:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
    },
    {
      name: "MySQL",
      color:
        "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
    },
    {
      name: "HTML",
      color:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    },
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      name: "Bootstrap",
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
 ],
},

  {
    id: 23,

    images: [
      /* diabetesClassification */
    ],

    icon: BrainCircuit,

    title:
      "Diabetes Classification Using KNN with Data Normalization",

    date: "March 2025",

    shortDescription:
      "A machine learning classification project using KNN to predict diabetes while comparing multiple data normalization techniques and evaluating their impact on model performance.",

    detailDescription: [
      "Developed a machine learning project using Python to classify diabetes in the Pima Indians Diabetes dataset.",

      "The work includes data preprocessing, handling missing values and duplicates, feature selection using Random Forest, and applying three normalization techniques: Min-Max Scaling, Z-Score Scaling, and Decimal Scaling.",

      "The model is built using K-Nearest Neighbors (KNN) with various K values and evaluated using metrics such as accuracy, precision, recall, F1-score, specificity, and ROC AUC.",

      "The project also includes a Paired T-Test statistical test to assess the significant impact of each normalization technique on the model's performance.",
    ],

    technologies: [
  {
    name: "Python",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    name: "Pandas",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    name: "NumPy",
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  {
    name: "Scikit-learn",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    name: "SciPy",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  },
  {
    name: "Matplotlib",
    color:
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
  {
    name: "KNN",
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    name: "Random Forest",
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  {
    name: "Data Normalization",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    name: "Statistical Testing",
    color:
      "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  },
    ],
  },
];