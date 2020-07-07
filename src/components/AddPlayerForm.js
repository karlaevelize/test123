import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const sendPlayer = (event) => {
    event.preventDefault();
    console.log("new player sent", name);
    props.addPlayer(name);
    set_name("");
  }

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input 
          value={name} 
          onChange={event => { 
            console.log("new input", event.target.value)
            set_name(event.target.value)}} 
          type="text" 
          placeholder="Name" />
        <button onClick={sendPlayer}>Add</button>
      </p>
    </div>
  );
}