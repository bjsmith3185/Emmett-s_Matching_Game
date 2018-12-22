import React from "react";
import "./Ending.css";

const Ending = (props) => (
    <div className="ending">

        <div className="ending-title">Awesome Game!  {props.userName}</div>

        {/* <div className="row">
            <div className="col-lg-12 text-center"> */}
                <div className="winner-area text-center">
                    {/* <img className="winner-img" src="https://media.giphy.com/media/1vZ5dpELvRK8l8kfLW/giphy.gif" /> */}
                    <img className="winner-img" src="https://media.giphy.com/media/5h7tcpS1O2ojo48DzX/giphy.gif" />

                </div>
            {/* </div>
        </div> */}

    </div>
)

export default Ending;
