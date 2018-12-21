import React from "react";
import "./Ending.css";

const Ending = (props) => (
    <div className="ending">

        <h4 className="ending">Awesome Game!  {props.userName}</h4>

        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="winner-area text-center">
                    <img className="winner-img" src="https://media.giphy.com/media/1vZ5dpELvRK8l8kfLW/giphy.gif" />
                </div>
            </div>
        </div>

    </div>
)

export default Ending;
