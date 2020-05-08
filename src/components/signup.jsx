import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";
import "./css/SForm.css";
import "./js/script";

class Signup extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    data.biz = false;

    try {
      await http.post(`${apiUrl}/users`, data);
      toast("A new acoount is opened");
      this.props.history.replace("/signin");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: "Email is taken" } });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="wrapper rounded">
        <div className="Lcontainer">
          <PageHeader titleText="Sign Up For a Better experience" />

          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            method="POST"
            className="Lform"
          >
            {this.renderInput("email", "", "email", "Email")}
            {this.renderInput("password", "", "password", "Password")}
            {this.renderInput("name", "", "", "Name")}
            {this.renderButton("Signup")}
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
      </div>
    );
  }
}

export default Signup;
