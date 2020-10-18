import React, { Component, useState } from 'react';
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
            <div className='Header'>
                <Link to="/" className="title">Mini Amazon</Link>
                <div>
                <Link to='/login' className="loginLink">
                        <Button>
                            Register/Log In
                        </Button>
                </Link>
                </div>
                <br></br>
                <div className="searchBar">
                    <form value={this.props.search} onSubmit={this.props.searchProducts}>
                        <input type="text" name="sb"/>
                        <input type="submit" value="Search for Product"/>
                    </form>
                </div>
                

            </div>
            
        )
    }

    
}

export default Header;