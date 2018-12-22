import React from "react";
import "./GameCard.css";

const GameCard = props => (

  <div className="gamecard-border text-center">
    <div className="gamecard text-center" onClick={() => props.playGame(props.name)}>

        <img className="gamecard-img"  alt={props.name} src={props.image} />

    </div>
  </div>

);

export default GameCard;
