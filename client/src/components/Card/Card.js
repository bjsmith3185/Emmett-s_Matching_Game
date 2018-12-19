import React from "react";
import "./Card.css";

const Card = props => (

  <div className="border">
    <div className="card">
      <div className="img-container" onClick={() => props.clickImage(props.name,props.id,props.matched)}>

        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>

);

export default Card;
