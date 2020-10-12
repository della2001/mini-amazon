import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Details from './Details'
import '../Main.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div>
                <Router>
                <Card style={{ width: '20rem'}} className="productCard">
                    <Card.Img className="productImage" variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{ product.title }</Card.Title>
                        <Button variant="primary" size="sm">Add to Cart</Button> &nbsp;
                        <Button variant="secondary" size="sm">View Details</Button>
                        <Link to={`products/${product.id}`}>testlink</Link>
                    </Card.Body>
                </Card>
                <Switch>

                    <Route path={`products/:product.id`} component = {Details}></Route>
                </Switch>
                </Router>

            </div>
            
        )
    }
}

function ProductDetails() {
    let { pid } = useParams();
  
    return (
      <div>
        <h1>{pid}</h1>
      </div>
    );
  }

export default Product;