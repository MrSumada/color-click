import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [ColorR, setColorR] = useState(Math.floor(Math.random()*256));
    const [ColorG, setColorG] = useState(Math.floor(Math.random()*256));
    const [ColorB, setColorB] = useState(Math.floor(Math.random()*256));

    const dimensions = 100/props.num;

    function ChangeColor() {
        setColorR(Math.floor(Math.random()*256));
        setColorG(Math.floor(Math.random()*256));
        setColorB(Math.floor(Math.random()*256));

        console.log(
`Row: ${props.y} Column: ${props.x}
RGB: ${ColorR}, ${ColorG}, ${ColorB}`);
        }

    return (
        <div 
            className="card" 
            style={{
                backgroundColor: `rgb(${ColorR} ${ColorG} ${ColorB})`, 
                width: `${dimensions}vw`, 
                height: `${dimensions}vh`
            }}
            data-position={`${props.y}${props.x}`}
            data-color={`rgb(${ColorR} ${ColorG} ${ColorB})`}
            onClick={ChangeColor}
        >
        </div>
    )
}

export default Card;