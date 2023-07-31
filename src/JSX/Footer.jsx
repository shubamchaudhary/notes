import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai"
import {SiLeetcode,SiCodechef} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

import React from 'react'

export default function Footer() {
  return (
    <div  className="w-20 justify-center hover:opacity-80  opacity-80  border-white fixed left-0  top-[40%]  text-white text-2xl">
         <div className=" rounded-[20px] shadow-gray-600 shadow-md bg-white dark:bg-gray-800  ">
          <ul className=" text-sm text-gray-500 dark:text-gray-400 sm:mt-0 mr justify-center">
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className=" text-4xl hover:text-5xl hover:underline md:mr-6 "><BsInstagram className="mx-10 text-[#bd075ccc]"/></a>
              </li >
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://www.linkedin.com/in/shubam-chaudhary-41005a241/" target="_blank" rel="noreferrer" className="mr-4 hover:text-5xl text-4xl hover:underline md:mr-6">  <AiFillLinkedin className="mx-10 text-[#02136acc]"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://leetcode.com/SHUBAMCHAUDHARY/" target="_blank" rel="noreferrer" className="mr-4 hover:text-5xl text-4xl hover:underline md:mr-6"><SiLeetcode className="mx-10 text-[#e1c706]"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://github.com/shubamchaudhary" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:text-5xl hover:underline md:mr-6"><BsGithub className="mx-10 text-[#000108cc]"/></a>
              </li>
             
              
          </ul>
      </div>
    </div>
  )
}



