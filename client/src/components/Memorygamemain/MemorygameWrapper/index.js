import React from "react";
import "./style.css";

function MemorygameWrapper(props) {
  return <div>
    <div className="row wrapper">
       <h1 className="title">Superhero Guessing Game</h1>
       <h3>Click an image to earn points, but don't click an image twice</h3>
      </div>
    <div className="wrapper row">{props.children}</div>
  </div>
}

export default MemorygameWrapper;