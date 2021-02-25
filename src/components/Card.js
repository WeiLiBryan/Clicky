import React from "react";

function Card(props) {
    var style = {
        width: "18rem",
    };

    return (
        <div className="img" style={style}>
            <img src={props.image}></img>
        </div>
    );
}

export default Card;