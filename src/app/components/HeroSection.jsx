"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
             <h1 className="text-white mb-4 mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Hello, I'm {""}</span>
             <br></br>
             <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Jeevana',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        1000,
      
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1>
             <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">My name is Jeevana Karani. I'm highly interested in coding and technology, although I'm currently at a beginner level. With an optimistic outlook, I'm eager to learn more and am determined to give my best in everything I pursue.</p>
        <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white' >Hire Me</button>
            <a
    href="https://drive.google.com/uc?id=1oD79ry2c8pMm7M_TqLpDDiq75LdL22qL&export=download"
>
  <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
      Download CV
    </span>
  </button>
</a>        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >            <div className='rounded-full bg-[#181818] relative w-[250px] h-[250px]px  lg:w-[250px] h-[250px] '>
            <Image
            src="./images/pfp.png"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt="hero image"
        width={240}
        height={250}/>
           </div>
 </motion.div>
        </div>
    </section>
  )
}

export default HeroSection