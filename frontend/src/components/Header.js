import React, { Component, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import '../Main.css';
import { Link, LinkButton } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <Row>
                    <Link to="/" className="title">Mini Amazon</Link>
                    <span className="searchBar">
                        {" "}
                        <Form value={this.props.search} onChange={this.props.searchProducts}>
                            <Form.Control type="text" placeholder="Search"></Form.Control>
                            {/*<Button variant="primary" type="submit">Submit</Button>*/}
                        </Form>
                    {/*
                        <form value={this.props.search} onSubmit={this.props.searchProducts} style={{ width:"500px" }}>
                            <input type="text" name="sb"/>
                            <input type="submit" value="Search for Product"/>
                        </form>
                    */}
                    </span>
                    <Link className="cartButton">Cart</Link>
                    <span className="loginButton">
                    <Link to='/login' className="loginLink">
                            <Button>
                                Register/Log In
                            </Button>
                    </Link>
                    </span>
                </Row>
                
                <div className="categoryBar">
                <Nav
                    className="justify-content-center"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Category</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
                
                
                
                

            </div>
            
        )
    }

    
}

export default Header;