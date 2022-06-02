import React, { useState } from "react";


const Nav = () => {

    const [number, setNumber] = useState();

    function navClick1() {
        console.log("1!")
    }
    function navClick25() {
        console.log("25!")
    }
    function navClick100() {
        console.log("100!")
    }

    return (
        <nav> 
            <h1>Color Click!</h1>
            <div>
                <ul>
                    <li onClick={navClick1}>1</li>
                    <li onClick={navClick25}>25</li>
                    <li onClick={navClick100}>100</li>
                </ul>
            </div>
        </nav>
    )
}


export default Nav;