

import webDevelopment from "../assets/webDevelopment.svg";
import mobileDevelopment from "../assets/mobileDevelopment.svg";
import uiImplementation from "../assets/userInterface.svg";
import backendApi from "../assets/backendApi.svg";
import uxAwareDesign from "../assets/uiUxDesign.svg";

// import userCentered from "../assets/userCentered.svg";
import fastDelivery from "../assets/fastDelivery.svg";
import qualityDriven from "../assets/qualityDriven.svg";
import problemSolver from "../assets/problemSolver.svg";
import alwaysLearning from "../assets/alwaysLearning.svg";


export const projects = [
  {
    id: "kokoro-stream",
    title: "Kokoro Stream",
    slug: "kokoro-stream",
    description: "An automated greenhouse monitoring system that collects environmental sensor data and provides real-time analytics for optimal crop management.",
    shortDescription: "Automated greenhouse monitoring system with real-time analytics.",
    
    status: "completed",
    featured: true,
    category: "iot",
    year: 2026,
    duration: "3 months",

    team: {
      type: "group",
      teamSize: 3,
      role: "Frontend Developer & API Integration",
      responsibilities: [
        "Developed the React dashboard for monitoring greenhouse data",
        "Integrated backend API for sensor data visualization",
        "Designed responsive UI using Tailwind CSS"
      ]
    },

    problem: "Farmers often struggle to monitor greenhouse conditions remotely, leading to inefficient irrigation and poor crop health.",
    solution: "Built an IoT-based monitoring system that collects sensor data such as temperature, humidity, and soil moisture and displays it in a web dashboard with automated alerts.",

    techStack: ["React", "Tailwind CSS", "Node.js", "Django", "SQL", "IoT Sensors"],
    features: [
      "Real-time greenhouse environmental monitoring",
      "Automated alerts for abnormal conditions",
      "Historical data analytics dashboard",
      "Remote monitoring via web interface"
    ],

    images: [
      "/projects/greenhouse/dashboard.png",
      "/projects/greenhouse/sensors.png",
      "/projects/greenhouse/analytics.png"
    ],

    links: {
      github: "https://github.com/username/smart-greenhouse",
      liveDemo: "https://greenhouse-demo.vercel.app",
      caseStudy: "/projects/smart-iot-greenhouse",
      videoDemo: "https://youtube.com/demo-video"
    },

    metrics: {
      performanceImprovement: "30% reduction in manual monitoring",
      usersTested: 10
    }
  },

  {
    id: "ai-content-studio",
    title: "AI Content Studio",
    slug: "ai-content-studio",
    description: "A machine learning powered platform that generates SEO-optimized blog drafts based on user keywords and content goals.",
    shortDescription: "AI platform for generating SEO-optimized content.",

    status: "in-progress",
    featured: true,
    category: "ai",
    year: 2026,

    team: {
      type: "solo",
      teamSize: 1,
      role: "Full Stack Developer"
    },

    problem: "Content creators spend significant time writing SEO-optimized blog posts manually.",
    solution: "Developed a platform that generates optimized content drafts using machine learning models and keyword input.",

    techStack: ["Python", "TensorFlow", "Next.js", "Node.js", "PostgreSQL"],
    features: [
      "Keyword-based blog generation",
      "SEO optimization suggestions",
      "Content editing interface",
      "Export blog drafts to Markdown"
    ],

    images: ["/projects/ai-content/dashboard.png", "/projects/ai-content/editor.png"],

    links: {
      github: "https://github.com/username/ai-content-studio",
      liveDemo: "https://ai-content.vercel.app",
      caseStudy: "/projects/ai-content-studio"
    }
  },

  {
    id: "portfolio-site",
    title: "Developer Portfolio Website",
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
    title: "Web Development",
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