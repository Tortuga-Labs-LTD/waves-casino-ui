import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import footerimg from "../../assets/Footer/footerimg.png";
import footerlogo from "../../assets/Footer/footerlogo.svg";
import gambleaware from "../../assets/Footer/gambleaware.svg";

// Icons used
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className="footer">
                    <Row className="foot1">
                        <Col>
                            <h4>Powered By</h4>
                            <img
                                src={footerimg}
                                className="footerimg"
                                width="15%"
                                height="auto"
                                alt="powered by"
                            />
                        </Col>
                    </Row>
                    <Row className="foot1 p-1">
                        <Col>
                            <Link to="/" className="ppntos">
                                <img
                                    src={footerlogo}
                                    className="footerlogo"
                                    width="15%"
                                    height="auto"
                                    alt="logo"
                                />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="foot1 p-1">
                        <Col>
                            <h5>
                                DISCLAIMER: Online Wagering is illegal in some
                                jurisdictions. It is your responsibility to
                                check your local regulations before playing
                                online. Tortuga Labs takes no responsibility for
                                your actions. Gambling can be addictive. Please
                                play Responsibly
                            </h5>
                        </Col>
                    </Row>
                    <Row className="foot1">
                        <Col></Col>
                        <Col>
                            <p className="m-0">
                                &copy;{new Date().getFullYear()} Tortuga Labs.
                                All rights reserved
                            </p>
                            <div className="m-3">
                                <a
                                    className="contact"
                                    href="mailto: contact@tortugalabs.net">
                                    Contact Us: contact@tortugalabs.net
                                </a>
                            </div>
                            <div className="m-3">
                                <a
                                    className="contact"
                                    href="mailto:support@tortugalabs.net">
                                    Support: support@tortugalabs.net
                                </a>
                            </div>
                            <Link to="/PrivacyPolicy" className="ppntos">
                                Privacy Policy
                            </Link>
                            |
                            <Link to="/TermsOfServices" className="ppntos">
                                Terms Of Service
                            </Link>
                        </Col>
                        <Col>
                            <img
                                src={gambleaware}
                                className="gambleaware"
                                alt="gambleaware"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
