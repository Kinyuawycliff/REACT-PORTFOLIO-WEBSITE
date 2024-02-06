import React from 'react'

const About = () => {
return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-col-2 gap-8">
                <div className="md:text-left sm:text-right pb-8 pl-4">
                    <p className="font-bold text-4xl inline border-b-4 border-pink-600 ">
                        About
                    </p>
                </div>
                <div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>Hi I`m Kinyua, nice to meet you.Explore our site and discover endless possibilities.</p>
                    </div>
                    <div>
                        <p>
                        As a dedicated software engineer,
                        I am fueled by a relentless passion for creating impactful solutions.
                        My journey in website development is driven by the belief that technology can shape the future.
                        With every line of code, I envision a world transformed a seamless digital landscape where innovation bridges gaps,
                        empowers communities, and drives progress. Through my work, I aspire to leave an indelible mark,
                        revolutionizing how we interact, learn, and thrive. 🌟🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default About
