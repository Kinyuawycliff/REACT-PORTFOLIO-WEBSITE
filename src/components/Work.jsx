import React from 'react'
import BlogImg from '../assets/Blog.jpg'
import EcommerceImg from '../assets/E-commerce.jpg'
import PhotographyImg from '../assets/Photography.jpg'
import RecipeImg from '../assets/Blog.jpg'


const Work = () => {
return (
    <div name='work' className="w-full min-h-screen md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen">
            <div></div>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Work</p>
                <p className="py-6">\\ Check out some of my recent work </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">

                {/* container for the work projects */}
                {/* project 1 */}
                <div style={{backgroundImage:`url(${EcommerceImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>  
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            E-commerce App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div style={{backgroundImage:`url(${RecipeImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>  
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Recipe App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                {/* Project 3 */}
                <div style={{backgroundImage:`url(${PhotographyImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>  
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Photography App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Project 4 */}
                <div style={{backgroundImage:`url(${BlogImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>  
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Blog App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                {/* End of the projects */}

            </div>
        </div>
    </div>
)
}

export default Work
