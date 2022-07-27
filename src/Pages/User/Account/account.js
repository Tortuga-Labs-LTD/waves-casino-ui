import { React, useContext } from "react";
import "../style.css";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../../Components/Authentication/Auth";
// import styles from "./account.module.css";

import { SeedModal } from "../../../Components/Modal/userModal";

const Account = () => {
    const { user, seed } = useContext(AuthContext);
    const assetName = process.env.REACT_APP_ASSETNAME;

    return (
        <>
            <Container fluid className="accsec">
                <Row>
                    <Col className="accsec1">
                        <h2 className="txt1 text-uppercase text-center">
                            User Account
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="accsec2">
                        <p className="acctxt2">
                            <span>Your {assetName} Address: </span>
                            {user.address}
                        </p>
                        <p className="acctxt2">
                            <span>User Balance: </span>
                            {user.balance
                                ? `${user.balance.toFormat(2)} ${assetName}`
                                : "Loading..."}
                        </p>
                    </Col>
                </Row>
                {seed && (
                    <Row>
                        <Col className="accsec3">
                            <SeedModal seed={seed} />
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default Account;
