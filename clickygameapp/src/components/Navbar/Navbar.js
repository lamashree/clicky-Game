import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar">
        <h1>Click Game</h1>
        <div className={props.navMsgColor}>{props.navMessage}</div>
        <h2>
            score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
        </h2>
    </div>
)
export default Navbar;