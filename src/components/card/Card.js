import React from "react";

function Card(props) {

    return (
        <div className="img">
            <img src={process.env.PUBLIC_URL + props.image} alt={props.name}></img>
        </div>
    );
}

export default Card;