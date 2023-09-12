import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import {SiAddthis} from 'react-icons/si'

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setExpanded(false)
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className=" create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 3}
          
        />
        <Zoom in={isExpanded}>
            <div className="justify-end flex">
            <SiAddthis onClick={submitNote} className="cursor-pointer hover:text-[#da7e15cc] dark:hover:text-black text-[40px] rounded-full dark:text-gray-600 text-[#e7a312cc]" />
            </div>
          
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
