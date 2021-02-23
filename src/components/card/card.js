import React from "react";

function Card(props) {
    var style = {
        backgroundImage: props.image,
        width: "18rem"
    };

    return (
        <div className="card" style={style}>
            <img className="card-img-top" src="#" alt="Card image cap" />
        </div>
    );
}

export default Card;