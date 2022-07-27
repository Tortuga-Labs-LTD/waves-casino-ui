import React, { Component } from "react";
// import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { ForgotModal } from "../../../Components/Modal/userModal";
import AuthContext from "../../../Components/Authentication/Auth";
import { seedUtils, libs } from "@waves/waves-transactions";
const { decryptSeed, base58Encode, blake2b, stringToBytes } = libs.crypto;

class Login extends Component {
  static contextType = AuthContext;

  constructor() {
    super();
    this.state = {
      password: "",
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("hash")) {
      this.props.history.push("/nlc/CreatePassword");
    }
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitHandler(e) {
    e.preventDefault();
    this.validatePassword();
  }

  validatePassword = () => {
    try {
      const encryptedAccount = localStorage.getItem("hash");
      const hash = localStorage.getItem("seedHash");
      const str = decryptSeed(
        encryptedAccount,
        this.state.password,
        process.env.REACT_APP_ROUNDS
      );

      if (base58Encode(blake2b(stringToBytes(str))) !== hash) {
        throw new Error("Wrong Password");
      }

      if (str === this.state.password) {
        this.context.setUser({
          ...this.context.user,
          password: this.state.password,
          isLogged: true,
        });
        this.props.history.push("/RegisterOrImport");
      } else {
        const seedData = new seedUtils.Seed(str, process.env.REACT_APP_CODE);
        this.context.setUser({
          ...this.context.user,
          password: this.state.password,
          isLogged: true,
          address: seedData.address,
          isAuth: true,
          publicKey: seedData.keyPair.publicKey,
          isKeeper: false,
        });
        this.context.setSeed(seedData.phrase);
        this.context.initiateUser(seedData.address);
        this.props.history.push("/Games");
      }
    } catch (e) {
      this.setState({ error: e.message });
    }
  };

  render() {
    return (
      <>
        <Container fluid className="rsec1">
          <Row>
            <Col>
              <h2 className="txt1 text-uppercase text-center mb-4 pb-0">
                {" "}
                Login{" "}
              </h2>
              <p className="rtxt2 mb-4 text-uppercase">Welcome Back!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit={(e) => this.submitHandler(e)}>
                <div className="createpassword">
                  <p className="mr-2">Enter Password: </p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required
                  />
                </div>
                {this.state.error ? (
                  <p className="errorMessage">{this.state.error}</p>
                ) : null}
              </form>
              <div>
                <button
                  type="submit"
                  className="button rbtn text-uppercase mt-5"
                  onClick={() => this.validatePassword()}
                >
                  Continue
                </button>
                <ForgotModal />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
