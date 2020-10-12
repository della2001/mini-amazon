import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Header from './Header';
import '../Main.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
/*
  const Details = ({ match }) => {
    state = {
        products: []
    }
    axios.get(`https://fakestoreapi.com/products/${match.params.productId}`)
    .then(response => {
      const product = response.data;
      this.setState({ product });
    })
  //const product = data.find(p => p.id === Number(match.params.productId));
  let productDetails;

  if (product)
    productDetails = (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  else productDetails = <h2> Sorry. Product doesn't exist </h2>;

  return (
    <div>
      {productDetails}
    </div>
  );
};

export default Details;
*/

class Details extends Component {
    
    state = {
        details:  {
            id:1,
            title:'...',
            price:'...',
            category:'...',
            description:'...',
            image:'...'
        }
      }
      /*
      componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
          .then(response => {
            console.log(params);
            const details = response.data;
            this.setState({ details });
          })
      }
      */
                
                 
      
    render() {
        //const { product } = this.state.details;
        console.log('ya called it')
        return (
            <div>
                <p>yeets</p>
                <h1>{ this.state.details.name }</h1>
                <Image src={this.state.details.image} thumbnail></Image>
                <p>{this.state.details.description}</p>
                
            </div>
            
        )
    }
}

export default Details;
