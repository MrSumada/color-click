import React from "react";
import Card from "./Card";

const CardRow = (props) => {

    return (
        <div className="card-list">
            {[...Array(props.num)].map((e, i) => 
                <Card 
                    num={props.num}
                    y={props.y} 
                    x={i+1} 
                    mouseDown={props.mouseDown}
                    key={i}
                />)
            }
            
        </div>
    )


}
export default CardRow;