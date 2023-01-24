import React from "react";
import "./styles.css";
import {FcLeft} from "react-icons/fc";
import {FcRight} from "react-icons/fc";
import ellipse1 from "../../assets/images/ellipse1.png";
import ellipse2 from "../../assets/images/ellipse2.png";
import ellipse3 from "../../assets/images/ellipse3.png";


const AttorneysPage =()=>{
    return(
         <div id="attorney-container">
               
               <div id="mini-container1">
                <div id="text-container">
                     <h2 id="text">What says our <br/> happy Clients</h2>
                     <div id="text-icon">
                         <FcLeft id="1" size={50}/> <FcRight id="2" size={50}/>
                     </div>                   
                </div>

                <div id="card-container1">

                      <div id="mini-card1">
                          <img id="" src={ellipse1} alt="" />
                          <h2> Jane Cooper</h2>
                          <h5> Ceo of Hunt</h5>
                          <p> Amet minim mollit non deserunt ullamco est <br/>
                              sit aliqua dolor do amet sint. Velit officia <br/>
                              consequatduis enim velit mollit Exer. sit <br/>
                              aliqua dolor do amet sint. Velit officia</p>
                      </div>

                      <div id="mini-card2">
                          <img id="" src={ellipse2} alt="" />
                          <h2> Jane Cooper</h2>
                          <h5> Devon lane </h5>
                          <p> Amet minim mollit non deserunt ullamco est <br/>
                              sit aliqua dolor do amet sint. Velit officia <br/>
                              consequatduis enim velit mollit Exer. sit <br/>
                              aliqua dolor do amet sint. Velit officia</p>

                      </div>

                      <div id="mini-card3">
                          <img id="" src={ellipse3} alt="" />
                          <h2> Robert Fox</h2>
                          <h5> Ceo of Hunt</h5>
                          <p> Amet minim mollit non deserunt ullamco est <br/>
                              sit aliqua dolor do amet sint. Velit officia <br/>
                              consequatduis enim velit mollit Exer. sit <br/>
                              aliqua dolor do amet sint. Velit officia</p>

                      </div>
                </div>
               </div>
               
               <div id="card2">

               </div>
         </div>
    )
}

export default AttorneysPage;