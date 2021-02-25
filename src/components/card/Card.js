import React from "react";
import "./style.css";

function Card(props) {

    return (
        <div className="imgDiv">
            <img src={process.env.PUBLIC_URL + props.image} alt={props.name}></img>
        </div>
    );
}

export default Card;