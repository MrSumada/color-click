import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {

    const [navVis, setNavVis] = useState("numbers");
    
    const toggleNav = () => {
        if (navVis === "numbers") {
            setNavVis("options");
        }
        if (navVis === "options") {
            setNavVis("empty");
        }
        if (navVis === "empty") {
            setNavVis("numbers");
        }
    }

    const reset = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    const print = () => { props.func({});}

    if (navVis === "empty") {
        return (
            <nav> 
                <div className="header">
                    <div className="front button" onClick={toggleNav}></div>
                </div>
            </nav>
        )
    }

    if (navVis === "options") {
        return (
            <nav> 
                <div className="header">
                    <div className="front button" onClick={toggleNav}></div>
                    <h1 className="front" onClick={toggleNav}>Color Click!</h1>
                </div>
                <ul className="options">
                    <li className="nav-link front" onClick={reset}>Reset?</li>
                    <li className="nav-link front" onClick={print}>Export?</li>
                </ul>
                
            </nav>
        )
    }

    if (navVis === "numbers") {
        return (
            <nav> 
                <div className="header">
                    <div className="front button" onClick={toggleNav}></div>
                    <h1 className="front" onClick={toggleNav}>Color Click!</h1>
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
}

export default Nav;