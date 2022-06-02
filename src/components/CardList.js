import React from "react";
import CardRow from "./CardRow";

const CardList = () => {

    return (
        <div className="card-row">
            {[...Array(10)].map((e, i) => <CardRow key={i}/>)}
        </div>
    )


}
export default CardList;