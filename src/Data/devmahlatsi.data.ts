

import webDevelopment from "../assets/webDevelopment.svg";
import mobileDevelopment from "../assets/mobileDevelopment.svg";
import uiImplementation from "../assets/userInterface.svg";
import backendApi from "../assets/backendApi.svg";
import uxAwareDesign from "../assets/uiUxDesign.svg";

// import campusClassSystem from "/campus-class-system.jpeg";

const lockedInHome = "https://res.cloudinary.com/a9tmwutr/image/upload/v1782987551/Screenshot_2026-06-29_145551_xfccgz.png"
const lockedInJobs = "https://res.cloudinary.com/a9tmwutr/image/upload/v1782988680/Screenshot_2026-07-02_123641_xutd3i.png"
const lockedInOrganisation = "https://res.cloudinary.com/a9tmwutr/image/upload/v1782988681/Screenshot_2026-07-02_123656_ooxzmo.png"

// import userCentered from "../assets/userCentered.svg";
import fastDelivery from "../assets/fastDelivery.svg";
import qualityDriven from "../assets/qualityDriven.svg";
import problemSolver from "../assets/problemSolver.svg";
import alwaysLearning from "../assets/alwaysLearning.svg";


export const projects = [
    {
  "id": "lockedin",
  "title": "LockedIn",
  "slug": "lockedin",
  "description": "A full-stack AI-powered recruitment platform that automates CV screening and candidate-job matching. LockedIn lets organisations post vacancies, candidates apply with a single CV upload, and an AI pipeline automatically scores and ranks applicants against job requirements — giving recruiters a structured shortlist instead of a pile of unsorted applications. The platform supports three distinct roles (applicant, recruiter, admin) each with a dedicated console.",
  "shortDescription": "It reads a CV, scores it against the job requirements, and hands the recruiter a ranked shortlist instead of 200 unsorted PDFs. Status: ongoing, because it's being built right, not fast.",
  "status": "planned",
  "featured": true,
  "category": "web",
  "year": 2026,
  "duration": "Ongoing",
  "team": {
    "type": "solo",
    "teamSize": 1,
    "role": "Full Stack Developer",
    "responsibilities": [
      "Designed and built the entire Next.js frontend across four role-based consoles (public, applicant, recruiter, admin)",
      "Architected the App Router route-group structure with role-based middleware guards",
      "Built a reusable design system from scratch — typography, color tokens, and component library",
      "Designed and built the AI result panel showing match score, extracted skills, and reasoning",
      "Built the recruiter review workflow (qualified / rejected / flagged for review) with rejection reason capture",
      "Built the admin console — job posting CRUD with a dynamic requirements builder, organisation profile management, and team member role management",
      "Designed the Next.js API route handler layer that proxies and authenticates every request to the backend",
      "Architecting the Django REST API backend with Bearer token authentication",
      "Designing the Celery + Redis async pipeline for CV processing",
      "Integrating OpenAI for CV-to-job-requirement scoring and skill extraction",
      "Planning containerised deployment (Docker, Railway, Cloudflare R2)"
    ]
  },
  "problem": "Recruiters and small organisations are overwhelmed by manually reading every CV that comes in for a vacancy, while candidates get little to no visibility into where their application stands or why a decision was made. Existing ATS platforms are expensive, overbuilt for small teams, and rarely show candidates a transparent reason for a rejection.",
  "solution": "Built a lean recruitment platform where candidates upload a CV once and apply to any open role in seconds, while an AI pipeline automatically extracts skills and experience from the CV and scores it against the job's requirements. Recruiters get a ranked, AI-annotated shortlist instead of raw applications, and can qualify, reject, or flag candidates with a reason that's visible back to the applicant. Admins manage job postings, organisation profile, and team access from a dedicated console.",
  "techStack": [
    "Next.js",
    "React",
    "TypeScript",
    "Django",
    "Django REST Framework",
    "Celery",
    "Redis",
    "PostgreSQL",
    "OpenAI API",
    "PyMuPDF",
    "Docker"
  ],
  "features": [
    "Public job and organisation discovery with search and filtering",
    "One-click apply using a CV already stored on the candidate's profile",
    "AI-powered CV scoring with extracted skills, years of experience, and a written rationale",
    "Real-time processing status timeline (uploaded → queued → processing → completed)",
    "Recruiter console with AI-ranked applicant shortlists, filterable by job",
    "Three-way recruiter decision workflow — qualified, rejected, or flagged for review — with rejection reasons visible to the applicant",
    "Admin console for job posting CRUD with a dynamic, toggleable requirements builder",
    "Organisation profile management with a custom key-value company overview editor",
    "Team member management with inline role editing (recruiter/admin) and removal",
    "Follow organisations to get notified of new postings",
    "Role-based route protection across applicant, recruiter, and admin consoles",
    "Async CV processing pipeline so applications never block on AI response time"
  ],
  "images": [
    lockedInHome,
    lockedInJobs,
    lockedInOrganisation
  ],
  "links": {
    "github": "https://github.com/DevMahlatsi",
    "caseStudy": "/projects/lockedin"
  },
  "metrics": {
    "consoles": 4,
    "apiEndpoints": "25+",
    "aiScoringCost": "<$0.001 per CV"
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
    description: "Requirements get defined once, not re-discovered in week six."
  },
  {
    id: 2,
    title: "Build",
    description: "Clean, maintainable code. Not because a style guide said so — because rewriting it later is a worse use of time.",

  },
  {
    id: 3,
    title: "Refine",
    description: "Edge cases get found before your users find them."
  },
  {
    id: 4,
    title: "Deliver",
    description: "Shipped. Working. Not \"should work.\""
  }
]

export const portfolio = [
  
]

export const skills = [
  {
    id: 1,
    icon: webDevelopment,
    title: "Web Develoepment",
    description: ["Responsive by default. Fast because slow is a choice someone else made."]
  },
  {
    id: 2,
    icon: mobileDevelopment,
    title: "Mobile Development",
    description: ["Works on the phone in your hand, not just the one in the demo."]
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
    description: ["I translate a design file into something that actually renders correctly the first time."]
  },
  {
    id: 5,
    icon: backendApi,
    title: "Backend & APIs",
    description: ["The part that has to be right. Schema, endpoints, data flow — no duct tape."]
  },
  {
    id: 6,
    icon: uxAwareDesign,
    title: "UX-Aware Design",
    description: ["I notice friction. I remove it. I don't need a workshop to do either."]
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
    description: "I ship iteratively. You'll see progress every week, not a surprise in month three."
  },
  {
    id: 3,
    icon: qualityDriven,
    title: "Quality Driven",
    description: "Code that's still readable when someone else has to touch it. Including me, in six months."
  },
  {
    id: 4,
    icon: problemSolver,
    title: "Problem Solver",
    description: "Complex problems get broken down. That's the job. I don't find it impressive either."
  },
  {
    id: 5,
    icon: alwaysLearning,
    title: "Always Learning",
    description: "New tools get evaluated, not chased. If it's actually better, I use it."
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
