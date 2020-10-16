import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div class='loginForm'>
                <h1>Register/Log In</h1><br></br>
                <Form>
                <Row>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
            
        )
    }
}
 
export default Login;
