import React from "react";
import "./style.css";



function MemorygameCard(props) {
  return (
    <div className="col-md-3 col-sm-6 col-xs-6" >
      <img onClick={() =>props.ClickedImage(props.id)} src={props.image} alt={props.name} className="img-thumbnail hero-img"/>
    </div>

  );
}

export default MemorygameCard;