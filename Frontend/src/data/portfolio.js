import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Code, 
  Terminal, 
  Database, 
  Cloud, 
  Cpu, 
  Globe,
  Server,
  Layout,
  Smartphone,
  Layers,
  Box
} from 'lucide-react';

export const profile = {
  name: "Avinash Kumar",
  role: "Aspiring Software Engineer | Proficient in C/C++ and AI-Web Integration",
  summary: "I’m Avinash Kumar, a first-year B.Tech Computer Science student at Poornima University, Jaipur, with a strong passion for technology, innovation, and creative problem-solving. Over the past 4–5 years, I’ve explored computers and software development deeply, building a versatile skill set that combines programming, AI automation, and web development.",
  hero: {
    eyebrow: "Software Engineer • AI Integration • Web Development",
    headline: "Avinash Kumar",
    summary:
      "I’m the kind of learner who doesn’t wait for instructions — I experiment, research, and build software that pushes boundaries.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
  },
  location: "Jaipur, Rajasthan, India",
  email: "k.avinash000001@gmail.com",
  phone: "+91-7976739844",
  social: {
    github: "https://github.com/KAvinash47",
    linkedin: "https://www.linkedin.com/in/avinash-kumar-1b4412329",
    instagram: "https://www.instagram.com/avinash_._404/",
    email: "mailto:k.avinash000001@gmail.com"
  },
  image: "/assets/avatar/01 - Edited.webp"
};

export const skills = {
  "Languages": {
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "Golang", "Java", "Bash"]
  },
  "Backend": {
    icon: Server,
    items: ["Node.js", "Express", "FastAPI", "REST", "GraphQL", "WebSockets", "Socket.IO"]
  },
  "Data & Infra": {
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Redis", "Cloud SQL", "GCS"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    items: ["GCP (Cloud Run, Document AI)", "AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  "Frontend": {
    icon: Layout,
    items: ["React", "Vite","Next.js", "Tailwind", "WebSocket clients"]
  },
  "Core": {
    icon: Layers,
    items: ["System Design", "Performance Testing", "Observability", "RBAC", "Microservices"]
  }
};

export const experiences = [
  {
    id: "ibm-data",
    role: "Getting Started with Data",
    company: "IBM",
    period: "Issued Nov 2025",
    description: [
      "Foundational certification in data science and analysis.",
      "Credential URL: /certificates/1763199905350.png"
    ]
  },
  {
    id: "aws-sa",
    role: "AWS Certified Solutions Architect",
    company: "Amazon Web Services (AWS)",
    period: "Issued Nov 2025",
    description: [
      "Expertise in designing distributed systems on AWS.",
      "Credential URL: /certificates/1761108278667.jpg"
    ]
  },
  {
    id: "iaeng-member",
    role: "IAENG Membership",
    company: "IAENG",
    period: "Issued Oct 2025",
    description: [
      "International Association of Engineers (Membership ID: 537712).",
      "Credential URL: /certificates/1761108659815.jpg"
    ]
  },
  {
    id: "oracle-ai",
    role: "OCI 2025 Certified AI Foundations Associate",
    company: "Oracle",
    period: "Sep 2025 – Sep 2027",
    description: [
      "Certified in Oracle Cloud Infrastructure AI Foundations.",
      "Credential URL: /certificates/1762352068946.jpg"
    ]
  }
];

