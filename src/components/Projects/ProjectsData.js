import {
  BrainCircuit,
  Monitor,
  Palette,
  Database,
  ServerCog,
} from "lucide-react";

// ==============================
// PROJECT IMAGES
// ==============================

import foodRecipeUiUx from "../../assets/projects/food-recipe-ui-ux.png";
import eParkingUiUx from "../../assets/projects/e-parking-ui-ux.png";
import aorusGamingUiUx from "../../assets/projects/aorus-gaming-ui-ux.png";
import aorusGamingShop from "../../assets/projects/aorus-gaming-shop.png";
import personalDataManager from "../../assets/projects/personal-data-manager.png";
import wholesaleGroceries from "../../assets/projects/wholesale-groceries.png";
import carWorkshopInventory from "../../assets/projects/car-workshop-inventory.png";
// import pustakanesia from "../../assets/projects/pustakanesia.png";
import hotelSentimentAnalysis from "../../assets/projects/hotel-sentiment-analysis.png";
// import sileloAuction from "../../assets/projects/silelo-auction.png";
import kipEligibilityPrediction from "../../assets/projects/kip-eligibility-prediction.png";
import centerOfMassCalculator1 from "../../assets/projects/center-of-mass-calculator1.png";
import centerOfMassCalculator2 from "../../assets/projects/center-of-mass-calculator2.png";
// import disasterDataApi from "../../assets/projects/disaster-data-api.png";
// import sibenWebsite from "../../assets/projects/siben-website.png";
// import prajagamerUiUx from "../../assets/projects/prajagamer-ui-ux.png";
// import prajagamerWebsite from "../../assets/projects/prajagamer-website.png";
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

    date: "December 2021",

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

    title: "Aorus Gaming Shop Website",

    date: "January 2022",

    shortDescription:
      "A responsive gaming e-commerce website focused on interactive functionality, UI/UX implementation, and consistent brand presentation.",

    detailDescription: [
      "Developed the Aorus Gaming Shop website using HTML, JavaScript, and Bootstrap, focusing on implementing the UI/UX design for an intuitive and engaging user experience.",

      "Responsible for developing interactive features, optimizing responsiveness across various devices, and maintaining design consistency and quality in line with the brand identity.",
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
      {
        name: "Responsive Design",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
    ],
  },

  {
    id: 5,

    images: [personalDataManager],

    icon: Monitor,

    title: "Personal Data Manager Application",

    date: "September 2022",

    shortDescription:
      "An Android note-taking application for securely managing personal notes using Firebase authentication and Realm local storage.",

    detailDescription: [
      "Developed a Personal Data Manager mobile application for Android using Java and Android Studio.",

      "This app functions as a note-taking application, allowing users to securely manage and store their personal notes.",

      "Firebase is used for user authentication, while Realm database is utilized to store and manage the notes locally, ensuring that the data is available and efficiently organized.",
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
        name: "Firebase",
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
    id: 6,

    images: [wholesaleGroceries],

    icon: Monitor,

    title: "Wholesale Groceries Inventory Program",

    date: "October 2022",

    shortDescription:
      "A Java-based grocery transaction program for calculating product prices, processing payments, generating invoices, and managing sales calculations.",

    detailDescription: [
      "Developed a Java program to manage wholesale transactions in a grocery store.",

      "It calculates product prices, tracks sales, and handles different payment methods including cash or credit.",

      "The program generates invoices, applies taxes, calculates interest for credit payments, and offers gifts based on the purchase amount.",

      "It provides a detailed report for each transaction.",
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
    id: 7,

    images: [carWorkshopInventory],

    icon: Monitor,

    title: "Car Workshop Inventory Application",

    date: "November 2022",

    shortDescription:
      "A desktop inventory management application for managing spare parts, customer data, distributors, transactions, and workshop reports.",

    detailDescription: [
      "Developed a desktop Car Workshop Inventory application using Java and NetBeans IDE with MySQL database to streamline inventory management and workshop operations.",

      "Key features include spare parts stock management, managing distributor and customer data, tracking incoming and outgoing transactions, and generating transaction reports.",

      "The user-friendly interface enables technicians and workshop owners to efficiently monitor inventory and optimize daily operations.",
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
        name: "Desktop Application",
        color:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300",
      },
    ],
  },

  {
    id: 8,

    images: [/* pustakanesia */],

    icon: Monitor,

    title: "Digital Library Website - Pustakanesia",

    date: "March 2023",

    shortDescription:
      "A digital library website providing book search, catalog management, digital borrowing, and user authentication features.",

    detailDescription: [
      "Collaborated with a team to develop the Pustakanesia digital library website using PHP and Laravel.",

      "Responsible for developing key features such as book search, catalog management, digital borrowing system, and user authentication.",

      "The website is designed to be secure, responsive, and easily accessible, ensuring an optimal user experience.",
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
        name: "Web Development",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
    ],
  },

  {
    id: 9,

    images: [hotelSentimentAnalysis],

    icon: BrainCircuit,

    title: "Hotel Sentiment Analysis Review Website in Jakarta",

    date: "May 2023",

    shortDescription:
      "A machine learning web application for analyzing customer sentiment from hotel reviews in Jakarta using Support Vector Classifier.",

    detailDescription: [
      "Developed a sentiment analysis website for hotel reviews in Jakarta using Python and Streamlit.",

      "The dataset was collected through web scraping with SerpAPI, and the model was trained using Support Vector Classifier (SVC).",

      "This website provides accurate real-time sentiment analysis, helping users easily understand customer perceptions of hotels, with a simple and user-friendly interface.",
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
        name: "SVC",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "SerpAPI",
        color:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },
      {
        name: "Web Scraping",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

  {
    id: 10,

    images: [/* sileloAuction */],

    icon: ServerCog,

    title: "Online Auction Website - SiLelo",

    date: "August 2023",

    shortDescription:
      "An online auction platform featuring user registration, product management, bidding functionality, and secure digital payment integration.",

    detailDescription: [
      "Collaborated with a team to develop the SiLelo online auction website using PHP and Laravel.",

      "Responsible for backend development, including user registration, auction bidding, product management, and secure payment system integration through the Midtrans API.",

      "The website is designed to be responsive, user-friendly, and high-performance, ensuring a secure and efficient online auction experience.",
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
        name: "Midtrans API",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "Backend Development",
        color:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300",
      },
    ],
  },

  {
    id: 11,

    images: [kipEligibilityPrediction],

    icon: BrainCircuit,

    title: "Student Eligibility Prediction Website for KIP",

    date: "January 2024",

    shortDescription:
      "A machine learning web application for predicting student eligibility for the KIP assistance program using the Naive Bayes classification algorithm.",

    detailDescription: [
      "Developed a website to predict student eligibility for the KIP (Kartu Indonesia Pintar) program using Python and Streamlit.",

      "The website uses data from SMP Sepuluh November 02 Semarang and applies the Naive Bayes algorithm for classification.",

      "This platform helps schools quickly and accurately determine which students are eligible for assistance, with a simple and user-friendly interface.",
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
        name: "Naive Bayes",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "Machine Learning",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

  {
    id: 12,

    images: [centerOfMassCalculator1, centerOfMassCalculator2],

    icon: Database,

    title: "Center of Mass and Center of Mass Velocity Calculator Model",

    date: "April 2024",

    shortDescription:
      "A Python-based interactive model for calculating and visualizing the center of mass and center of mass velocity in 2D and 3D.",

    detailDescription: [
      "Developed a Python model to calculate the center of mass and center of mass velocity, with 2D and 3D visualization capabilities.",

      "This model allows users to input multiple objects as needed, making it easier to understand physics concepts interactively and intuitively.",
    ],

    technologies: [
      {
        name: "Python",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
      {
        name: "2D Visualization",
        color:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },
      {
        name: "3D Visualization",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
    ],
  },

  {
    id: 13,

    images: [/* disasterDataApi */],

    icon: ServerCog,

    title: "Natural Disaster Data API",

    date: "May 2024",

    shortDescription:
      "A REST API service providing structured natural disaster data including disaster time, location, causes, and impacts.",

    detailDescription: [
      "Developed a Natural Disaster Data API using JavaScript and Express.js to provide structured data on various types of disasters, including time, location, causes, and impacts.",

      "This API is deployed on Vercel to ensure availability and scalability, making it easy for developers to access real-time disaster data and integrate it with other applications.",
    ],

    technologies: [
      {
        name: "JavaScript",
        color:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
      },
      {
        name: "Express.js",
        color:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300",
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
    id: 14,

    images: [/* sibenWebsite */],

    icon: Monitor,

    title: "Natural Disaster Preparedness Website - Siben",

    date: "June 2024",

    shortDescription:
      "A disaster preparedness information website providing disaster management guidance, disaster data, news, and weather forecasts through multiple API integrations.",

    detailDescription: [
      "Developed the Siben website using JavaScript, React.js, and Bootstrap to provide information and knowledge related to natural disasters.",

      "The content is divided into four main categories: Disaster Management, Disaster Data, Disaster News, and Weather Forecasts.",

      "Disaster data is managed through an API, news is obtained from the Detik.com API, and weather forecasts use the BMKG API.",

      "The website aims to provide real-time access to information and effective disaster preparedness guidance.",
    ],

    technologies: [
      {
        name: "React",
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
      {
        name: "REST API",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
      {
        name: "BMKG API",
        color:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },
    ],
  },

  {
    id: 15,

    images: [/* prajagamerUiUx */],

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
    id: 16,

    images: [/* prajagamerWebsite */],

    icon: Monitor,

    title: "Internship Registration Website - Prajagamer",

    date: "September 2024",

    shortDescription:
      "A web-based internship self-registration system designed to automate registration, participant data management, and internship administration processes.",

    detailDescription: [
      "Along with the team, developed the Prajagamer website, a self-registration system for internships, using JavaScript with ReactJS and Tailwind CSS.",

      "This website is designed to simplify the internship registration process at the Semarang City Disdukcapil, featuring online registration, participant data management, and API integration for efficient data storage and access.",

      "Prajagamer aims to automate internship administration, reduce data errors, and enhance the efficiency of the registration process.",
    ],

    technologies: [
      {
        name: "React",
        color:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
      },
      {
        name: "JavaScript",
        color:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
      },
      {
        name: "API Integration",
        color:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
      },
    ],
  },

  {
    id: 17,

    images: [/* diabetesClassification */],

    icon: BrainCircuit,

    title:
      "Diabetes Classification Model Using KNN with Various Data Normalization Techniques",

    date: "February 2025",

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
        name: "KNN",
        color:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
      },
      {
        name: "Random Forest",
        color:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },
      {
        name: "Machine Learning",
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