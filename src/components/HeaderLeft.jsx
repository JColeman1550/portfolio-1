import React from 'react'
import image from '/public/IMG_2968.jpg' // importing my headshot
import { BiMoon, BiSun } from 'react-icons/bi'
const HeaderLeft = ({darkMode, toggleDarkMode}) => {
    return (
        // HeaderLeft takes 25% of viewport
        // creates dark gray border between headerLeft & Home sections
        <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 
         dark:bg-black dark:text-white sm:border-r dark:border-gray-700"> 

            <div className="flex flex-col gap-5">
            
            <div className="flex flex-col items-center
            justify-center gap-5">
                    <img src={image} alt=""  className="w-32
                    rounded-full" />

                    <div className="text-center space-y-1">
                        <h1 className="text-4xl font-semibold" >Julian 
                            <span className="text-4xl font-light"> T. </span>
                            <span className="font-semibold">Coleman</span>
                        </h1>
                        <h3 className="text-4xl font-light">
                            Software Engineer
                        </h3>
                    </div>
                 <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
                    {
                        // if darkMode is on
                        darkMode ? (
                            <BiSun  className="text-2xl"/>
                        ) : (
                            <BiMoon  className="text-2xl"/>
                        )
                    }
                 </button>
                </div>  
            </div>
         </div> 
    )

}

export default HeaderLeft