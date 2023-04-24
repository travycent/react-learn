import React from "react";
// Import the logo Image
import logo from "../images/airbnb-logo.png"
export default function Navbar(){
    return(
        <nav>
            <img src={logo}alt="logo" className="nav--logo"/>
        </nav>
    );
}