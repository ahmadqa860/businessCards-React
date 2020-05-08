import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";
import PageHeader from "./common/pageHeader";

import "./css/SForm.css";
import "./js/script";

class Signin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="wrapper rounded">
        <div className="Lcontainer">
          <PageHeader titleText="Welcome To Our Card Web App" />

          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            method="POST"
            className="Lform"
          >
            {this.renderInput("email", "", "email", "Email")}
            {this.renderInput("password", "", "password", "Password")}
            {this.renderButton("Signin")}
          </form>

          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      /*       <div className="wrapper">
        <div className="Lcontainer">
          <h1>Welcome</h1>

          <form className="Lform">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */
    );
  }
}

export default Signin;
