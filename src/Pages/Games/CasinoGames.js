import React, { Component } from "react";
// import './style.css';
import styles from "./CasinoGames.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/navlogo.svg";

class CasinoGames extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col md={3} sm={6} className="mb-3 mr-xl-5">
              <Link to="/Roulette" style={{ textDecoration: "none" }}>
                <div className={styles.rouletteWrapper}>
                  <div className={styles.inner}>
                    <img className={styles.logo} src={logo} alt="WAVES logo" />
                    <h3 className={styles.text}>Roulette</h3>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Link to="/CaribbeanStudPoker" style={{ textDecoration: "none" }}>
                <div className={styles.cspWrapper}>
                  <div className={styles.inner}>
                    <img className={styles.logo} src={logo} alt="WAVES logo" />
                    <h3 className={styles.text}>Caribbean Stud Poker</h3>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CasinoGames;
