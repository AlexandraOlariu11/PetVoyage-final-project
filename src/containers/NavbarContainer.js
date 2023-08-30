import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../assets/css/NavStyles.css';

export default function NavbarContainer () {
    return (
        <nav className="nav">
            <Link to="/home" className="title">
                <img className="logo" src={require('../assets/img/logo1.png')} alt="Logo PetVoyage" />    
            </Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={ isActive ? "custom-link active" : "custom-link"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


