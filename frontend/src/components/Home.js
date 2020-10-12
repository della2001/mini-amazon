import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './Header'
import Product from './Product'
import CardGroup from 'react-bootstrap/CardGroup'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import '../Main.css';


class Home extends Component {
    state = {
        products: []
      }
      componentDidMount() {
        axios.get(`https://fakestoreapi.com/products`)
          .then(response => {
            const products = response.data;
            this.setState({ products });
          })
      }
    render() {
        
        return (
            <div>
                <Header/>
                <br></br>
                <ButtonToolbar> 
                    <ButtonGroup className="categoryBar">
                        <Button variant="secondary">Fashion</Button>{' '}
                        <Button variant="secondary">Food/Drinks</Button>{' '}
                        <Button variant="secondary">Home Appliances</Button>{' '}
                        <Button variant="secondary">School Supplies</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <br></br>
                <Container className="productGrid">
                    <Row>
                        <CardGroup>
                            { this.state.products.map(product => <Product product={product}/>)}
                        </CardGroup>
                    </Row>
                </Container>
             
                
            </div>
            
        )
    }
}

export default Home;