import React from "react";
import "./Card.css";

const Card = props => (

  <div className="card-border">
    <div className="card-card">
      <div className="card-img-container" onClick={() => props.clickImage(props.name,props.id,props.matched)}>

        <img className="card-image" alt={props.name} src={props.image} />
      </div>
    </div>
  </div>

);

export default Card;
