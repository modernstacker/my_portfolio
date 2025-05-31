import {
  logo,
  github,
  menu,
  close,
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  java,
  clanguage,
  python,
  wordpress,
  carrent,
  jobit,
  tripguide,
  klk,
  billsplitter,
  movielibrary,
  portfolio,
  onepiecegaming,
  cloud,
  Q,
  sim,
  search_product,
  memorial_day,
  virtual_tours,
} from "../assets"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "Backend",
    icon: java,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "Wordpress",
    icon: wordpress,
  },
  {
    title: "ThreeJS",
    icon: threejs,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "C++",
    icon: clanguage,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Qualcomm",
    icon: Q,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2024",
    points: [
      "Executed a machine learning system to enhance the profitability of real-time bidding auctions, engineering a feedback control microservice that optimized traffic volume and resulted in €2M projected annual gross revenue savings.",
      "Built and deployed an unsupervised revenue optimization model, trained on billions of auction logs, that generates €1M+ annual recurring revenue uplift. Monitored performance through continuous A/B testing and offline/online evaluation.",
      "Implemented a classification algorithm with a focus on high calibration achieving 95%+ AUC, enabling advertisers to make precise and calibrated bids based on predictions for ads view ability and video completion rates",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Simform",
    icon: sim,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Nov 2021",
    points: [
      "Developed responsive, user-friendly web interfaces using React, TypeScript, and Tailwind CSS to support various SaaS platforms.",
      "Collaborated closely with UX/UI designers to translate Figma prototypes into functional components with pixel-perfect accuracy.",
      "Integrated RESTful APIs and GraphQL services to ensure dynamic, real-time data interaction across the application.",
      "Implemented client-side performance optimization, accessibility standards (WCAG), and cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "CloudBeds",
    icon: cloud,
    iconBg: "#E6DEDD",
    date: "May 2016 - Dec 2018",
    points: [
      "Developed and maintained an advanced hotel management system, leading to a 25% improvement in operational efficiency and a 20% increase in guest satisfaction ratings.",
      "Designed and implemented services with a microservices architecture and utilized RESTful APIs for seamless data flow.",
      "Created a microservice to efficiently handle large data processing tasks from a MySQL database.",
      "Ensured application reliability and scalability through deployment on cloud platforms like Google Cloud Functions, Google Compute Engine, and Google Cloud Storage.",
      "Developed and deployed a robust authentication service leveraging JWT for secure and seamless user access.",
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
    name: "React Portfolio",
    description:
      "A responsive portfolio created in learning Three.js and React enables user to contact via emailjs for job seeking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/shitofshit/React-portfolio",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive movie library enabling users to browse, search, and movies with real-time data fetched via external APIs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: movielibrary,
    source_code_link: "https://github.com/shitofshit/React-WilsonMovieLibrary",
  },
  {
    name: "Gaming website",
    description:
      "A wordpress based website that enables simple navigation to game download, payment gateway and galleries",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: onepiecegaming,
    source_code_link: null,
  },
  {
    name: "Virtual Tours",
    description:
      "Built an interactive, responsive virtual museum with smooth scrolling and animation to enhance user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: virtual_tours,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "Memorial Day Sale",
    description:
      "Redesigned and developed a responsive WooCommerce store with optimized UX, custom themes, and payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: memorial_day,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "Search Product",
    description:
      "Developed a WooCommerce plugin enabling advanced product search by attributes to enhance UX and filter precision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
    ],
    image: search_product,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
