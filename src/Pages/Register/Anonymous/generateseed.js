import React, { Component } from "react";
import { withRouter } from "react-router";
// import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { seedUtils, libs } from "@waves/waves-transactions";
import AuthContext from "../../../Components/Authentication/Auth";
const { encryptSeed, base58Encode, blake2b, stringToBytes } = libs.crypto;

class GenerateSeed extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        const phrase = seedUtils.Seed.create().phrase;
        const seedData = new seedUtils.Seed(phrase, process.env.REACT_APP_CODE);
        this.state = {
            seedData: seedData,
        };
    }

    handleContinueClick() {
        this.context.setUser({
            ...this.context.user,
            address: this.state.seedData.address,
            isAuth: true,
            publicKey: this.state.seedData.keyPair.publicKey,
            isKeeper: false,
        });
        this.context.setSeed(this.state.seedData.phrase);
        const wrappedSeed = base58Encode(
            blake2b(stringToBytes(this.state.seedData.phrase))
        );
        const encrypted = encryptSeed(
            this.state.seedData.phrase,
            this.context.user.password,
            process.env.REACT_APP_ROUNDS
        );
        localStorage.setItem("seedHash", wrappedSeed);
        localStorage.setItem("hash", encrypted);
        this.context.initiateUser(this.state.seedData.address);
        this.props.history.push('/Games');
    }

    render() {
        return (
            <>
                <Container fluid className="rsec1">
                    <Row>
                        <Col>
                            <h2 className="txt1 text-uppercase text-center mb-0 pb-0">
                                {" "}
                                Your Seed Phrase{" "}
                            </h2>
                            <p className="rtxt2 mb-4 text-uppercase">
                                make sure to copy this down. we do not keep
                                records of seed phrase.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button
                                className="generatedSeed"
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        this.state.seedData.phrase
                                    )
                                }>
                                {this.state.seedData.phrase}{" "}
                                <span className="copy"></span>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button
                                className="button rbtn text-uppercase mt-5"
                                onClick={() => this.handleContinueClick()}>
                                Continue
                            </button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(GenerateSeed);
