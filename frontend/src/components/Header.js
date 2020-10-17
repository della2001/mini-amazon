import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../Main.css';
import { Link, LinkButton } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div class='Header'>
                <Link to="/" className="title">Mini Amazon</Link>
                <div className="searchBar">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for product"/>
                        <InputGroup.Append>
                            <InputGroup.Text id="btnGroupAddon2">Search</InputGroup.Text>
                        </InputGroup.Append>
                        <Link to='/login' className="loginLink">
                            <Button>
                                Register/Log In
                            </Button>
                        </Link>
                    </InputGroup>
                </div>
                <br></br>
            </div>
            
        )
    }
}

export default Header;