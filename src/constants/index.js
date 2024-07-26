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
    greentree,
    corneltech,
    gbcs,
    gmu,
    tcgcrest,
    womanium,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "Quantum Computing",
      icon: backend,
    },
    {
      title: "Artificial Intelligence",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IT Software Intern",
      company_name: "GreenTree Group",
      icon: greentree,
      iconBg: "#383E56",
      date: "Nov 2022 -- Jan 2023",
      points: [
        "Automated tasks such as sending scheduled emails, scraping emails for attachments/links, and creating company to-do lists to improve company efficiency and save 3+ hours each day on redundant tasks.",
        "Implemented cloud-based virtual machine (Azure) to facilitate cloud migration of company.",
        "Handled collection and management of human resources data..",
      ],
    },
    {
      title: "Backend Develope",
      company_name: "GBCS",
      icon: gbcs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 -- May 2023",
      points: [
        "Coded formulas essential for flight efficiency in Python such as emissions of VOCs, cleaning operations, fuel consumptions (function of engine type, propellers, boilers, terminal operations), metal emissions and discharge.",
        "Built an API for the above functions and used Postman to test all API calls.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Used Django to implement appropriate API calls to integrate frontend with the backend.",
      ],
    },
    {
      title: "Womanium Global Quantum Scholar",
      company_name: "Womanium Quantum",
      icon: womanium,
      iconBg: "#383E56",
      date: "July 2023 - Sep 2023",
      points: [
        "Selected to receive a scholarship worth 900 USD to attend the program.",
        "Worked with industry partners such as QuEra, TerraQuantum, QWorld, and Xanadu.",
        "Enhanced skills in data analysis, quiksit, julia.",
      ],
    },
    {
      title: "AI/ML Fellow",
      company_name: "Break Through Tech",
      icon: corneltech,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Selected as 1 of 70 fellows among 1,400+ applicants from undergraduate students.",
        "Participated in an AI Studio—an exclusive project development opportunity partnered with industry-leading companies.",
        "Enhanced skills in data analysis, Pandas, Numpy, Pytorch, and TensorFlow.",

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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };