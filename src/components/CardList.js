import React from "react";
import CardRow from "./CardRow";

const CardList = (props) => {

    return (
        <div className="card-row">
            {[...Array(props.num)].map((e, i) => <CardRow num={props.num} key={i} />)}
        </div>
    )


}
export default CardList;