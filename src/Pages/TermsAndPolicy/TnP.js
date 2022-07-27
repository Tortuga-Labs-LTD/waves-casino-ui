import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

import PrivacyPolicy from '../../Pages/TermsAndPolicy/pp'
import TermsOfServices from '../../Pages/TermsAndPolicy/tos'


class TermsAndPolicy extends Component {
    render() {
        return (
          <>
            <Container fluid className="tnp">
                <Row>
                    <Col>
                        <h2 className="txt1 text-uppercase text-center mb-0 pb-0"> Privacy Policy & Terms of Services </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PrivacyPolicy/>
                        <TermsOfServices/>
                    </Col>
                </Row>
            </Container>
          </>
        )
      }
}

export default TermsAndPolicy
