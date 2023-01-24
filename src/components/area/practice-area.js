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
                               <h3>  <img id="business" src={business}alt=""/><span id="span1">BUSINESS LAW</span> </h3>
                               <h3> <img id="partnership" src={partnership} alt="" /><span id="span2"> PARTNERSHIP LAW</span></h3>
                         </div>

                         <div id="mini-card2">
                               <h3> <img id="realestate" src={realestate} alt="" /><span id="span3">REAL ESTATE LAW</span></h3>
                               <h3> <img id="business2" src={business2} alt="" /><span id="span4"> BUSINESS LAW</span></h3>
                         </div>

                         <div id="mini-card3">
                               <h3> <img id="landlords" src={landlords} alt="" /> <span id="span5">LANDLORDS DISPUTES</span></h3>
                               <h3> <img id="abuse" src={abuse} alt="" /><span id="span6"> ELDERS ABUSE </span></h3>
                         </div> 
                 </div>
         </div>      
    )
}

export default PracticeArea;