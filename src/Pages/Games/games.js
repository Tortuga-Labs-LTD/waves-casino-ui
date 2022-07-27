import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Games data
import CasinoGames from './CasinoGames'

class Games extends Component {
    render() {
        var tabpanel={
          padding: "3%",
          backgroundColor: "rgba(41, 40, 40, 0.3)",
          borderRadius: "20px",
          color:" rgba(255, 255, 255, 0.5)",
          textAlign:"center",
        }
        return (
          <>
              <Container fluid className="gsec1">
                <Row>
                  <Col>
                    <h2 className="txt1 text-uppercase text-center"> Games </h2>
                  </Col>
                </Row>
                <Row className="gsec1-2">
                  <Col className="gsec1-21">
                    <div style={tabpanel}>
                      <CasinoGames/>
                    </div>
                  </Col>
                </Row>
              </Container>
          </>
        )
      }
}

export default Games
