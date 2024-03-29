import React from "react";
import { useState } from "react";

const Card = (props) => {

    // set localStorage stored colors for RGB
    const storedColor = JSON.parse(localStorage.getItem(`Color${props.y}${props.x}`));
    let storedR;
    let storedG;
    let storedB;

    // Detect iOS
    const iOS = () => {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    // Get RGB color from localStorage const, or random if no localStorage
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

    // set color state for R,G,B, set dimensions of square
    const [ColorR, setColorR] = useState(storedR);
    const [ColorG, setColorG] = useState(storedG);
    const [ColorB, setColorB] = useState(storedB);
    let dimensionsX = 100/props.num;
    let dimensionsY = 100/props.num;
    if (iOS === true) { dimensionsY = dimensionsY*.95}

    // Change color function, save color to localStorage
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

    // Mouse Event Functions
    const click = () => {
        if (!props.mouseDown) {
            ChangeColor();
        }
    }
    const enter = () => {
        if (props.mouseDown) {
            ChangeColor();
        }
    }

    return (
        <div 
            className="card" 
            style={{
                backgroundColor: `rgb(${ColorR} ${ColorG} ${ColorB})`, 
                width: `${dimensionsX}vw`, 
                height: `${dimensionsY}vh`
            }}
            data-position={`${props.y}${props.x}`}
            data-color={`rgb(${ColorR} ${ColorG} ${ColorB})`}
            onMouseDown={click}
            onMouseEnter={enter}
        >
        </div>
    )
}

export default Card;