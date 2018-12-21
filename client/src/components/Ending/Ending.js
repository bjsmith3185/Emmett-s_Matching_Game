import React from "react";
import "./Ending.css";

const Ending = props => (
    <div className="ending">

        <h4 className="ending">Awesome Game! You Scored {props.score}</h4>
        <button className="restart" onClick={props.homePage}>Play Again?</button>

    </div>
)

export default Ending;
