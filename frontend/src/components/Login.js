import React, { Component, useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      userID: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log("making request")
        fetch("/registration", {
            method:"POST",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(this.state.value)
            }
        ).then(response => {
    
            return response.json()
            })
            .then(json => {
            
            this.setState({playerName: json[0]})
            })
      }

    render() {
        return (
            <div class='loginForm'>
                <h1>Register/Log In</h1><br></br>
                <Form onSubmit={this.handleSubmit} action="http://localhost:5000/registration/" method="POST">
                    <Form.Control name="name" placeholder="Name" />
                    <Form.Control name="username" placeholder="Username" />
                    <Form.Control name="password" placeholder="Password" />
                    <Form.Control name="address" placeholder="Email Address" />
                    <Form.Check label="Seller" size="sm" name="isSeller" />
                    <Form.Check label="Buyer" size="sm" name="isBuyer" />
                    <br></br>
                {/*<Row>
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <br></br>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                */}
                <Button variant="primary" type="submit" onChange={this.handleChange} value={this.state.value}>
                    Submit
                </Button>
                </Form>
            </div>
            
        )
    }
}
 

export default Login;
