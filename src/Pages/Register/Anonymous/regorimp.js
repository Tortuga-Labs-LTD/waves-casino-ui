import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Regorimp extends Component {
    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-0 pb-0"> Register / import your account </h2>
                  <p className="rtxt2">By creating an account you agree to our</p>
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
                  <Link to="/GenerateSeed">
                    <button className="button rbtn text-uppercase mt-5">Create Account </button>
                  </Link>
                  <p className="rtxt2 mt-2">Create a New Account</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/ImportSeed">
                    <button className="button rbtn text-uppercase mt-5">Import seed phrase</button>
                  </Link>
                  <p className="rtxt2 mt-2">Already Have an Account? Import Your Seed Phrase</p>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default Regorimp
