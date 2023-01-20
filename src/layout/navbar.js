import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Vector from "../assets/images/vector.png";
import Igstudio from "../assets/images/ig-studio.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={'/'} className="brand-logo">
                <img src={Vector} alt="logo" />
                <span>igstudio</span>
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Attorneys">Attorneys</Link>
                <Link to="/Area">Practice Areas</Link>
                <Link to="/About">About Us</Link>
            </div>

            <div className="contact-container">
                <Link>Contact Now</Link>
            </div>
        </nav>

    )
}

export default Navbar;