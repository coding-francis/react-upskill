import React from "react";
import "./Home.css";
import Man from "../Images/Image.jpg";
import Vector3 from "../Images/Vector3.png";
const Home =()=>{
return(
    <div className="PhoneScreen">
        <div className="Container">
            <h2 >
                You don’t have to <br/>
                Fight them Alone.
            </h2>

            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, <br/> 
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br/>
            eget, hac massa gravida arcu interdum proin curae.<br/>
            </p>

            <form action="">
                <input className="email" type="text" placeholder="Enter your email address" />
                <button><a className="LetsTalk" href="mailto:kurtisbill2000@gmail.com">Lets Talk</a></button>
            </form>

        </div>
                 <img className="Man" src={Man} alt="" />
                 <img className="Vector3" src={Vector3} alt="" />
    </div>
    )
}

export default Home;