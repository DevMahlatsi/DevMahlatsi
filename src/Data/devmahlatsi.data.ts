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

export const skills = [
  {
    id: 1, 
    icon: webDevelopment,
    title: "Web Development",
    description: [
      "Building responsive, interactive web applications",
      "Intergrating front-end interfaces with backend-end services",
      "Focusing on performance, accessibility, and usability"
    ]
  },
  {
    id: 2,
    icon: mobileDevelopment,
    title: "Mobile Development",
    description: [
      "Designing interfaces that work well on small screens",
      "Ensuring smooth interactions across different devices",
      "Adapting layouts and features for touch-based use"
    ]
  },
  // {
  //   id: 3,
  //   title: "Desktop Applications",
  //   description: [

  //   ]
  // },
  {
    id: 4,
    icon: uiImplementation,
    title: "UI Implementation",
    description:[
      "Translating designs into usable interfaces",
      "Caring about spacing, hirearchy, and interaction",
      "Iterating when something feels wrong"
    ]
  },{
    id: 5,
    icon: backendApi,
    title: "Backend & APIs",
    description: [
      "Designing and consuming RESTful APIs",
      "Handling data flow between the client and server",
      "Working with databases to store and retrieve data"
    ]
  },
  {
    id: 6,
    icon: uxAwareDesign,
    title: "UX-Aware Design",
    description: ["Thiking through user flows and edge cases",
    "Reducing friction in common interactions",
    "Improving experiences through iteration and feedback"
    ]
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