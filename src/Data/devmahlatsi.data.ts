

import webDevelopment from "../assets/webDevelopment.svg";
import mobileDevelopment from "../assets/mobileDevelopment.svg";
import uiImplementation from "../assets/userInterface.svg";
import backendApi from "../assets/backendApi.svg";
import uxAwareDesign from "../assets/uiUxDesign.svg";

import kokoroStream from "/kokoro-stream-home.png"
import agriSmart from "/agri-smart.png"
import merchBay from "/merch-bay.png"

// import userCentered from "../assets/userCentered.svg";
import fastDelivery from "../assets/fastDelivery.svg";
import qualityDriven from "../assets/qualityDriven.svg";
import problemSolver from "../assets/problemSolver.svg";
import alwaysLearning from "../assets/alwaysLearning.svg";


export const projects = [
  {
  "id": "kokoro-stream",
  "title": "Kokoro Stream",
  "slug": "kokoro-stream",
  "description": "A modern streaming web application that allows users to browse, search, and explore movies and TV shows through a clean, responsive interface. The application focuses on performance, usability, and scalable component-based design.",
  "shortDescription": "Streaming web app for browsing movies and TV shows.",

  "status": "completed",
  "featured": true,
  "category": "web",
  "year": 2026,
  "duration": "3 months",

  "team": {
    "type": "solo",
    "teamSize": 1,
    "role": "Full Stack Developer",
    "responsibilities": [
      "Designed and built the entire application independently",
      "Developed reusable React components for movie and TV listings",
      "Implemented dynamic data fetching from external APIs",
      "Built search functionality for movies and TV shows",
      "Designed a responsive and modern UI using Tailwind CSS",
      "Structured the project for scalability and maintainability"
    ]
  },

  "problem": "Users often struggle to find a clean and fast interface to browse movies and TV shows without clutter or unnecessary complexity.",
  
  "solution": "Developed a streamlined streaming-style platform that focuses on intuitive navigation, fast search, and clear content presentation using modern frontend technologies.",

  "techStack": [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs"
  ],

  "features": [
    "Browse movies and TV shows",
    "Search functionality with real-time results",
    "Responsive design for mobile and desktop",
    "Dynamic content rendering using API data",
    "Clean and modern UI focused on usability"
  ],

  "images": [
    kokoroStream
  ],

  "links": {
    "github": "https://github.com/your-username/kokoro-stream",
    "liveDemo": "https://kokoro-stream.vercel.app",
    "caseStudy": "/projects/kokoro-stream"
  },

  "metrics": {
    "performance": "Optimized for fast load times and smooth UI interactions"
  }
},

  {
  "id": "merch-bay",
  "title": "Merch Bay",
  "slug": "merch-bay",
  "description": "A real-world e-commerce platform used to sell anime and music-themed posters on campus. The application allows users to browse products, search for specific items, and view pricing and size options through a clean, responsive interface designed for fast product discovery.",
  "shortDescription": "Campus-based poster store with a custom e-commerce web app.",

  "status": "in-progress",
  "featured": true,
  "category": "web",
  "year": 2026,

  "team": {
    "type": "solo",
    "teamSize": 1,
    "role": "Full Stack Developer & Operator",
    "responsibilities": [
      "Designed and developed the full e-commerce interface",
      "Managed product listings and pricing for real-world sales",
      "Built reusable UI components for scalability",
      "Handled product data structuring and updates",
      "Designed the user experience for quick browsing and purchasing"
    ]
  },

  "problem": "Selling posters manually on campus limits visibility and makes it difficult for customers to browse available options efficiently.",

  "solution": "Developed a centralized digital storefront that allows customers to explore available posters, view details, and make faster purchasing decisions through an intuitive interface.",

  "techStack": [],

  "features": [
    "Product catalog with anime and music posters",
    "Search functionality for quick product discovery",
    "Dynamic product cards with pricing and size selection (A3/A4)",
    "Responsive layout for mobile and desktop users",
    "Structured UI ready for cart and checkout integration"
  ],
  
  "images": [
    merchBay
  ],

  "links": {
    "github": "https://github.com/your-username/kokoro-stream",
    "liveDemo": "https://kokoro-stream.vercel.app",
    "caseStudy": "/projects/kokoro-stream"
  },

  "metrics": {
    "impact": "Used to support real poster sales on campus"
  }
  },
  {
    id: "portfolio-site",
    title: "Campus Lab & Class management system",
    slug: "developer-portfolio",
    description: "A personal developer portfolio showcasing projects, technical skills, and achievements.",
    shortDescription: "Personal portfolio built with React and modern UI tools.",

    status: "in-progress",
    featured: false,
    category: "web",
    year: 2026,

    team: {
      type: "solo",
      teamSize: 1,
      role: "Full Stack Developer"
    },

    problem: "Developers need a professional online presence to showcase projects and technical ability.",
    solution: "Created a modern developer portfolio with animated UI components and project showcases.",

    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animated project cards",
      "Featured project section",
      "Responsive design",
      "Dynamic project pages"
    ],

    images: ["/projects/portfolio/home.png", "/projects/portfolio/projects.png"],

    links: {
      github: "https://github.com/username/portfolio",
      liveDemo: "https://lugisani.dev"
    }
  }
];

