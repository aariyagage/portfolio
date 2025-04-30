"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import Preloader from "@/components/preloader";
import { motion } from "framer-motion";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";



// Magic UI Icons
const Icons = {
  python: () => <img src="/icons/python.svg" alt="Python" className="w-8 h-8" />,
  javascript: () => <img src="/icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />,
  nodedotjs: () => <img src="/icons/nodedotjs.svg" alt="Node.js" className="w-8 h-8" />,
  html5: () => <img src="/icons/html5.svg" alt="HTML5" className="w-8 h-8" />,
  react: () => <img src="/icons/react.svg" alt="React" className="w-8 h-8" />,
  typescript: () => <img src="/icons/typescript.svg" alt="TypeScript" className="w-8 h-8" />,
};



gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const heroRef = useRef(null);
  if (showPreloader) return <Preloader onFinish={() => setShowPreloader(false)} />;

  const project = [
    {
      title: "Brev",
      date: "Sep 2024 – Present",
      description: "Co-founded Brev, an AI-driven study platform transforming user notes into cheat sheets, quizzes, and mnemonic aids. Led full-stack development, built NLP pipelines, and scaled product adoption to 2,000+ students through iterative QA and user testing.",
      tech: ["Node.js", "React", "MongoDB", "Playwright", "TailwindCSS", "AI"],
      link: "https://www.meetbrev.com/",
      image: "/projects/brev.png",
    },
    {
      title: "TrendIntel",
      date: "Mar 2025 – Apr 2025",
      description: "Built a market intelligence dashboard using Flask and Gemini API to aggregate sentiment analysis, search trends, and stock data into actionable insights.",
      tech: ["Python", "Flask", "Pandas", "yFinance", "Gemini API", "Recharts"],
      link: "https://github.com/aariyagage/company-insights-dashboard",
      image: "/projects/trendintel.png",
    },
    {
      title: "Ctrl+Shift",
      date: "Feb 2025 – Mar 2025",
      description: "Developed a CLI tool and REST API that scrapes and structures Google Trends data in under 10 seconds, streamlining market research workflows.",
      tech: ["Python", "PyTrends", "Flask", "REST API", "Pandas"],
      link: "https://github.com/aariyagage/ctrlshift",
      image: "/projects/ctrlshift-preview.png",
    },
    {
      title: "Ramp Debugging Tool",
      date: "Jan 2025",
      description: "Debugged and optimized frontend components, fixing 7+ UI bugs related to filtering, pagination, and state management in Ramp’s internal tools.",
      tech: ["React", "JavaScript", "DOM", "Testing", "CodeSandbox"],
      link: "https://codesandbox.io/p/github/aariyagage/ramp-fe-challenge/main?workspaceId=ws_7spd6pu8EL1KMfhCi6X8d3",
      image: "/projects/ramp-preview.png",
    },
    {
      "title": "Online Bookstore (CSE360 Project)",
      "date": "Sep 2024 – Dec 2024",
      "description": "Developed a full-stack online bookstore in a 5-member team as part of a Software Engineering course. Led requirements analysis, system design, and functional testing across four project phases. Built class diagrams, use case models, and implemented core bookstore features including user authentication, inventory management, and checkout workflows.",
      "tech": ["Java", "Object-Oriented Design", "Functional Testing", "Software Engineering Principles"],
      "link": "https://github.com/hiitshai/CSE360_Final_Project",
      "image": "/projects/asu-bookstore-preview.png"
    },
    {
      "title": "Match-Stick (HackMIT 2024)",
      "date": "Sep 2024",
      "description": "Built a full-stack web app at HackMIT to help participants form teams based on skills, interests, and AI-driven persona matching. Integrated autonomous Fetch.ai agents for intelligent matching and real-time updates via Convex backend. Designed a scalable and responsive interface using React.js.",
      "tech": ["React.js", "Convex", "MongoDB", "Clerk", "Fetch.ai uAgents"],
      "link": "https://github.com/yourusername/hackathon-team-formation-app",
      "image": "/projects/hackmit-preview.png"
    },  
    {
      "title": "Graph Processor (CSE464 Project)",
      "date": "Feb 2025 – Apr 2025",
      "description": "Built a Java-based graph processor to parse, visualize, and manipulate graphs in DOT format. Implemented node/edge addition and removal, BFS/DFS search algorithms, and a Random Walk Search using design patterns (Template and Strategy). Integrated GitHub Actions for CI/CD and applied rigorous unit testing with Maven.",
      "tech": ["Java", "Graphviz", "JUnit", "Maven", "GitHub Actions", "Design Patterns"],
      "link": "https://github.com/aariyagage/CSE-464-2025-agage5",
      "image": "/projects/CSE464-finalproject.png"
    },      
    {
      title: "Portfolio Website",
      date: "Apr 2025",
      description: "Designed and built a responsive portfolio website using Next.js 15, TailwindCSS, and Framer Motion. Deployed on Vercel with optimized performance, responsive layouts, and dynamic animations. Implemented SEO best practices and full mobile support.",
      tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Vercel", "TypeScript"],
      link: "https://portfolio-aariyas-projects.vercel.app/", 
      image: "/projects/portfolio-preview.png" // you can create a small screenshot of your portfolio homepage
    },
    
  ];

  const words = ["Full-Stack Dev", "Designer", "AI Builder", "Creative Coder"];
  const workExperiences = [
    {
      logo: "/brev-logo.png",
      company: "Brev",
      title: "Co-Founder",
      date: "Sep 2023 – Present",
      description: "Co-founded Brev, an AI-driven study platform transforming notes into cheat sheets, quizzes, and mnemonics. Led full-stack development using Node.js, React, and MongoDB. Built NLP pipelines for intelligent content generation and scaled product adoption to 2,000+ students through iterative QA, user feedback, and growth marketing."
    },
    {
      logo: "/ASU-logo.png",
      company: "Arizona State University",
      title: "Front Desk Aide University Housing @ ASU",
      date: "Aug 2021 – May 2025",
      description: "Delivered in-person support for 1,500+ residents, balancing hospitality with university safety protocols. Provided issue resolution and administrative support, enhancing resident satisfaction in a fast-paced student housing environment."
    },
    {
      logo: "/home-revise-logo.png",
      company: "Home Revise Education",
      title: "UI/UX Intern",
      date: "May 2022 – Aug 2022",
      description: "Designed UI/UX flows and improved onboarding experience for a mobile learning platform. Increased retention by optimizing accessibility and engagement."
    }
  ];


  return (
    <div className="relative">
      <div data-scroll-container>
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="min-h-screen bg-[#FFFCF7] dark:bg-black"
  >

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative z-10 flex flex-col items-center justify-center pt-16 pb-8 min-h-[60vh] overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-2"
          >
            Actively Seeking Summer&#39;25 Internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            Aariya Gage
          </motion.h1>

          <FlipWords
            words={words}
            duration={1000}
            className="text-2xl font-medium text-neutral-500 dark:text-neutral-400 mb-6"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex space-x-6 mb-6"
          >
            <Link href="https://github.com/aariyagage" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/aariya-gage-88468924a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://drive.google.com/file/d/1ZN4BlfkpfJFVR57nc7wPyOQ_SBpAgtBo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className="border border-neutral-300 dark:border-neutral-700 rounded-full px-4 py-1 text-sm text-neutral-700 dark:text-neutral-300 hover:opacity-80 transition">
    Resume
  </button>
</Link>

          </motion.div>
        </section>

        
        

        {/* About Me */}
        <section className="w-full px-6 pt-0 pb-24 md:pl-16 -mt-10 bg-[#FFFCF7] dark:bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12 relative">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-12 relative max-w-[1100px]"> {/* this is your invisible box */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-5 z-10 text-justify lg:pl-12"
            >
              <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white heading-section mb-12">about me</h2>

              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Hey, I&#39;m Aariya - a Computer Science student with a deep love for building things that are useful,
                intentional, and clean. My background spans full-stack development, AI/ML, QA, and product design.
              </p>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
               I love sitting at the intersection of clean design and functional code. Whether I&#39;m working on frontend interactions, backend logic, or wrangling data for insights. I care about crafting experiences that make sense - & feel good to use.
              </p>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Outside of tech, I&#39;m all about creative storytelling. I&#39;m passionate about marketing, social media, and
                content - the kind that builds community and actually resonates.
              </p>
              <p className="italic text-sm text-neutral-500">i build with intention</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <img
                src="/scrapbook-main.png"
                alt="Aariya collage"
                className="w-[100%] max-w-[800px] object-contain"
              />
            </motion.div>
          </div>
          </div>
        </section>

        {/* Projects */}
        <section className="p-10 pt-0">
          {/*<h2 className="heading-section">explore my projects</h2>*/}
          <h2 className="text-3xl font-extrabold text-center text-neutral-800 dark:text-white heading-section mb-12">explore my projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-3xl mx-auto">
            {project.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-black shadow-md hover:shadow-xl transition duration-300"
              >
                <Image
  src={item.image}
  alt={item.title}
  width={800}
  height={400}
  className="w-full h-48 object-cover"
/>

                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.date}</p>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tech?.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="px-6 pt-10 sm:pb-20 md:pb-20 md:pl-16">
        <h2 className="text-3xl font-extrabold text-center text-neutral-800 dark:text-white heading-section mb-12">
  work experience
</h2>


          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {workExperiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex items-start gap-4 w-full">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-1">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">{exp.title}</p>
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400 max-w-xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap md:text-right min-w-max md:pr-16">
                  {exp.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills + Orbiting Tech */}
<section className="mt-[1rem] sm:mt-[-4rem] w-full px-6 pt-20 pb-32 bg-[#FFFCF7] dark:bg-black">
<h2 className="text-3xl font-extrabold text-center text-neutral-800 dark:text-white heading-section mb-12">my tech stack & skills</h2>
{/*<h2 className="text-3xl font-semibold text-center text-neutral-800 dark:text-white mb-12">*/}

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* LEFT: Skills List */}
    <div className="space-y-8 pl-12 md:pl-16 lg:pl-14">
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">Frontend</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">React, Next.js, TailwindCSS, HTML, CSS</p>
  </div>
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">Backend</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">Node.js, Express.js, Flask, REST API Development</p>
  </div>
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">Databases</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">MongoDB, PostgreSQL, SQL</p>
  </div>
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">AI / ML</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">Python, spaCy, Gemini API, scikit-learn</p>
  </div>
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">Testing & Tools</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">Playwright, Postman, Git, GitHub, VS Code, Figma</p>
  </div>
  <div>
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">Other</h3>
    <p className="font-normal text-neutral-600 dark:text-neutral-400">Cloud Basics (AWS EC2/S3, Vercel), DSA (Data Structures & Algorithms), Linux CLI</p>
  </div>
</div>

    {/* RIGHT: Orbiting Icons */}
    <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
    <OrbitingCircles iconSize={40}>
  <Icons.python />
  <Icons.javascript />
  <Icons.nodedotjs />
  <Icons.html5 />
  <Icons.react />
  <Icons.typescript />
</OrbitingCircles>

<OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
  <Icons.python />
  <Icons.javascript />
  <Icons.nodedotjs />
  <Icons.html5 />
  <Icons.react />
  <Icons.typescript />
</OrbitingCircles>

    </div>
  </div>
</section>
{/* Get in Touch */}
<section className="w-full px-6 pt-20 pb-32 bg-[#FFFCF7] dark:bg-black">
  <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
    <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white">
      get in touch
    </h2>
    <p className="text-md text-neutral-600 dark:text-neutral-400 max-w-2xl">
      Whether you want to collaborate, have a cool opportunity, or just want to chat — I&#39;m always happy to connect!
    </p>
    <a
      href="mailto:aariyagage@gmail.com"
      className="mt-6 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition text-md font-medium"
    >
      Say Hello 👋
    </a>
  </div>
</section>
      </motion.main>
    </div>
    </div>
  );
}
