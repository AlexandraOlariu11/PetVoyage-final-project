//import React from "react";
//import logo from 
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavbarContainer () {
    return (
    <nav className="nav">
        <Link to="/home" className="title">
            <img src="file:///C:/Users/alexa/PetVoyage-final-project/src/assets/img/logo.png" alt="Logo PetVoyage" />    
        </Link>
        <ul>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/about">Despre Noi</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
 const resolvedPath = useResolvedPath(to)
 const isActive = useMatch({path: resolvedPath.pathname, end: true})
return (
    <li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>
       {children}
    </Link>
</li>
)
}


 //ceva nu e bine, nu pot adauga imagine 
