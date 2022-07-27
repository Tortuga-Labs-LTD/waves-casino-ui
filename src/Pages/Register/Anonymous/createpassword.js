import React, { Component } from "react";
// import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../../Components/Authentication/Auth";
import { libs } from "@waves/waves-transactions";
const { encryptSeed, base58Encode, blake2b, stringToBytes } = libs.crypto;

class CreatePassword extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            password: "",
            passConf: "",
            validPassword: false,
            agreed: false,
            error: false,
        };
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    handleContinueClick() {
        try {
            if (this.state.password !== this.state.passConf)
                throw new Error("Passwords don't match");
            if (this.state.password.length <= 7)
                throw new Error("Password too short");
            if (this.state.agreed === false)
                throw new Error(
                    "You must agree to the privacy policy and terms of service"
                );
            this.context.setUser({
                ...this.context.user,
                password: this.state.password,
                isLogged: true,
            });
            const hashedData = base58Encode(
                blake2b(stringToBytes(this.state.password))
            );
            const encrypted = encryptSeed(
                this.state.password,
                this.state.password,
                process.env.REACT_APP_ROUNDS
            );
            localStorage.setItem("seedHash", hashedData);
            localStorage.setItem("hash", encrypted);
            this.props.history.push("/RegisterOrImport");
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <>
                <Container fluid className="rsec1">
                    <Row>
                        <Col>
                            <h2 className="txt1 text-uppercase text-center mb-0 pb-0">
                                Create a Password{" "}
                            </h2>
                            <p className="rtxt2 mb-4 text-uppercase">
                                Set your password for this local account
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form>
                                <div className="createpassword mb-0">
                                    <p className="mr-2">Create Password: </p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="passmust">
                                    <p>Must be at least 8 characters</p>
                                </div>
                                <br></br>
                                <div className="createpassword">
                                    <p className="mr-2">Confirm Password: </p>
                                    <input
                                        type="password"
                                        name="passConf"
                                        placeholder="Password"
                                        value={this.state.passConf}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
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
                            <form>
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        name="agreed"
                                        checked={this.state.agreed}
                                        onChange={this.handleInputChange}
                                        required
                                    />{" "}
                                    I have read and agree with the
                                    <Link
                                        to="/PrivacyPolicy"
                                        className="ppntos1 m-1">
                                        Privacy Policy
                                    </Link>
                                    &
                                    <Link
                                        to="/TermsOfServices"
                                        className="ppntos1 m-1">
                                        Terms Of Service
                                    </Link>
                                </label>
                            </form>
                            <button
                                className="button rbtn text-uppercase"
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

export default CreatePassword;
