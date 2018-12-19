import React from "react";
import "./Ending.css";

const Ending = props => (
    <div className="ending">
        <h1 className="ending-title">{props.condition}</h1>
        <h4 className="ending">Awesome Game! You Scored {props.score}</h4>
        <button className="restart" onClick={() => props.restart()}>Play Again?</button>
      
    </div>
)

export default Ending;
