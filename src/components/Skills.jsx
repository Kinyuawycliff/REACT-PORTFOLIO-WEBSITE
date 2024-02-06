import React from 'react';

//The png files imported from the assets folder
import Html from '../assets/html.png'
import Css from '../assets/css-3.png'
import Javascript from '../assets/js.png'
import Reactt from '../assets/atom.png'
import Mysql from '../assets/mysql.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'
import Express from '../assets/express.png'


const Skills = () => {
return (
    <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
                <p className='py-4'>\\ These are the technologies I`ve worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Html} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Css} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Javascript} alt="HTML icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Reactt} alt="HTML icon"/>
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Node} alt="HTML icon"/>
                    <p className='my-4'>NODE JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Express} alt="HTML icon"/>
                    <p className='my-4'>EXPRESS JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Mysql} alt="HTML icon"/>
                    <p className='my-4'>MYSQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Github} alt="HTML icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
                
            </div>
        </div>
    
    </div>
)
}

export default Skills
