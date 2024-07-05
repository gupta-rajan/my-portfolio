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
  { id: "resume", 
    title: "Resume", 
    url: "https://drive.google.com/file/d/1MwerfiXroOq8ayB0N0N2X8J1jkDWsxJ4/view?usp=drive_link" 
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Software Developer",
    company_name: "DMRC (Delhi Metro Rail Corporation)",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Developed and maintained software solutions for DMRC.",
      "Collaborated with teams to ensure efficient project execution and delivery.",
      "Implemented solutions to improve operational efficiency and user experience.",
      "Provided technical support and training to end-users.",
      "Skills: JavaScript, React, Node.js, MongoDB",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "IIT Dharwad - SITAR (Speech Image Text and Artificial Intelligence Research) App",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Led the development of a full-stack MERN website for the Speech Processing Lab.",
      "Implemented admin functionality for user management and content moderation.",
      "Integrated fake speech detection (FSD) model for quality control and real-time audio processing.",
      "Explored models for speech recognition, sentiment analysis, and voice synthesis, with graphical representations for model understanding.",
      "Analyzed response time and accuracy metrics for different models.",
      "Skills: MERN stack (MongoDB, Express.js, React.js, Node.js), Django, Reduxjs, Nginx.",
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
    name: "ProShop",
    description:
      "Build an eCommerce platform from the ground up with React, Redux Toolkit, Express & MongoDB. Admin functionality is also added for managing products, users, and orders.",
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
    name: "Currency Converter",
    description:
      "An npm package that provides a simple and efficient way to convert between different currencies. It supports various currencies and is easy to integrate into any JS project.",
    tags: [
      {
        name: "npm",
        color: "red-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "package",
        color: "blue-text-gradient",
      },
    ],
    image: currencyConverterImage, // Replace with the actual image you have for the project
    source_code_link: "https://github.com/gupta-rajan/rajan-currency-converter",
    website_link: "https://www.npmjs.com/package/rajan-currency-converter",
  },
  {
    name: "Pong Game",
    description:
      "A simple implementation of the classic Pong game using the Pygame library in Python. Features two-player gameplay, collision detection, and a scoring system.",
    tags: [
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: pong, // Replace with the actual image you have for the project
    source_code_link: "https://github.com/gupta-rajan/pong-game.git",
    website_link: "https://drive.google.com/file/d/1nfHawZ_o56zJLdYatLv4NlO9tdmtfjuP/view?usp=drive_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
