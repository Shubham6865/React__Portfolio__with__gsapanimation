import { DiReact } from "react-icons/di";
import { SiInstagram, SiFramer, SiJavascript, SiReactbootstrap, SiMui, SiSass, SiReactrouter, SiRedux, SiChakraui, SiStyledcomponents } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { BiLineChart } from "react-icons/bi";

import { project1, project2, project3, project4, project5, project6, project7, project8 } from './images/index'
import { GrToast } from "react-icons/gr";


export const menu = [
  { name: "About" },
  // { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
]



export const projects = [
  {
    id: 1,
    title: 'Ochi Website Clone',
    image: project1,
    category: "Web",
    status: "Completed",
    data: {
      description: `Incorporating animations into the Ochi clone project elevates the user experience by creating a more dynamic and interactive interface. These subtle transitions and effects not only enhance visual appeal but also guide users through actions, making interactions more intuitive. By leveraging modern animation libraries, the Ochi clone delivers a seamless and engaging experience, keeping users captivated and improving overall usability. `,
      demoLink: "https://ochidesigncloneshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        iconColor: "white",
      },
      {
        name: "React Icon",
        icon: <DiReact />,
        iconColor: "red",
      },


    ]
  },
  {
    id: 2,
    title: 'Tasty Burger',
    image: project2,
    category: "Web",
    status: "Completed",
    data: {
      description: `Welcome to Tasty Burger - where your cravings meet the ultimate burger bonanza! Crafted with the power of React, React Router DOM, CSS, and React Bootstrap, our landing page is your gateway to a world of mouth-watering goodness. Glide through our Home, About, Our Menu, Shop, Blog, and Contact sections with the ease of a perfectly toasted bun! With sizzling CSS styling and juicy, responsive React Bootstrap components, every click is a bite of pure burger bliss. Hungry for more? Dive in and let Tasty Burger serve up the flavor you deserve!`,
      demoLink: "https://restaurantlandingshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },

      {
        name: "React Bootstrap",
        icon: <SiReactbootstrap />,
        iconColor: '#3FD9F7'
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "React Tostify",
        icon: <GrToast />,
        iconColor: "orange",
      },
    ]
  },
  {
    id: 3,
    title: 'Gericht Restaurant Website',
    image: project3,
    category: "Web",
    data: {
      description: `This is a modern restaurant website built using React, MUI, React Icons, JavaScript, and CSS. It features a sleek landing page, detailed about and history sections, a special menu for today, and a convenient book dining option, offering a seamless and user-friendly experience.`,
      demoLink: "https://gerichtrestaurantshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "React Icon",
        icon: <DiReact />,
        iconColor: "red",
      },


    ]
  },
  {
    id: 4,
    title: 'AI website UI',
    image: project4,
    category: "web",
    status: "completed",
    data: {
      description: `React-powered landing page. Seamlessly navigate with React Router DOM, experiencing interactive sections on GPT-3, OpenAI, and captivating case studies. Stay informed through regular blog updates, delving into the future of AI. Crafted with React, CSS, and JavaScript, this project blends aesthetics.This Project with reference figma design`,
      demoLink: "https://gpt3shubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "React Icon",
        icon: <DiReact />,
        iconColor: "red",
      },
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },

    ]
  },
  {
    id: 5,
    title: 'React Admin Dashboard',
    image: project5,
    category: "web",
    status: 'In progress',
    data: {
      description: `The React Admin dashboard allows users to view project details, see a list of all products, remove products, and monitor product sales. Note: A few features are still under development.`,
      demoLink: "https://admindashboardshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "MUI",
        icon: <SiMui />,
        iconColor: "blue",
      },
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Sass",
        icon: <SiSass />,
        iconColor: "pink",
      },
    ]
  },
  {
    id: 6,
    title: 'Movie Details Application',
    image: project6,
    category: "web",
    status: 'completed',
    data: {
      description: `Build a movie detail app from scratch using Axios for API calls, React Router DOM for routing, and SASS for styling. Dive into React with Redux Toolkit and Thunk Middleware to manage asynchronous actions. Key features include a Redux Thunk-powered search filter and a responsive Movie Card Slider with react-slick.`,
      demoLink: "https://moviedetailshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        iconColor: "yellow",
      },
      {
        name: "React Router",
        icon: <SiReactrouter />,
        iconColor: "pink",
      },


    ]
  },
  {
    id: 7,
    title: 'Crypto lens',
    image: project7,
    category: "Web",
    status: "Completed",
    data: {
      description: `Developed Crypto Lense, a web app using Chakra UI, Framer Motion, React ChartJS, and Axios, providing real-time cryptocurrency and exchange data. Integrated with the CoinGecko API, the app offers smooth navigation, responsive design, and interactive charts for easy exploration of coin details and exchange data. This project highlights my skills in React, API integration, and crafting user-friendly, dynamic interfaces for cryptocurrency enthusiasts.`,
      demoLink: "https://cryptolensshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },

      {
        name: "Chakraui",
        icon: <SiChakraui />,
        iconColor: '#3FD9F7'
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Chart JS",
        icon: <BiLineChart />,
        iconColor: "orange",
      },
    ]
  },
  {
    id: 8,
    title: 'KnowledgeNest (Udemy Clone)',
    image: project8,
    category: "Web",
    status: "Completed",
    data: {
      description: `Built KnowledgeNest, an online learning platform with React and styled-components. It features responsive design, course categories, a filtering system, and a cart for managing personalized learning. Users can explore curated courses and access real-time pricing, with ongoing deals for affordability.`,
      demoLink: "https://knowledgenestshubhamparade.netlify.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },

      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Styled-components",
        icon: <SiStyledcomponents />,
        iconColor: "orange",
      },
    ]
  },
]



export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Intermediate",
      },
      {
        skill: "Sketch",
        level: "Beginner",
      },
      {
        skill: "XD",
        level: "Beginner",
      },
    ]
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Experienced",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Redux",
        level: "Experienced",
      },
      {
        skill: "GSAP",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },

      {
        skill: "Java",
        level: "Beginner",
      },
      {
        skill: "C#",
        level: "Beginner",
      },

    ]
  },
]


export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Shubham6865?tab=repositories",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/shubham_parade_",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/shubhamparade/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const approach = [
  {
    phase: "Phase 1",
    title: 'Planning & Strategy',
    desc: " We'll collaborate to map out your websites goals, target audience, and key functionalities. We'll discuss things like site struture, navigaton, and contet requirememt"
  },


  {
    phase: "Phase 2",
    title: 'Development & Progress Update',
    desc: " Once we agree on the plan, I cue my lofi playlist and dive into coding From initial sketches to polished code, I keep you updated every step of the way."
  },
  {
    phase: "Phase 3",
    title: 'Development & launch',
    desc: " This is where the magic happens! Based on the approved design, I'll translte everything into functional code, building your website from th ground up "
  },



];
