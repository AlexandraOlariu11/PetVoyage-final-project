//import React from "react";
//import logo from 
//import { Link, useLocation } from "react-router-dom";

//const NavbarContainer = ({  }) => { }

export default function NavbarContainer () {
    return (
    <nav className="nav">
        <a href="/" className="title">
            PetVoyage
        </a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/home">About</a>
            </li>
            <li>
                <a href="/home">Contact</a>
            </li>
        </ul>
    </nav>
    )
}