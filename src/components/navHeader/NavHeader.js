import React from "react";
import "./style.css";

function navHeader(props) {
    return (
        <nav className="navbar bg-dark sticky-top">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span className="message">{props.message}</span>
            <span>Score: {props.current} | Top Score: {props.top}</span>
        </nav>
    );
}

export default navHeader;