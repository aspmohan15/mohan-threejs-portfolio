export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const CommunityAndEngagement = [
  {
    id: 1,
    name: 'React + AI Meetup – Rippling, Bangalore',
    position: 'Community Event',
    img: '/assets/rippling.png',
    review:
      'Explored React Compiler, Memory Leakage Prevention, and practical LLM automation using Google Gemini, OpenAI, and Vercel AI SDK.',
  },
  {
    id: 2,
    name: 'ReactPlay Meetup by DevRev – Bangalore',
    position: 'Community Event',
    img: 'assets/dev-rev.png',
    review:
      'Gained insights on scalable React architecture, performance optimization techniques, and building UI design systems for enterprise apps.',
  },
  {
    id: 3,
    name: 'Apache Pinot Real-Time Data Meetup',
    position: 'Community Event',
    img: 'assets/meesho.png',
    review:
      'Learned about real-time analytics pipelines, LLM-driven workflows, and stream-to-decision systems for large-scale platforms.',
  },
  {
    id: 4,
    name: 'JavaScript 10-Year Celebration – Thoughtworks',
    position: 'Community Event',
    img: 'assets/thoughtworks.png',
    review:
      'Focused on AI-augmented TDD, advanced LLM prompt engineering, and GitHub Copilot Agent Mode for productivity in JavaScript and React development.',
  },
];

export const myProjects = [

  {
    title: 'Splitr - Expense Manager App',
    desc: 'Splitwise Clone is a full-featured expense manager app that allows users to track, split, and settle group expenses seamlessly. It features real-time calculations, responsive UI, and intuitive interactions for effortless expense management.',
    subdesc: 'Expense manager app built with Next.js, React, Tailwind CSS, and Convex.',
    href: 'https://ai-splitwise-clone.vercel.app',
    logo: '/assets/project-logo2.png',
    texture: '/textures/project/project3.mp4',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Convex',
        path: '/assets/convex.png',
      },
    ],
  },

  {
    title: 'AI Image Editor',
    desc: 'AI Image Editor is a web application that allows users to edit, enhance, and manipulate images using modern frontend tools and AI-powered capabilities. Users can apply filters, adjust colors, and perform advanced edits with a seamless, responsive interface.',
    subdesc: 'AI-powered image editing tool built with Next.js, React, Tailwind CSS, Fabric.js, and Convex.',
    href: 'https://ai-image-editor-eight.vercel.app',
    logo: '/assets/project-logo3.png',
    texture: '/textures/project/project2.mp4',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Fabric.js',
        path: '/assets/fabricjs.png',
      },
    ],
  },
  {
    title: 'Apple AirPods Clone',
    desc: 'Apple AirPods Clone is a responsive product page replicating the official AirPods site. It features smooth scrolling, interactive sections, and visually appealing layouts with AOS animations for a dynamic user experience.',
    subdesc: 'Responsive Apple AirPods product page built with React and AOS animations.',
    href: 'https://adoring-goodall-a5a0c0.netlify.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'AOS',
        path: '/assets/aos.png',
      },
    ],
  },
  {
    title: 'YouTube Clone',
    desc: 'YouTube Clone is a video streaming web application that allows users to search, play, and navigate videos seamlessly. It features a responsive interface with video playback, channel browsing, and dynamic content rendering, replicating key functionalities of the YouTube platform.',
    subdesc: 'Video streaming app built with React, React Router, React Player, and Material-UI.',
    href: 'https://project-youtube-clone-three.vercel.app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'React Router',
        path: '/assets/react-router.png',
      },
      {
        id: 3,
        name: 'Material-UI',
        path: '/assets/mui.png',
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Aditya Birla Fashion & Retail Ltd',
    pos: 'Front-End Engineer',
    duration: 'Feb 2023 - Present',
    title: "I build high-performance, SEO-optimized e-commerce UIs using React.js, Next.js, and Redux-Saga, focusing on improving performance and user experience.",
    icon: 'assets/work_experince/abfrl.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: '2hub Travel',
    pos: 'Front-End Engineer',
    duration: 'Aug 2022 - Feb 2023',
    title: "Developed a responsive B2B travel platform using React, Next.js, and MUI, integrating travel data via REST APIs for a seamless user experience.",
    icon: 'assets/work_experince/2hub.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Kalanju',
    pos: 'Full Stack Engineer',
    duration: 'Apr 2022 - Aug 2022',
    title: "Built dynamic UIs using React and MUI, developed RESTful APIs with Node.js and Fastify, and integrated PostgreSQL for scalable applications.",
    icon: 'assets/work_experince/kalanju.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Manvaasam',
    pos: 'Photographer & Designer',
    duration: 'Jan 2020 - Nov 2021',
    title: "Designed marketing visuals and UI mockups using Figma, and managed product listings and SEO optimization for platforms like Amazon and Flipkart.",
    icon: 'assets/work_experince/manvaasam.webp',
    animation: 'salute',
  },
];

