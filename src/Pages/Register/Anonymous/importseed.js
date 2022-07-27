import React, { Component } from "react";
import { withRouter } from "react-router";
// import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { ForgotModal } from "../../../Components/Modal/userModal";
import AuthContext from "../../../Components/Authentication/Auth";
import { seedUtils, libs } from "@waves/waves-transactions";
const { encryptSeed, base58Encode, blake2b, stringToBytes } = libs.crypto;

class ImportSeed extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            seed: "",
            validSeed: false,
        };
    }

    handleSeedChange = (e) => {
        this.setState({ seed: e.target.value });
        if (e.target.value.length > 59) {
            this.setState({ validSeed: true });
        } else {
            this.setState({ validSeed: false });
        }
    };

    handleContinueClick() {
        try {
            if (this.state.validSeed) {
                const seedData = new seedUtils.Seed(
                    this.state.seed,
                    process.env.REACT_APP_CODE
                );
                this.context.setUser({
                    ...this.context.user,
                    address: seedData.address,
                    isAuth: true,
                    publicKey: seedData.keyPair.publicKey,
                    isKeeper: false,
                });
                this.context.setSeed(this.state.seed);
                const wrappedSeed = base58Encode(
                    blake2b(stringToBytes(this.state.seed))
                );
                const encrypted = encryptSeed(
                    this.state.seed,
                    this.context.user.password,
                    process.env.REACT_APP_ROUNDS
                );
                localStorage.setItem("seedHash", wrappedSeed);
                localStorage.setItem("hash", encrypted);
                this.context.initiateUser(seedData.address);
                this.props.history.push("/Games");
            } else {
                throw new Error("Seed is too short");
            }
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    render() {
        return (
            <>
                <Container fluid className="rsec1">
                    <Row>
                        <Col>
                            <h2 className="txt1 text-uppercase text-center mb-4 pb-0">
                                import account
                            </h2>
                            <p className="rtxt2 mb-4 text-uppercase">
                                Welcome Back!
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={() => this.handleContinueClick()}>
                                Enter Seed Phrase
                                <br></br>
                                <textarea
                                    type="textarea"
                                    className="seedinput"
                                    value={this.state.seed}
                                    onChange={this.handleSeedChange}
                                    cols="30"
                                    rows="5"
                                />
                                {this.state.error ? (
                                    <p className="errorMessage">
                                        {this.state.error}
                                    </p>
                                ) : null}
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button
                                className="button rbtn text-uppercase mt-5"
                                disabled={!this.state.validSeed}
                                onClick={() => this.handleContinueClick()}>
                                Continue
                            </button>
                            <ForgotModal />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(ImportSeed);
