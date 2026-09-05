import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pcbizness,
  parsec,
  proshop,
  cpp,
  python,
  currencyConverterImage,
  pong,
  baseConverter,
  drumKit,
  shaale,
  sitar,
  nft,
  accenture
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1MwerfiXroOq8ayB0N0N2X8J1jkDWsxJ4/view?usp=drive_link",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Advanced Application Engineering Analyst",
    company_name: "Accenture, Bangalore, India",
    icon: accenture, // replace with accenture icon when you add it
    iconBg: "#A100FF",
    date: "Oct 2025 - Present",
    points: [
      "Building production-grade GenAI agents on GenWizard: Accenture's internal AI Agent Manager platform.",
      "Developed Pre-Conversion Check Agent: RAG pipeline + Anthropic Claude for autonomous SAP S/4HANA migration readiness analysis and error fix package generation.",
      "Developed Asset Accounting Agent: multi-scenario LLM reasoning over GL inputs, fetches live SAP data via custom ABAP OData APIs exposed through AWS API Gateway, generates to-be design recommendations and automated PowerPoint reports.",
      "Built end-to-end: ABAP OData API development → AWS API Gateway integration → Python agent scripts → LLM orchestration → structured output generation.",
      "Skills: Python, LLMs, RAG, Prompt Engineering, Agentic AI, Anthropic Claude, ABAP, AWS API Gateway, SAP S/4HANA.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Shaale, Bangalore, India",
    icon: shaale,
    iconBg: "#fb1d1d",
    date: "July 2024 - Nov 2024",
    points: [
      "Developed a React Native mobile application with a low-latency video player supporting multi-track audio playback.",
      "Implemented recording functionality and video upload features for seamless sharing on social media platforms.",
      "Built a multitrack controller to manage and synchronize multiple audio tracks effectively.",
      "Ensured a user-friendly experience and cross-platform compatibility for both Android and iOS devices.",
      "Skills: React Native, TypeScript.",
    ],
  },
  {
    title: "Software Engineer",
    company_name:
      "IIT Dharwad - SITAR (Speech Image Text and Artificial Intelligence Research) App and ICEI 2024 website",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Led the development of a full-stack MERN website for the Speech Processing Lab.",
      "Implemented admin functionality for user management and content moderation.",
      "Integrated fake speech detection (FSD) model for quality control, machine translation, and real-time audio processing.",
      "Created the ICEI 2024 website using WordPress.",
      "Skills: MERN stack (MongoDB, Express.js, React.js, Node.js), Django, Redux.js, Nginx.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "DMRC (Delhi Metro Rail Corporation)",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Developed and maintained software solutions for Telecom & AFC systems.",
      "Utilized C++ and the MERN stack (MongoDB, Express.js, React, Node.js) for system enhancements.",
      "Managed data with SQL and MongoDB to support fare collection and operational efficiency.",
      "Assisted in troubleshooting and integrating telecom and AFC systems.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "PCBizness Group",
    icon: pcbizness,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Engaged in a project-based internship, contributing expertise in HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented responsive design elements and frameworks for enhanced web development.",
      "Skills: HTML, CSS, JavaScript, Bootstrap",
    ],
  },
  {
    title: "Parsec Designer",
    company_name: "Parsec Team, IIT Dharwad",
    icon: parsec,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Transformed IIT Dharwad’s Annual Tech Fest with dynamic and engaging content using Adobe Premiere Pro and After Effects.",
      "Showcased mastery in video production and post-production.",
      "Skills: Adobe Premiere Pro, After Effects",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Identity DApp",
    description:
      "A decentralized identity and access management system using NFTs for IIT Dharwad. Enables students and faculty to mint identity NFTs, register for courses, pay semester fees, access amenities, and receive verifiable course completion certificates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ipfs",
        color: "purple-text-gradient",
      },
      {
        name: "hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/gupta-rajan/NFT-IdentityDapp",
    website_link: "", 
  },
  {
    name: "ProShop",
    description:
      "A full-featured eCommerce platform built from scratch using the MERN stack. Includes product browsing, shopping cart, user authentication, and checkout with PayPal integration. Admin dashboard supports CRUD operations for products, users, and orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "red-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: proshop, // replace with the actual image import or path
    source_code_link: "https://github.com/gupta-rajan/proshop-v2",
    website_link: "https://pro-shop-cldg.onrender.com/",
  },
  {
    name: "SITAR",
    description:
      "A full-stack website for the Speech Processing Lab at IIT Dharwad. Integrated fake speech detection (FSD), machine translation between Indian languages, and real-time audio processing. Enables users to upload audio and receive translated output.",
    tags: [
      {
        name: "mern stack",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "red-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
    ],
    image: sitar,
    source_code_link: "https://github.com/gupta-rajan/speech-app",
    website_link: "https://sitar.iitdh.ac.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
