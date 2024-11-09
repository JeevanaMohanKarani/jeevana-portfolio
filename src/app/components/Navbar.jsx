"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navlinks = [
    { href: "#about", title: "About" },
    { href: "#project", title: "Projects" },
    { href: "#contact", title: "Contact" },
    // Add more links as needed
  ];
const Navbar = () => {
    const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
        <Link href="/" className="text-lg md:text-5xl text-white font-semibold">..</Link>
        <div className=' mobile-menu block md:hidden'>
            {
                !navbarOpen?(
                    <button  onClick={()=>setNavbarOpen(true) } className=' flex  items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white '><Bars3Icon className='h-5 w-5'/></button>
                ):(
                    <button  onClick={()=>setNavbarOpen(false) } className=' flex  items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white '><XMarkIcon className='h-5 w-5'/></button>

                )
            }

        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
           <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
        {navlinks.map((link, index) => (
          <li key={index}>
            <Navlink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>

        </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navlinks}/>:null}
    </nav>
  )
}

export default Navbar;