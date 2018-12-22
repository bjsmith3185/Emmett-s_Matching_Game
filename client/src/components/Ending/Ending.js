import React from "react";
import "./Ending.css";

const Ending = (props) => (

    <div className="ending">
        <div className="ending-title">Awesome Game!</div>
        <div className="winner-area text-center">

            <img className="winner-img" src={props.clip} alt={props.clip} />

        </div>
    </div>

)

export default Ending;
