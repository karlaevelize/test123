import React from "react";
import "./Player.scss"

export default function Player(props) {

  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (<ul>
      <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
        {props.name} {" "}
        (score:{props.score}) 
        <button onClick={onClickIncrement}>increment</button>
      </li>
    </ul>
  );
}