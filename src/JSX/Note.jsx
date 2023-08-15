import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable";
import {BiNotepad} from "react-icons/bi"


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="ml-[10%] mr-[10%] transform transition duration-500 hover:scale-110">
    <div className=" hover:h-8 w-[100px] ">
    <Draggable >
      
    <div className="note  dark:bg-gray-700 cursor-pointer text-center shadow-md  hover:shadow-lg ">
     
      <h1 className="font-bold dark:text-gray-300 hover:cursive text-xl uppercase text-[#ffab4a] "><BiNotepad className=" absolute   text-[#ffab4a]"/>{props.title}</h1>
      <h4 className=" dark:text-gray-300 ">{props.content}</h4>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    
    </Draggable>
    </div>
    </div>
  );
}

export default Note;
