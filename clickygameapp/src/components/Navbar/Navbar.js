import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar">
        <a href= "/">Click Game</a>
        <h2>Click an image to begin{props.navMessage}</h2>
        <div className= {props.navMsgColor}></div>
        <h2>
            score: {props.score} <span className="pipe">|</span> High Score: {props.topScore}
        </h2>
    </div>
)
export default Navbar;