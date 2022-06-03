import React from "react";
import CardRow from "../components/CardRow";


const Square25 = () => {
    
    return (
        <div className="card-row">
            {[...Array(5)].map((e, i) => <CardRow num={5} key={i} className="25"/>)}
        </div>
    )

}

export default Square25;