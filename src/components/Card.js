import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {

    const storedColor = JSON.parse(localStorage.getItem(`Color${props.y}${props.x}`));
    let storedR;
    let storedG;
    let storedB;

    if (storedColor) {
        storedR = storedColor[0]
        storedG = storedColor[1]
        storedB = storedColor[2]
    } else {
        storedR = Math.floor(Math.random()*256);
        storedG = Math.floor(Math.random()*256);
        storedB = Math.floor(Math.random()*256);
        localStorage.setItem(`Color${props.y}${props.x}`, JSON.stringify([storedR, storedG, storedB]));
    }

    const [ColorR, setColorR] = useState(storedR);
    const [ColorG, setColorG] = useState(storedG);
    const [ColorB, setColorB] = useState(storedB);
   

    const dimensions = 100/props.num;

    function ChangeColor() {
        const newR = Math.floor(Math.random()*256);
        const newG = Math.floor(Math.random()*256);
        const newB = Math.floor(Math.random()*256);
        setColorR(newR);
        setColorG(newG);
        setColorB(newB);
        localStorage.setItem(`Color${props.y}${props.x}`, JSON.stringify([newR, newG, newB]));

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