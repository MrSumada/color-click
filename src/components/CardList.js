import React, { useState } from "react";
import CardRow from "./CardRow";

const CardList = React.forwardRef((props, ref) => {

    // set mouse click state
    const [mouseDown, setMouseDown] = useState(false);
    const click = () => setMouseDown(true);
    const unClick = () => setMouseDown(false);

    return (
        <div className="card-row"
            onMouseDown={click}
            onMouseUp={unClick}
            onMouseLeave={unClick}
            ref={ref}
        >
            {[...Array(props.num)].map((e, i) => 
                <CardRow 
                    num={props.num} 
                    y={i+1} 
                    key={i}
                    mouseDown={mouseDown}
                />
            )}
        </div>
    )
})
export default CardList;