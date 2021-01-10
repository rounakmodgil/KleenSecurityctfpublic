import React, { Component } from "react";
import logo from "./images/logo.png";
import loginimg from "./images/loginimg.png";
import { Link as OtherLink } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit(event) {}

  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="login-main-container">
          <OtherLink to="/">
            <img
              src={logo}
              style={{
                paddingTop: "18px",
                paddingLeft: "50px",
                cursor: "pointer",
              }}
            />
          </OtherLink>
          <div className="login-container">
            <div className="login-container-1">
              <div className="login-container-1-1">
                <div className="login-container-1-1-1">
                  <OtherLink to="/joinnow" style={{ textDecoration: "none" }}>
                    <div className="login-signup1">Sign up</div>
                  </OtherLink>
                  <OtherLink to="/login" style={{ textDecoration: "none" }}>
                    <div className="login-signup2">Login</div>
                  </OtherLink>
                </div>
              </div>
              <div className="login-container-2">
                <div>
                  <img src={loginimg} />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="login-container-2-2">
                    <div className="login-label-container">username</div>
                    <input
                      type="text"
                      name="username"
                      className="login-input-container"
                      onChange={this.myChangeHandler}
                      required
                    />
                    <div className="login-label-container">E-mail</div>
                    <input
                      type="email"
                      name="email"
                      className="login-input-container"
                      onChange={this.myChangeHandler}
                      required
                    />
                    <div className="login-label-container">Password</div>
                    <input
                      type="password"
                      name="password"
                      className="login-input-container"
                      onChange={this.myChangeHandler}
                      required
                    />
                    <div className="login-checkbox-container">
                      <input type="checkbox" className="login-checkbox" />
                      <div className="login-checkbox-text">
                        By signing up I agree with{" "}
                        <span className="login-checkbox-text2">
                          terms and conditions
                        </span>
                      </div>
                    </div>
                    <input
                      type="submit"
                      name="Sign up"
                      value="Sign up"
                      style={{ padding: "5px 25px" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
