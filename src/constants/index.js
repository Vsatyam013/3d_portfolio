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
    IIM,
    meta,
    starbucks,
    Solidity,
    tesla,
    tictactoe,
    hardhat,
    ethersjs,
    acm,
    shopify,
    carrent,
    StableCoin,
    SmartLottery,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DeFi Developer",
      icon: mobile,
    },
    {
      title: "Smart Contract Developer",
      icon: backend,
    },
    {
      title: "NFT Creator",
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
      name: "Solidity",
      icon: Solidity,
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
      name: "ethers JS",
      icon: ethersjs,
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
      name: "hardhat",
      icon: hardhat,
    },
   
  ];
  
  const experiences = [
    {
      title: "PR-Team Coordinator",
      company_name: "IIM",
      icon: IIM,
      iconBg: "#383E56",
      date: "August 2023 - April 2024",
      points: [
        "Acted as a liaison between event organizers and speakers, facilitating effective communication.",
        "Authored detailed event reports summarizing key activities and outcomes.",
        "Led publicity efforts, increasing event visibility and participant engagement.",
      ],
    },
    {
      title: "Event Team Core Member",
      company_name: "ACM",
      icon:acm,
      iconBg: "#E6DEDD",
      date: "Auguest 2023 - April 2024",
      points: [
        "Served as a core member of the ACM event team, contributing to event planning and execution.",
        "Successfully conducted workshops, providing technical knowledge and skill-building opportunities to participants.",
        "Coordinated and managed guest speakers, ensuring smooth communication and seamless event delivery.",
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
      name: "Collateral StableCoin",
      description:
        "Developed a collateral-backed stablecoin leveraging smart contracts to ensure price stability and security through over-collateralization and automated processes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "foundry",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: StableCoin,
      source_code_link: "https://github.com/Vsatyam013/SmartLottery",
    },
    {
      name: "tic-tac-toe",
      description:
        "Developed a web-based Tic-Tac-Toe game using HTML, CSS, and JavaScript, featuring an interactive user interface and responsive gameplay.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Web-socket",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/Vsatyam013/tic-tac-toe",
    },
    {
      name: "SmartLottery",
      description:
        "Created a decentralized lottery application where participants pay to enter, and a Chainlink-integrated smart contract randomly selects a winner at regular intervals, ensuring fairness and automation.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "hardhat",
          color: "green-text-gradient",
        },
        {
          name: "Chainlink",
          color: "pink-text-gradient",
        },
      ],
      image: SmartLottery,
      source_code_link: "https://github.com/Vsatyam013/SmartLottery",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };