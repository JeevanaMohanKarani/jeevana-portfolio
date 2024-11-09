"use client"
import React from 'react'
import Image from "next/image"
import { useTransition,useState } from 'react'
import { TabButton } from './TabButton'
const TAB_DATA=[

    {title:"Skills",
    id:"skills",
content:(
    <ul className='list-disc pl-2'>
        <li>Python</li>
        <li>C language,</li>
        <li>Data Structures using C </li>
        <li>latex</li>
        <li>HTML, CSS</li>
        <li>JavaScript</li>
        <li>java</li>
        <li>My Sql</li>
        <li>Cloud Practitioner</li>
        <li>Auto CAD(model designing)</li>
    </ul>
)},
{
    title:"Education",
    id:"education",
    content:(
        <ul className='list-disc pl-2'>
            <li> ICFAI Foundation for Higher Education deemed to be University, Hyderbad </li>
            <li>PV krishnaRao Memorial Kumar High School, Nuzvid</li>
        </ul>
    )
},
{
    title:"Certifications",
    id:"certifications",
    content:(
        <ul className='list-disc pl-2'>
            <li> Data Pracessing and Visualization,FutureSkills Prime(nasscom)</li>
            <li>Exploratory Data Analysis, FutureSkills Prime(nasscom)</li>
            <li>Acquiring Data, FutureSkills Prime(nasscom)</li>
            <li> MATLAB Onramp, MathWorks</li>
        </ul>
    )
}
]

const AboutSection = () => {
    const [tab,setTab]=useState("skills")
    const [isPending,startTransition]=useTransition();
    
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className="text-white" id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-senter py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="./images/about.jpg" width={500} height={500} alt="about image"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>I'm Thasneem, a programmer with a passion for web development. My journey into web development has been driven by a commitment to deliver the best designs, I strive to bring ideas to life and exceed expectations. When I'm not coding, you can find me painting and reading fiction. Let's collaborate and turn your visions into reality!</p>
        <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={()=>handleTabChange("skills")}  active={tab==="skills"}>{""}Skills{""}</TabButton>
            <TabButton selectTab={()=>handleTabChange("education")}  active={tab==="education"}>{""}Education{""}</TabButton>
            <TabButton selectTab={()=>handleTabChange("certifications")}  active={tab==="certifications"}>{""}Certifications{""}</TabButton>

        </div>
        <div className="mt-8">
            {TAB_DATA.find((t)=>t.id===tab).content}

        </div>
        </div>
        </div>

    </section>
  )
}

export default AboutSection