import React from "react";
import "./style.css"; // Stylesheet for the cards components

// import Animation from "../Utils/JsonAnimation";

// JSON files used
import cardsImg1 from "../../assets/Home/cardsImg1.svg";
import cardsImg2 from "../../assets/Home/cardsImg2.svg";
import cardsImg3 from "../../assets/Home/cardsImg3.svg";
import cardsImg4 from "../../assets/Home/cardsImg4.svg";
import cardsImg5 from "../../assets/Home/cardsImg5.svg";
import cardsImg6 from "../../assets/Home/cardsImg6.svg";

function Card({ title, imageUrl }) {
    return (
        <>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg1} /> */}
                    <img src={cardsImg1} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>Easy to Use Platform</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg2} /> */}
                    <img src={cardsImg2} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>Soundtracks Made by Professional Musicians</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg3} /> */}
                    <img src={cardsImg3} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>Proven Solid Games From Tortuga Labs</h5>
                </div>
            </div>
        </>
    );
}

function Card1({ title, imageUrl }) {
    return (
        <>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg4} /> */}
                    <img src={cardsImg4} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>Built on Waves</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg5} /> */}
                    <img src={cardsImg5} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>User Controlled Wallets and Optional 2FA</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    {/* <Animation animation={Platfimg6} /> */}
                    <img src={cardsImg6} width="100px" height="100px" alt="" />
                </div>
                <div className="card-title">
                    <h5>Verifiable Odds and Open Source Games</h5>
                </div>
            </div>
        </>
    );
}

export { Card1 };
export default Card;
