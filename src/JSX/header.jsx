import React from "react";
import {BiNotepad} from "react-icons/bi"

function Header(){
   return <header className=" h-auto text-4xl  bg-[#ffab4a] ">
       <h1 className='text-7xl pl-12 pt-5 pb-5 text-white cursive flex'> <BiNotepad className="mx-6 "/> NOTES </h1>
    </header>
}

export default Header


