import React from "react";
import "../styles/Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            {/* <p>{cards[0]}</p> */}
            <img src={props.image}/>
        </div>
    )
};

export default Card;