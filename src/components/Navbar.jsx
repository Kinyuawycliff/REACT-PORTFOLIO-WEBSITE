import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
//import { ImCross } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handleClick = () =>setNav(!nav)

return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">

        {/* Logo */}
        <div className='font-bold'>
            LOGO
        </div>

        {/* Nav-links */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/skills">SKILLS</Link>
                </li>
                <li>
                    <Link to="/work">WORK</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick ={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <RxCross2 />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                <li className="py-6 text-3xl" >
                    <Link onClick={handleClick} to="/">HOME</Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link onClick={handleClick} to="/about">ABOUT</Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link onClick={handleClick} to="/skills">SKILLS</Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link onClick={handleClick} to="/work">WORK</Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link onClick={handleClick} to="/contact">CONTACT</Link>
                </li>
        </ul>

        {/* Social media Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://linkedin.com/in/naitwa-wickie-42a099230">
                        LinkedIn 
                        <FaLinkedin size={25} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Kinyuawycliff">
                        Github 
                        <FaGithub size={25} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#48ceb8]' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Email
                        <HiOutlineMail size={25} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Resume
                        <BsPersonLinesFill size={25}/>
                    </a>
                </li>
            </ul>
        </div>
        

    </div>
)
}

export default Navbar
