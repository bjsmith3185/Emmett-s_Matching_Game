import React from "react";
import "./Title.css";

const Title = props => (
    <div className="title">
        <h1 className="header">{props.children}</h1>
        <h3 className="score">current score: {props.score}</h3>
        <h4 className="top-score">top score: {props.topScore}</h4>
    </div>
)

export default Title;
