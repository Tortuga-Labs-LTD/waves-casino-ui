import React, { Component, Suspense } from "react";
import "./style.css"; // Stylesheet for the home page
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Link used for buttons

// Components used
import Card, { Card1 } from "../../Components/Cards/card"; // "Card" & "Card1" cards used for Our platform section
import { WHeading } from "../../Components/Headings/Heading"; // Heading component used

// Utilities used
import MetaDecorator from "../../Components/Utils/MetaDecorator"; // Homepage meta title and description for better SEO
import Animation from "../../Components/Utils/JsonAnimation"; // Json animations used

// Images used in homepage
import sec1img from "../../assets/Home/sec1img.svg";
import sec6img1 from "../../assets/Home/sec6img1.svg";

// JSON files used
import Controller from "../../JsonFiles/Controller.json";
import Achievement from "../../JsonFiles/Achievement.json";
import Defi from "../../JsonFiles/Defi.json";

class index extends Component {
    render() {
        return (
            <>
                <MetaDecorator
                    title={"WAVES Roulette - Play & Win WAVES"}
                    description={
                        "WAVES Roulette is a blockchain-based Roulette game that is completely smart-contract driven on the WAVES platform. Play responsibly."
                    }
                />

                <div className="home">
                    <Container fluid className="sec1">
                        <Row>
                            <Col md={6} className="sec1-1">
                                <div className="sec1-11 mb-2">
                                    <h2 className="txt1 text-uppercase">
                                        Verifiably Fair, Built To Last
                                    </h2>
                                    <p className="txt2">
                                        Fully On-Chain Casino with High Quality
                                        Games Powered by the Tortuga Labs
                                        Platform
                                    </p>
                                </div>
                                <div className="sec1-12 btnsec1">
                                    <Link
                                        to="/Register"
                                        className="ppntos1 m-1">
                                        <button className="button homebtn text-uppercase">
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={6} className="sec1-2">
                                <img
                                    src={sec1img}
                                    className="sec1img"
                                    width="70%"
                                    height="auto"
                                    alt="sec1img"
                                />
                            </Col>
                        </Row>

                        <div className="sec2-1">
                            <Row>
                                <Col className="sec2-12">
                                    <WHeading
                                        text={"Not just another Casino"}
                                    />
                                </Col>
                            </Row>
                            {/* Lazy loading is rendered in suspense.
                            Suspense is used to make components wait for something before they can render,
                            fallback prop renders element while waiting for the loading */}
                            <Suspense fallback={<div />}>
                                <Row>
                                    <Col className="sec2-13">
                                        <div className="card-columns">
                                            <div className="card">
                                                <div className="cardimgsec">
                                                    <Animation
                                                        animation={Controller}
                                                    />
                                                </div>
                                                <div className="cardtxt">
                                                    <h2 className="txt4">
                                                        Built By Tortuga labs
                                                    </h2>
                                                    <p className="txt5">
                                                        Waves Roulette utilizes
                                                        the Tortuga Labs game
                                                        mechanics and the Waves
                                                        platform, which allows
                                                        users to play completely
                                                        on-chain!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="cardimgsec">
                                                    <Animation
                                                        animation={Achievement}
                                                    />
                                                </div>
                                                <div className="cardtxt">
                                                    <h2 className="txt4">
                                                        Verifiably Fair
                                                    </h2>
                                                    <p className="txt5">
                                                        All bets and results
                                                        utilize a verifiably
                                                        fair on-chain random
                                                        number generator,
                                                        arguably the most fair
                                                        in crypto.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="cardimgsec">
                                                    <Animation
                                                        animation={Defi}
                                                    />
                                                </div>
                                                <div className="cardtxt">
                                                    <h2 className="txt4">
                                                        Non-Custodial Wallets
                                                    </h2>
                                                    <p className="txt5">
                                                        All wallets are
                                                        non-custodial, giving
                                                        users the peace of mind
                                                        knowing that they are in
                                                        full control of their
                                                        funds.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Suspense>
                        </div>
                    </Container>

                    <Suspense fallback={<div />}>
                        <Container fluid className="sec3">
                            <Row>
                                <Col md={6} className="sec3-1">
                                    <WHeading text={"The Current Industry"} />
                                    <h4 className="txt6">
                                        Current Blockchain Gaming Platforms
                                    </h4>
                                    <p className="pt-3 txt7">
                                        Casinos are mostly the same in that they
                                        are flashy and and claim that they are
                                        fair, but they mostly have custodial
                                        wallets (where you don't control the
                                        private key to your own wallet), poor
                                        tokenomics, or offer dozens of the same
                                        types of games (seriously, go to a
                                        random crypto casino and look at how
                                        many reskinned slot games there are). On
                                        top of that, the few that have their own
                                        token have poor tokenomics.
                                    </p>
                                    <p className="pt-1 txt7">
                                        There are actually very, very few
                                        casinos worth playing. Waves Roulette,
                                        developed by Tortuga Labs, aims to
                                        produce unique features while making
                                        Waves the currency used.
                                    </p>
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid className="sec4">
                            <WHeading
                                text={"Classic Games and Unique Features"}
                            />
                            <Row className="sec4-0">
                                <Col
                                    md={4}
                                    className="text-uppercase sec4-text">
                                    <div className="sec4-text-separator">
                                        <p>Single Table Roulette</p>
                                        <p>(All Players At One Table)</p>
                                    </div>
                                    <div className="sec4-text-separator">
                                        <p>Industry Leading</p>
                                        <p>Random Number Generator</p>
                                    </div>
                                    <div>
                                        <p>Smart Contract Driven,</p>
                                        <p>All On-Chain</p>
                                    </div>
                                </Col>
                                <Col md={4} className="sec4-2">
                                    <img
                                        src={sec6img1}
                                        className="sec1img"
                                        width="100%"
                                        height="auto"
                                        alt="sec1img"
                                    />
                                </Col>
                                <Col
                                    md={4}
                                    className="text-uppercase sec4-text">
                                    <div className="sec4-text-separator">
                                        <p>New Games Introduced</p>
                                        <p>Over Time</p>
                                    </div>
                                    <div className="sec4-text-separator">
                                        <p>User Owned</p>
                                        <p>Non-Custodial Wallets</p>
                                    </div>
                                    <div className="sec4-text-separator">
                                        <p>Other Players' Bets Visible</p>
                                        <p>On Table Games Via Chaos Mode</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Suspense>

                    <Suspense fallback={<div />}>
                        <Container fluid className="sec5">
                            <div>
                                <Row>
                                    <Col md={5}>
                                        <Card />
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={5}>
                                        <Card1 />
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Suspense>
                </div>
            </>
        );
    }
}

export default index;
