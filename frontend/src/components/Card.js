import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) =>  (
  <div className="card">
    {/* Create a link that points to /product/id of the product */}
    <Link to={`/product/${props.card.id}`}>
      <div className="front">
        <img src={props.card.imgUrl} className="card-image" />
        <div className="container">
          <h3>{props.card.name}</h3>
          <h3><span className="price"> ${props.card.price}</span></h3> 
          <p>{props.card.description}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