export const projects = [
  {
    id: "pdf-csv-pipeline",
    title: "Enterprise PDF to CSV Pipeline",
    tech: ["React", "Node.js", "GCP Document AI", "Cloud SQL", "Docker", "Pandas"],
    description: "High-throughput document processing pipeline converting batch PDFs to structured CSV/SQL data.",
    points: [
      "Built a production pipeline processing 5,000+ documents per batch using GCP Document AI.",
      "Designed dynamic worker scaling (2→75 workers) with rate-limiting for API quotas.",
      "Optimized database performance by transforming individual writes into bulk transactional operations."
    ],
    links: {
      github: "https://github.com/KAvinash47/pdf-to-csv/", 
     
    },
    image: "/assets/pdf2csv.png"
  },
  {
    id: "collabnest",
    title: "CollabNest — Real-Time Collaboration Platform",
    tech: ["Node.js", "Socket.IO", "Redis", "MongoDB", "Vite", "Firebase"],
    description: "Architected a multi-tenant real-time task platform with RBAC, optimistic UI, and cron-based deadline alerts.",
    points: [
      "Validated backend performance under sustained load: p50=52.3ms, p90=151.1ms, p95=241.6ms; sustained 101.38 req/s across 6,000 requests with 0% error rate.",
      "Proven WebSocket stability in load tests (0% connection failures; session length p50=1118.4ms).",
      "Reduced DB reads by 60% via Redis-backed Socket.IO session & task cache."
    ],
    links: {
      github: "https://github.com/KAvinash47/Deadline",
      demo: "https://collab-nest-home.vercel.app/"
    },
    image: "/assets/collab.png"
  },
  {
    id: "ai-fir",
    title: "AI FIR Analysis & Legal-Act Prediction",
    tech: ["Python", "Django", "RAG", "LLaMA2", "AWS"],
    description: "Built a retrieval-augmented LLM pipeline for FIRs; deployed scalable inference for large documents (50MB+).",
    points: [
      "Ranked Top 10 / 400+ teams at Rajasthan Police Hackathon 2024 for system design and accuracy of legal-section predictions.",
      "Evaluated model on a held-out dataset (reported accuracy in project notes)."
    ],
    links: {
      github: "https://github.com/KAvinash47/RJPOLICE_HACK_991_The-Crusade_4"
    },
    image: "/assets/fir.png"
  },
  {
    id: "resume-roaster",
    title: "AI Resume Analyzer",
    tech: ["FastAPI", "React.js", "Python", "Docker", "LLMs"],
    description: "ATS optimization platform leveraging LLMs for semantic parsing and keyword optimization.",
    points: [
      "Built high-performance FastAPI backend with 95%+ accuracy parser.",
      "Processing 100+ daily analysis requests with average response time under 300ms."
    ],
    links: {
      github: "https://github.com/KAvinash47/Resume-Roaster.git"
    },
    image: "/assets/rr.png"
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car Simulation",
    tech: ["JavaScript", "Neural Networks", "Genetic Algorithms"],
    description: "Autonomous driving simulator with collision detection, ray-casting sensors, and genetic evolution.",
    points: [
      "Built autonomous driving simulator with collision detection & obstacle modeling.",
      "Implemented ray-casting sensor system enabling 360° perception.",
      "Scaled rendering to 200+ vehicles at 30 FPS."
    ],
    links: {
      github: "https://github.com/KAvinash47/Self-Driving-Car-Simulation",
      demo: "https://self-driving-car-simulation-five.vercel.app/"
    },
    image: "/assets/nn.png"
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    tech: ["MERN Stack", "Socket.io", "Redux Toolkit"],
    description: "Full-stack chat platform with real-time messaging, secure authentication, and chat rooms.",
    points: [
      "Built full-stack real-time chat platform with WebSocket-based messaging.",
      "Implemented JWT authentication and scalable database architecture.",
      "Deployed with CI/CD pipelines achieving 99% uptime."
    ],
    links: {
      github: "https://github.com/KAvinash47/RealTime-Chat-app",
      demo: "https://real-time-chat-app-client-taupe.vercel.app/"
    },
    image: "/assets/chat.png"
  },
  {
    id: "resqterra",
    title: "ResQTerra - IoT Emergency Response",
    tech: ["Python", "FastAPI", "React.js", "WebSockets", "IoT"],
    description: "Drone-based rescue system utilizing LiDAR, GPR, and Jetson Nano for disaster response.",
    points: [
      "Engineered asynchronous backend processing live telemetry from 5+ IoT sensors.",
      "Selected as finalist by Department of Telecommunications, Government of India at 5G Innovation Hackathon."
    ],
    links: {
      github: "https://github.com/ResQTerra"
    },
    image: "/assets/resq.png"
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Poornima University, Jaipur",
  period: "Aug 2024 – May 2028",
  cgpa: "TBD",
  coursework: "C/C++, Data Structures, Web Development, AI Integration"
};