export const projectTypes = [
  {
    id: 1,
    value: "Website",
    name: "Website",
  },
  {
    id: 2,
    value: "Web Application",
    name: "Web Application",
  },
  {
    id: 3,
    value: "Mobile App",
    name: "Mobile App",
  },
  {
    id: 4,
    value: "Backend / API",
    name: "Backend / API",
  },
];


export const designProcess = [
  {
    id: 1,
    title: "Design",
    description: "Understanding the problem, defining requirements, and thinking through user experience."
  },
  {
    id: 2,
    title: "Build",
    description: "Developing the solution with clean, maintainable code and clear structure",

  },
  {
    id: 3,
    title: "Refine",
    description: "Testing, iterating, and improving usability, performance, and details"
  },
  {
    id: 4,
    title: "Deliver",
    description: "Shipping a stable, polished, solution ready for real-world use."
  }
]

export const portfolio = [
  
]

export const skills = [
  {
    id: 1, 
    icon: webDevelopment,
    title: "Web Develoepment",
    description: ["Responsive applications", "Frontend-backend integration", "Performance optimization"]
  },
  {
    id: 2,
    icon: mobileDevelopment,
    title: "Mobile Development",
    description: ["Mobile interfaces", "Cross-device compatibility", "Touch optimization"]
  },
  // {
  //   id: 3,
  //   title: "Desktop Applications",
  //   description: []
  // },
  {
    id: 4,
    icon: uiImplementation,
    title: "UI Implementation",
    description: ["Design translation", "Visual hierarchy", "Iterative refinement"]
  },
  {
    id: 5,
    icon: backendApi,
    title: "Backend & APIs",
    description: ["API design", "Data flow", "Database management"]
  },
  {
    id: 6,
    icon: uxAwareDesign,
    title: "UX-Aware Design",
    description: ["User flows", "Friction reduction", "Feedback iteration"]
  }
]


export const hireReasons = [
  // {
  //   id: 1,
  //   icon: userCentered,
  //   title: "User Centered",
  //   description: "I build with real users in mind, focusing on clarity and usability."
  // },
  {
    id: 2,
    icon: fastDelivery,
    title: "Fast Delivery",
    description: "I work iteratively to ship features quickly and reliably."
  },
  {
    id: 3,
    icon: qualityDriven,
    title: "Quality Driven",
    description: "I write clean, maintainable code that is built to last."
  },
  {
    id: 4,
    icon: problemSolver,
    title: "Problem Solver",
    description: "I break down complex problems into simple, workable solutions."
  },
  {
    id: 5,
    icon: alwaysLearning,
    title: "Always Learning",
    description: "I keep improving by learning and applying new technologies."
  }
];



export const techToolsData = [
  {
    id: 1,
    title: "REST APIs",
  },
  {
    id: 100,
    title: "EJBs",
  },
  
  {
    id: 2,
    title: "Next.js",
  },
  {
    id: 3,
    title: "React.js",
  },
  {
    id: 4,
    title: "Node.js",
  },
  {
    id: 5,
    title: "Express.js",
  },
  {
    id: 6,
    title: "Django",
  },
  {
    id: 7,
    title: "SQL",
  },
  {
    id: 8,
    title: "GitHub",
  },
  {
    id: 9,
    title: "JavaScript",
  },
  {
    id: 10,
    title: "Python",
  },
  {
    id: 11,
    title: "Java",
  },
  {
    id: 12,
    title: "Kotlin"
  },
  {
    id: 13,
    title: ""
  }
];


export const menuData = [
  {
    id:1,
    url: '#home',
    title: "Home",
  },
  {
    id:2,
    url: '#about',
    title: "About",
  },
  {
    id: 3,
    url: '#skills',
    title: "Skills"
  },
  {
    id: 5,
    url: '#portfolio',
    title: 'Portfolio'
  },
  {
    id:4,
    url: '#services',
    title: "Services",
  },
  {
    id:6,
    url: '#contact',
    title: "Contact",
  },
  
]