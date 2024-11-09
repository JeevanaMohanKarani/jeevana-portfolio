"use client"
import React,{useState, useRef} from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Premium design Restaurant website",
    //description: " This project is a Currency Converter application that supports conversions between over 160 currencies. Utilizing a free exhangeRate API, the app provides real-time exchange rates, allowing users to quickly and accurately convert amounts from one currency to another. ",
    image: "./images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/taj-royal-restaurant",
    previewUrl: "https://thasneem9.github.io/taj-royal-restaurant/",
  },
    {
      id: 2,
      title: "InstaWave Full stack Social Media ",
      //description: "This is a full-stack social media app, named 'instawave' created as part of my first year 1 month summer internship project, allows users to message each other real time using socket.io and play multiplayer games like toc-tac-toe with ecah other in real time.",
      image: "./images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/InstaWave---Copy",
      previewUrl: "https://www.youtube.com/watch?v=HR9lszepjRQ",
    },
    {
      id: 3,
      title: "View Point Homes Frontend Website",
      //description: ": This project involved the development of a responsive and visually appealing frontend website for View Point Homes, which is now published to google map websies. Mainly used HTML5,css,Javascript.",
      image:"./images/projects/22.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://thasneem9.github.io/viewPointTouristHome/",
      previewUrl: "https://thasneem9.github.io/viewPointTouristHome/",
    },
    {
      id: 4,
      title: "Different Birds and their Sounds",
      //description: "This project showcases various bird species and their unique sounds. Developed using HTML, CSS, and JavaScript. Upon selection, users can listen to authentic bird calls and learn more about each species. The project highlights the use of audio integration and responsive design  created for bird enthusiasts of all ages.",
      image: "./images/projects/333.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/birdSounds",
      previewUrl: "https://thasneem9.github.io/birdSounds/",
    },
    {
      id: 5,
      title: "Full Stack Blog Application",
      //description: "Thisproject was built using React, Postgress,Express andNode Js. Allows users to create blog posts, search for variuos posts, filter based on categories, perform various crud operations. Users can delete, edit posts and profile, Like and unlike posts. Blog Daily is the place for all learning enthusiasts!",
      image: "./images/projects/blog.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/crud-blog-app",
      previewUrl: "https://youtu.be/rtoxiNASIXA",
    },
    {
      id: 6,
      title: "React Todo List application",
      //description: " This project is a dynamic and user-friendly Todo List application built using React. The app allows users to manage their tasks with features such as adding new tasks, editing existing ones, deleting tasks, and marking tasks as completed. Learnt about key React concepts, including state management, component reusability, and event handling.",
      image: "./images/projects/444.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/thasneem9/todoapp",
      previewUrl: "https://thasneem9.github.io/todoapp/",
    },
    {
      id: 7,
      title: "Currency Converter App",
      //description: " This project is a Currency Converter application that supports conversions between over 160 currencies. Utilizing a free exhangeRate API, the app provides real-time exchange rates, allowing users to quickly and accurately convert amounts from one currency to another. ",
      image: "./images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/ex231currency",
      previewUrl: "https://github.com/thasneem9/ex231currency/blob/main/README.md",
    },
    {
      id: 8,
      title: "3D Card Tailwind react",
      //description: " This project is a Currency Converter application that supports conversions between over 160 currencies. Utilizing a free exhangeRate API, the app provides real-time exchange rates, allowing users to quickly and accurately convert amounts from one currency to another. ",
      image: "./images/projects/7.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/3d-card/",
      previewUrl: "https://thasneem9.github.io/3d-card/",
    },
    
    {
      id: 9,
      title: "Mini Projects using HTML CSS BOOTSRAP",
      //description: "This project is a collection of mini-projects built using HTML, CSS, and Bootstrap. Each mini-project focuses on a specific aspect of web development, such as responsive layouts, flex and CSS styles, or interactive UI components. Built as part of capstone project during Angela Yu's coding bootcamp on Udemy.",
      image: "./images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/PORTFOLIO",
      previewUrl: "https://thasneem9.github.io/PORTFOLIO",
    },
  ];

export const ProjectSection = () => {
    const [tag,setTag]=useState("All");
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const handleTagChange=(newTag)=>{
        setTag(newTag)
    }
    const filteredProjects=projectsData.filter((project)=>{
        return project.tag.includes(tag)
    })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
  
  return (
    <section id="project">
    <h2  className='text-center text-4xl font-bold text-white mb-4'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag onClick={handleTagChange} name="All"  isSelected={tag==="All"}/>
        <ProjectTag onClick={handleTagChange} name="Web"  isSelected={tag==="Web"}/>

    </div>
  
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              //description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
