import project1 from "../images/project1.webp";
import project2 from "../images/project2.webp";
import project3 from "../images/project3.webp";
import project4 from "../images/project4.webp";
import project5 from "../images/project5.webp";
import project6 from "../images/project6.webp";
import project7 from "../images/project7.webp";

const projects = [
  {
    id: 1,
    slug: "chat-web-app",
    tag: "#chat-web-app",
    title: "Chat App (Client) - with Push Notifications",
    description:
      "A modern chat application client built with React, TypeScript, and Vite, designed for real-time communication with clean UI and fast performance.",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    image: project1,
    details: {
      features: [
        "Real-time messaging interface",
        "Built with React + TypeScript",
        "Powered by Vite for fast development builds",
        "ESLint-configured for code quality",
        "Styled using CSS",
      ],
      highlights:
        "React for UI development, TypeScript for type safety, Vite for fast bundling, ESLint for maintainable code, and CSS for styling.",
      about: "Built for real-time communication with a clean and responsive interface.",
      gettingStarted: "Make sure Node.js and a package manager are installed.",
      prerequisites: ["Node.js (v16+ recommended)", "npm, yarn, pnpm, or bun"],
      installation:
        "Install dependencies and run the development server to preview the app locally.",
      commands:
        "git clone https://github.com/muhammadranju/chat-app-client.git\ncd chat-app-client\nbun install\nbun run dev",
      structure:
        "The app keeps the interface focused on messaging, performance, and usability.",
      structurePoints: [
        "Responsive chat layout",
        "Clean component structure",
        "Fast local development workflow",
      ],
      nextSteps: "Add authentication, persistence, and live notifications.",
    },
  },
  {
    id: 2,
    slug: "competition-website",
    tag: "#screenwriting-competition-website",
    title: "Cut To Black Prize - Screenwriting Contests",
    description:
      "Cut to Black Prize is a curated screenwriting competition with a strong craft-focused concept and a premium submission experience.",
    tech: ["React", "TypeScript", "Vite"],
    image: project2,
    details: {
      features: [
        "Responsive landing experience",
        "Modular component architecture",
        "Contest overview and submission flow",
        "Clean TypeScript-powered frontend",
      ],
      highlights:
        "React and Vite provide a fast, modern frontend experience with strong performance and maintainability.",
      about: "A polished contest website built for a premium writer-focused experience.",
      gettingStarted: "Install dependencies and start the frontend locally.",
      prerequisites: ["Node.js 18 or newer", "A modern browser"],
      installation:
        "Install dependencies and start the Vite development server.",
      commands:
        "git clone https://github.com/muhammadranju/cut-to-black-prize-frontend.git\ncd cut-to-black-prize-frontend\nnpm install\nnpm run dev",
      structure:
        "The layout is optimized for quick information access and trust-building.",
      structurePoints: [
        "Simple contest storytelling",
        "Clear feature presentation",
        "Responsive layout for all screen sizes",
      ],
      nextSteps: "Add judges, submission logic, and dynamic contest updates.",
    },
  },
  {
    id: 3,
    slug: "portfolio-website-prisma",
    tag: "#full-stack-project-build",
    title: "Full Stack Portfolio Website Prisma",
    description:
      "A dynamic portfolio website built for content management, SEO, and scalable project showcasing.",
    tech: ["Next.js", "React"],
    image: project3,
    details: {
      features: [
        "Content management-friendly structure",
        "Responsive design across devices",
        "SEO-ready metadata and page structure",
        "Admin-ready data handling",
      ],
      highlights:
        "Next.js, React, and a database-backed content model create a flexible portfolio architecture.",
      about: "Designed to make portfolio updates fast and easy without a full redesign.",
      gettingStarted: "Set up the project dependencies and run the development server.",
      prerequisites: ["Node.js 18 or newer", "Package manager"],
      installation:
        "Install dependencies and start the app in development mode.",
      commands:
        "git clone https://github.com/muhammadranju/portfolio-website-prisma.git\ncd portfolio-website-prisma\nnpm install\nnpm run dev",
      structure:
        "The app is organized to separate presentation, data, and content management concerns cleanly.",
      structurePoints: [
        "Editable portfolio sections",
        "Reusable layout components",
        "Database-connected content flow",
      ],
      nextSteps: "Add authentication, richer CMS controls, and blog management features.",
    },
  },
  {
    id: 4,
    slug: "careerforge-ai",
    tag: "#ai-website",
    title: "CareerForge AI",
    description:
      "An AI-powered career assistant for portfolio building, job-fit analysis, and guided professional growth.",
    tech: ["Next.js", "MongoDB", "Prisma"],
    image: project4,
    details: {
      features: [
        "AI-assisted portfolio creation",
        "Skill gap and job-fit analysis",
        "Mock interview and coaching support",
        "Career insights and learning suggestions",
      ],
      highlights:
        "AI workflows and modern web technology combine to create a tailored career-building experience.",
      about: "Built around modern AI-assisted personal and professional growth features.",
      gettingStarted: "Install the project and configure your environment for AI-related features.",
      prerequisites: ["Node.js 18 or higher", "API keys for AI services"],
      installation:
        "Run the frontend locally and connect the required services for the AI experience.",
      commands: "npm install\nnpm run dev",
      structure:
        "The platform groups key career workflows into discoverable, goal-focused sections.",
      structurePoints: [
        "Portfolio modules",
        "Career guidance modules",
        "Personalized dashboard experience",
      ],
      nextSteps: "Integrate deeper analytics and AI workflow personalization.",
    },
  },
  {
    id: 5,
    slug: "aura-dashboard-nextjs",
    tag: "#dashboard-design-nextjs",
    title: "Aura Dashboard Design in Nextjs",
    description:
      "A clean and responsive admin dashboard concept with modular data presentation and scalable UI design.",
    tech: ["React", "Node.js", "AI API"],
    image: project6,
    details: {
      features: [
        "Responsive admin dashboard UI",
        "Modern data cards and navigation",
        "Reusable dashboard modules",
        "Next.js frontend foundation",
      ],
      highlights:
        "The design focuses on readability, structure, and clean data presentation for modern dashboards.",
      about: "A sleek dashboard concept built to be easily extended for analytics or business operations.",
      gettingStarted: "Install dependencies and run the dashboard locally.",
      prerequisites: ["Node.js 16+", "npm, yarn, or pnpm"],
      installation:
        "Install dependencies and run the Next.js app in development mode.",
      commands:
        "git clone https://github.com/muhammadranju/aura-dashboard-nextjs.git\ncd aura-dashboard-nextjs\nnpm install\nnpm run dev",
      structure:
        "The dashboard organizes metrics and content into reusable blocks for quick comprehension.",
      structurePoints: [
        "Modular widget system",
        "Responsive admin layout",
        "Extensible dashboard sections",
      ],
      nextSteps: "Connect real analytics, filters, and user-specific views.",
    },
  },
  {
    id: 6,
    slug: "backend-api-development",
    tag: "#backend-api-development",
    title: "Multi-Vendor E-Commerce API",
    description:
      "A scalable REST API for a multi-vendor e-commerce platform with authentication, cart flow, product management, and order handling.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: project5,
    details: {
      features: [
        "JWT and social auth support",
        "Product, category, and seller management",
        "Cart, wishlist, and checkout flows",
        "Reviews, orders, and admin-ready APIs",
      ],
      highlights:
        "Node.js, Express, and MongoDB provide a strong backend stack for a flexible commerce platform.",
      about: "Built to support modern ecommerce operations with clean API separation.",
      gettingStarted: "Set up environment variables and run the API server.",
      prerequisites: ["Node.js", "MongoDB", "A configured environment file"],
      installation:
        "Install dependencies, configure env values, and start the server.",
      commands:
        "git clone https://github.com/muhammadranju/multi-vendor-ecommerce-api.git\ncd multi-vendor-ecommerce-api\nnpm install\ncp demo.config.env .env\nnpm run dev",
      structure:
        "The backend is organized around routes, models, and validation to keep the platform maintainable.",
      structurePoints: [
        "RESTful resource routes",
        "Validated payload handling",
        "MongoDB data persistence",
      ],
      nextSteps: "Add billing, notifications, and broader admin reporting features.",
    },
  },
  {
    id: 7,
    slug: "full-stack-development",
    tag: "#full-stack-development",
    title: "NextBuy - AI-Driven E-commerce Platform",
    description:
      "A futuristic shopping platform with personalized recommendations, AI-enabled search, and a modern storefront experience.",
    tech: ["Next.js", "Tailwind CSS"],
    image: project7,
    details: {
      features: [
        "Personalized product recommendations",
        "AI-powered shopping assistance",
        "Product filters and cart flow",
        "Checkout and order tracking",
      ],
      highlights:
        "The platform highlights AI and modern frontend patterns for a premium online shopping experience.",
      about: "Created to blend a strong storefront UI with smart shopping features.",
      gettingStarted: "Install the app and connect your required APIs for AI and commerce flows.",
      prerequisites: ["Node.js 16+", "MongoDB", "API credentials"],
      installation:
        "Clone the repo, install dependencies, and launch the project.",
      commands:
        "git clone https://github.com/arifhassansky/nextBuy.git\ncd nextBuy\npnpm install\npnpm run dev",
      structure:
        "The project structure keeps storefront, backend logic, and AI features separate for easier scaling.",
      structurePoints: [
        "Modern storefront architecture",
        "AI and order management modules",
        "Scalable deployment approach",
      ],
      nextSteps: "Expand AI recommendations and integrate deeper payment and analytics flows.",
    },
  },
];

export default projects;
