import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

    return (
        <nav> 
            <h1>Color Click!</h1>
            <div>
                <ul>
                    <Link className="nav-link" to="/1">1</Link>
                    <Link className="nav-link" to="/9">9</Link>
                    <Link className="nav-link" to="/25">25</Link>
                    <Link className="nav-link" to="/100">100</Link>
                    <Link className="nav-link" to="/400">400</Link>
                    <Link className="nav-link" to="/1024">1024</Link>
                </ul>
            </div>
        </nav>
    )
}


export default Nav;