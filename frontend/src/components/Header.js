import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../Main.css';

class Header extends Component {
    render() {
        return (
            <div class='Header'>
                <h1>Mini Amazon</h1>
                <div className="searchBar">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for product"/>
                        <InputGroup.Append>
                            <InputGroup.Text id="btnGroupAddon2">Search</InputGroup.Text>
                        </InputGroup.Append>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown" className="searchDropdown">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </div>
            </div>
            
        )
    }
}

export default Header;