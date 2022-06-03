import React from "react";
import CardRow from "./CardRow";

const CardList = (props) => {

    return (
        <div className="card-row">
            {[...Array(props.num)].map((e, i) => <CardRow num={props.num} y={i+1} key={i} />)}
        </div>
    )


}
export default CardList;