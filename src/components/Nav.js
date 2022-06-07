import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import html2canvas from "html2canvas";
import CardList from "./CardList"; 


const Nav = () => {

    let printNum = useParams();

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

    const printColorsComponent = () => {
        if(!printNum) {return (<CardList num={5} ref={printRef}/>)}
        return (<CardList num={printNum} ref={printRef}/>)
    }

    const printRef = useRef();

    const print = () => {
        exportComponentAsJPEG(printRef);
    }
    

    if (navVis === "empty") {
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

    if (navVis === "options") {
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
                    
                <li className="nav-link front"
                    onClick={reset}
                >
                    Reset?
                </li>

                {/* <li className="nav-link front"
                    onClick={print}
                >
                    Print Colors?
                </li> */}
                    
            </nav>
        )
    }

    if (navVis === "numbers") {
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
    
}


export default Nav;