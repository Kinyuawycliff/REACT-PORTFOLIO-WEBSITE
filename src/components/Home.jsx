import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';


const Home = () => {
    //const navigate = useNavigate();

    //const handleClick = (e) =>{
    //   e.preventDefault();
     //   navigate('/work')
//}

    return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi,my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kinyua wycliff</h1>
            <h2 className="
            text-4xl sm:text-7xl text-bold text-[#8892b0]">I`m a Full stalk developer </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
                I`m a full-stalk developer specializing in building (and occasionaly
                desiging) exceptional digital experiences Currently, I`m focused on 
                building responsive full-stalk web applications
            </p>
            <div>
                <Link to="/work">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items cemter hover:bg-pink-600 hover:border-pink-600 ">View work
                <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 my-1" />
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default Home
