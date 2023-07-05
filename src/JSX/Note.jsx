import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable";
import {BiNotepad} from "react-icons/bi"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className=" hover:h-10 ">
    <Draggable >
    <div className="note text-center shadow-md hover:shadow-lg hover:font-semibold hover:text-3xl">
     <h1 className="font-bold hover:cursive hover:uppercase hover:text-[#ffab4a] hover:text-4xl"><BiNotepad className=" absolute   text-[#ffab4a]"/>{props.title}</h1>
      <h4 className="hover:text:4xl">{props.content}</h4>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    </Draggable>
    </div>
  );
}

export default Note;
