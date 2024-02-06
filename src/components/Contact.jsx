import React from 'react'

const Contact = () => {
    //app.gerform.io
    
return (
    <div  name="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method='POST' action="https://getform.io/f/d25ebd68-4d4f-4cc4-b759-7a5e479243d0" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">\\ Submit the form below or send me an Email - naitwawickie@gmail.com</p>

            </div>

            <input className="bg-[#ccd6f6] p-2 outline-none" type="text" placeholder="Name" name='name' />
            <input className="my-4 p-2 bg-[#ccd6f6] outline-none" type="email" placeholder="Email" name="email"  />
            <textarea className="bg-[#ccd6f6] p-2 outline-none" name="message" placeholder="Message" cols="30" rows="10"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let`s collaborate</button>

        </form>
        
    </div>
)
}

export default Contact
