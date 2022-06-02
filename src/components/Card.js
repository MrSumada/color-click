import React from "react";
import { useState } from "react";

const Card = () => {

    const [ColorR, setColorR] = useState(Math.floor(Math.random()*256));
    const [ColorG, setColorG] = useState(Math.floor(Math.random()*256));
    const [ColorB, setColorB] = useState(Math.floor(Math.random()*256));

    function ChangeColor() {
        setColorR(Math.floor(Math.random()*256));
        setColorG(Math.floor(Math.random()*256));
        setColorB(Math.floor(Math.random()*256));

        console.log("RGB:",ColorR, ",", ColorG, ",", ColorB);
    }

    return (
        <div className="card" style={{backgroundColor: `rgb(${ColorR} ${ColorG} ${ColorB})`, width: "10vw", height: "10vh"}}
        
        onClick={ChangeColor}
        >

        </div>
    )
}

export default Card;