import Card from './Card';
import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
        {/*
            <ButtonToolbar> 
                    <ButtonGroup className="categoryBar">
                        <Button variant="secondary">Fashion</Button>{' '}
                        <Button variant="secondary">Food/Drinks</Button>{' '}
                        <Button variant="secondary">Home Appliances</Button>{' '}
                        <Button variant="secondary">School Supplies</Button>
                    </ButtonGroup>
                </ButtonToolbar>
        */}
                
                <br></br>
                <div className="Grid animated bounceInUp">
                    <Container>
                        <Row>
                        {
                props.cards.map((card) => (
                    <Card 
                    key={card.id} 
                    card={card} 
                    />
                ))
                }
                        </Row>
                    </Container>
                
            </div>
    </div>

  );
};
 
export default Home;
