import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Vector from "../Images/Vector.png";
import Igstudio from "../Images/Igstudio.png";

const Nav =()=>{
    return(
        <div>
            <div className="NavImage">
               <img src={Vector} alt="" />
               <img src={Igstudio} alt="" />
            </div> 
              
            <div className="Navlinks">

                    <li>                  
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Attorneys">Attorneys</Link>
                    </li>
                    <li>
                        <Link to="/Area">Practice Areas</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>

            </div>

                   <li className="Contact">
                       <Link to="/Contact">Contact Us</Link>
                  </li>
        </div>

    )
}

export default Nav;