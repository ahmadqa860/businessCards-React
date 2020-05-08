import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";
import { Link } from "react-router-dom";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Manage Your Cards in the list below...</p>
          </div>
          <span className="ml-auto">
            <Link to="/create-card" className="text-success">
              <i className="fas fa-plus-circle mr-2"></i>Add Card
            </Link>
          </span>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => <Card key={card._id} card={card} />)}
        </div>
      </div>
    );
  }
}

export default MyCards;
