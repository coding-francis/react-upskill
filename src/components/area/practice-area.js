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
         <div classname="practise-container">
                 <div classname="text">
                       <h1>Area of Practices</h1>
                 </div>

                 <div classname="cards">
                         <div classname="mini-card1">
                               <h3>BUSINESS LAW <img src={business}alt=""/></h3>
                               <h3>PARTNERSHIP LAW <img src={partnership} alt="" /></h3>
                         </div>

                         <div classname="mini-card2">
                               <h3>REAL ESTATE LAW <img src={realestate} alt="" /></h3>
                               <h3>BUSINESS LAW <img src={business2} alt="" /></h3>
                         </div>

                         <div classname="mini-card3">
                              <img src={landlords} alt="" />
                              <img src={abuse} alt="" />
                         </div>   
                 </div>
         </div>      
    )
}

export default PracticeArea;