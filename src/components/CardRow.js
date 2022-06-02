import React from "react";
import Card from "./Card";

const CardRow = () => {

    return (
        <div className="card-list">
            {[...Array(10)].map((e, i) => <Card key={i}/>)}
        </div>
    )


}
export default CardRow;