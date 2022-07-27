import { React, useContext, useState } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../../Components/Modal/errorModal";
import MetaDecorator from "../../Components/Utils/MetaDecorator";
import AuthContext from "../../Components/Authentication/Auth";

const Registration = (props) => {
    const instance = process.env.REACT_APP_INSTANCE;
    const { user, setUser, initiateUser } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        message: "Something went wrong",
    });

    const handleAnonymousClick = () => {
        if (localStorage.getItem("hash")) {
            props.history.push("/Login");
        } else {
            props.history.push("/CreatePassword");
        }
    };

    const handleKeeperClick = () => {
        if (window.WavesKeeper) {
            window.WavesKeeper.initialPromise
                .then((keeperApi) => {
                    /*...init app*/
                    keeperApi
                        .publicState()
                        .then((state) => {
                            if (state.account.network === instance) {
                                setUser({
                                    ...user,
                                    address: state.account.address,
                                    isAuth: true,
                                    publicKey: state.account.publicKey,
                                    isKeeper: true,
                                });
                                initiateUser(state.account.address);
                                props.history.push("/Games");
                            } else {
                                setErrorMessage({
                                    message: `You are on ${state.account.network}, to login please switch to ${instance}`,
                                });
                                setError(true);
                            }
                        })
                        .catch((e) => {
                            setErrorMessage(e);
                            setError(true);
                        });
                })
                .catch((e) => {
                    setErrorMessage(e);
                    setError(true);
                });
        } else {
            setErrorMessage({
                message:
                    "No Keeper installed, please install keeper before trying to use it",
            });
            setError(true);
        }
    };

    return (
        <>
            <MetaDecorator
                title={"Register To Play With WAVES Roulette"}
                description={
                    "Register an account on WAVES Roulette and start playing today. Play responsibly."
                }
            />

            <ErrorModal
                open={error}
                errorMessage={errorMessage}
                onClose={() => setError(false)}
            />

            <Container fluid className="rsec1">
                <Row>
                    <Col>
                        <h2 className="txt1 text-uppercase text-center mb-0 pb-0">
                            Register
                        </h2>
                        <p className="rtxt2">
                            By creating an account you agree to our{" "}
                        </p>
                        <p className="rtxt2 mb-4">
                            <Link to="/PrivacyPolicy" className="ppntos1 m-1">
                                Privacy Policy
                            </Link>
                            &
                            <Link to="/TermsOfServices" className="ppntos1 m-1">
                                Terms Of Service
                            </Link>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button
                            type="button"
                            className="button rbtn text-uppercase mt-5"
                            onClick={() => handleKeeperClick()}>
                            Use Keeper
                        </button>
                        <p className="rtxt2 mt-2">
                            No email needed, access your account via Keeper
                        </p>
                        <button
                            type="button"
                            className="button rbtn text-uppercase mt-5"
                            onClick={() => handleAnonymousClick()}>
                            Local Account
                        </button>
                        <p className="rtxt2 mt-2">
                            No email needed, access your account via seed phrase
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Registration;
