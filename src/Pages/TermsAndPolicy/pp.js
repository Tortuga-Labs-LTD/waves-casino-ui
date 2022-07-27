import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import tortugaLabs from "../../assets/Pages/TnP/tortugaLabs.png";
import MetaDecorator from "../../Components/Utils/MetaDecorator";

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                {/* Homepage meta title and description for better SEO */}
                <MetaDecorator
                    title={"Privacy Policy - WAVES Roulette"}
                    description={
                        "Read the Privacy Policy of WAVES Roulette. Always play responsibly. When the fun stops, stop."
                    }
                />

                <Container fluid className="tnp">
                    <Row>
                        <Col>
                            <h2 className="txt1 text-uppercase text-center">
                                {" "}
                                Privacy Policy{" "}
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mb-4">
                            <img
                                src={tortugaLabs}
                                className="objimg"
                                width="auto"
                                height="150px"
                                alt="Tortuga Labs"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="tptxt3">TYPES OF DATA COLLECTED</p>
                            <p className="tptxt2">
                                <span>Anonymous Accounts:</span> While using Our
                                Service, we will not ask you for any personally
                                identifiable information, nor do we store such
                                data.
                            </p>
                            <p className="tptxt2">
                                <span>WAVES Accounts:</span> While using Our
                                Service, we will not ask you for any personally
                                identifiable information, only an email address.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="tptxt3">
                                CHANGES TO THE PRIVACY POLICY
                            </p>
                            <p className="tptxt2">
                                We may review the Privacy Policy periodically
                                and reserve the right to change the Privacy
                                Policy at any time at our discretion by posting
                                such changes on the website.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default PrivacyPolicy;
