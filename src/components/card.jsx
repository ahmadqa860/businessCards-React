import React from "react";
import { Link } from "react-router-dom";
import "./css/card.css";

const Card = ({ card }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <section className="cards">
        <article className="card card--1">
          <div className="card__img"></div>
          <Link to="#" className="card_link">
            <div className="card__img--hover"></div>
          </Link>
          <div className="card__info">
            <span className="card__category"> {card.bizName}</span>
            <h3 className="card__title">{card.bizDescription}</h3>
            <span className="card__by">
              <p className="card-text border-top pt-2">
                <b>Tel: </b>
                {card.bizPhone}
                <br />
                {card.bizAddress}
              </p>
              <p className="card-text border-top pt-2">
                <Link to={`/my-cards/edit/${card._id}`}>Edit</Link> |
                <Link className="ml-2" to={`/my-cards/delete/${card._id}`}>
                  Delete
                </Link>
              </p>
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Card;
