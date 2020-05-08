import React, { Component } from "react";
import "./css/test.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="jumbotron p-4 p-md-5 rounded mt-4">
          <div className="col-md-6 px-0 ">
            <h1 className="display-4 font-italic">
              Welcome to Our Web App Business Cards
            </h1>
            <p className="lead my-3">
              Our site gives you the opportunity to promote your business in
              online advertising, are you a business owner? Register the
              business card in a business account and interested customers will
              contact you.
            </p>
            <p className="lead mb-0"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
