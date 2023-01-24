import React from "react";
import "./styles.css";
import Layout from "../../layout";
import LandingHero from "./landing";
import AboutUs from "../about/about-us";
import PracticeArea from "../area/practice-area";

const Home =()=>{
return(
    <Layout>
        <LandingHero/>
        <AboutUs/>
        <PracticeArea/>
    </Layout>
    )
}

export default Home;