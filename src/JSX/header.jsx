import React from "react";
import {BiNotepad} from "react-icons/bi"
import { useState,useEffect } from "react";
import {BsLightningChargeFill} from 'react-icons/bs'

function Header(){
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
        if(darkMode){
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
      }, [darkMode]);
     return <div className="">
        <header className="shadow-lg flex justify-between w-full  shadow-gray-400 h-[110px] text-4xl dark:bg-darkbg bg-[#f6b607cc] ">
       <h1 className='text-7xl pl-12 pt-5 pb-5 text-white cursive flex'> <BiNotepad className="mx-6 "/> NOTES </h1>
       <button className="mr-16 text-white text-[50px] dark:text-gray-500" onClick={() => setDarkMode(!darkMode)} ><BsLightningChargeFill/></button>
    </header>
      </div>
}

export default Header


