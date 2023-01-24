import React from "react";
import "./styles.css"
import business from "../../assets/images/business.png";
import business2 from "../../assets/images/business2.png";
import abuse from "../../assets/images/abuse.png";
import landlords from "../../assets/images/landlords.png";
import partnership from "../../assets/images/partnership.png";
import realestate from "../../assets/images/realestate.png";
 
const PracticeArea =()=>{
    return( 
         <div id="practice-container">
                 <div id="text">
                       <h1>Area of Practices</h1> 
                 </div>

                 <div id="cards">
                         <div id="mini-card1">
                               <h3>BUSINESS LAW <img id="business" src={business}alt=""/></h3>
                               <h3>PARTNERSHIP LAW <img id="partnership" src={partnership} alt="" /></h3>
                         </div>

                         <div id="mini-card2">
                               <h3>REAL ESTATE LAW <img id="realestate" src={realestate} alt="" /></h3>
                               <h3>BUSINESS LAW <img id="business2" src={business2} alt="" /></h3>
                         </div>

                         <div id="mini-card3">
                               <h3> LANDLORDS DISPUTES <img id="landlords" src={landlords} alt="" /></h3>
                               <h3> ELDERS ABUSE <img id="abuse" src={abuse} alt="" /></h3>
                         </div>   
                 </div>
         </div>      
    )
}

export default PracticeArea;