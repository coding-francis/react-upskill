import React from "react";
import "./styles.css"
import { HiGift } from "react-icons/hi";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="intro-container">
                <div className="intro">
                    <h1>Let&apos;s Introduce <br /> <br /> Ourself</h1>
                </div>
                <div className="criminal">
                    <h2>Criminal Lawyer</h2>
                    <p> Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                        enim velit mollit Exercitation.</p>
                </div>

            </div>

            <div className="cards-container">
                <div className="text">
                    <h1>Why choose us? </h1>
                </div>
                <div className="mini-cards">
                    <div className="first-card">
                        <HiGift size={90} />
                        <h3>98% Success Rate</h3>
                        <p> Amet minim mollit non deserunt ullamco est <br />
                            sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                            enim velit mollit Exercitation.</p>

                        <button><Link className="read-link">Read More</Link></button>

                    </div>

                    <div className="second-card">
                        <HiGift size={90} />
                        <h3>98% Success Rate</h3>
                        <p> Amet minim mollit non deserunt ullamco est <br />
                            sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                            enim velit mollit Exercitation.</p>
                        <button><Link className="read-link">Read More</Link></button>

                    </div>

                    <div className="third-card">
                        <HiGift size={90} />
                        <h3>98% Success Rate</h3>
                        <p> Amet minim mollit non deserunt ullamco est <br />
                            sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                            enim velit mollit Exercitation.</p>
                        <button><Link className="read-link">Read More</Link></button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;