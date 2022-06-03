import React, { useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {

    const [navVis, setNavVis] = useState(true);
    
    const toggleNav = () => {
        setNavVis(!navVis);
    }

    if (!navVis) {
        return (
            <nav> 
            <div className="header">
                <div
                className="front button"
                onClick={toggleNav}
                >
                </div>
            </div>
        </nav>
        )
    }

    return (
        <nav> 
            <div className="header">
                <div
                className="front button"
                onClick={toggleNav}
                >
                </div>
                <h1 className="front"
                onClick={toggleNav}
                >Color Click!</h1>
            </div>
            
            <div>
                <ul>
                    <Link className="nav-link front" to="/1">1</Link>
                    <Link className="nav-link front" to="/9">9</Link>
                    <Link className="nav-link front" to="/25">25</Link>
                    <Link className="nav-link front" to="/100">100</Link>
                    <Link className="nav-link front" to="/400">400</Link>
                    <Link className="nav-link front" to="/1024">1024</Link>
                </ul>
            </div>
        </nav>
    )
}


export default Nav;