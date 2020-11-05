import { Link } from 'react-router-dom';
import './Card.css';
import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  render() {
    const { product } = this.state;
    return (
      <div className="card">
    <Link to={`/product/${this.props.card.id}`}>
      <div className="front">
        <img src={this.props.card.image} className="card-image" />
        <div className="container">
          <h3><span className="cardtitle">{this.props.card.name}</span></h3>
          <h3><span className="price"> ${this.props.card.price}</span></h3> 
          {/*<p>{this.props.card.description}</p>*/}
          <br></br>
          <button
              /*onClick={() => this.props.addToCart(product)}*/
              className="button primary"
              >
              Add To Cart
          </button>
        </div>
      </div>
    </Link>
  </div>
    )
  }
}
/*
const Card = (props) =>  (
  <div className="card">
    <Link to={`/product/${props.card.id}`}>
      <div className="front">
        <img src={props.card.imgUrl} className="card-image" />
        <div className="container">
          <h3>{props.card.name}</h3>
          <h3><span className="price"> ${props.card.price}</span></h3> 
          <p>{props.card.description}</p>
          <button onClick={() => this.props.addToCart(props.card)} className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
*/