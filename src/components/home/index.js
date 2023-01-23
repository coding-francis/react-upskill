import React from "react";
import "./styles.css";
import Layout from "../../layout";
import LandingHero from "./landing";
import AboutUs from "../about/about-us";

const Home =()=>{
return(
    <Layout>
        <LandingHero/>
        <AboutUs/>
    </Layout>
    )
}

export default Home;