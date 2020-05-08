import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
import "./css/CForm.css";

class CreateCard extends Form {
  state = {
    data: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };
  handleCancel = () => {
    this.props.history.push("/my-cards");
  };

  doSubmit = async () => {
    const { data } = this.state;
    if (!data.bizImage) delete data.bizImage;
    await cardService.createCard(this.state.data);
    toast("A new card is opened");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Business Registration Form" />
        <div className="form-style-5">
          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
            <fieldset>
              <legend>
                <span className="number">1</span> Card Info
              </legend>
              {this.renderInput("bizName", "", "text", "Business Name")}
              {this.renderInput(
                "bizDescription",
                "",
                "text",
                "Business Description"
              )}
              {this.renderInput("bizAddress", "", "text", "Business Address")}
              {this.renderInput("bizPhone", "", "text", "Business Phone")}
              {this.renderInput("bizImage", "", "text", "Business Image URL")}
              {this.renderSubmitButton("Create Card")}
            </fieldset>
            <input type="button" onClick={this.handleCancel} value="Cancel" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCard;
