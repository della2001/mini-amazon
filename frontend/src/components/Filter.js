import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    <ButtonGroup onClick={this.props.filterProducts}>
                        <Button variant="link" value="Clothing">Clothing</Button>
                        <Button variant="link" value="Footwear">Footwear</Button>
                        <Button variant="link" value="Furniture">Furniture</Button>
                        <Button variant="link" value="Stationery">Stationery</Button>
                        <Button variant="link" value="Pet Supplies">Pet Supplies</Button>
                    </ButtonGroup>
                </div>
                {/*
                <div className="filter-result">Product Count: {this.props.count}</div>
                <div className="filter-categories">
                    {" "}
                    Categories <select value={this.props.category} onChange={this.props.filterProducts}>
                        <option value="">Any</option>
                        <option value="Arts">Arts, Crafts & Sewing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home">Home Decor</option>
                        <option value="Kitchen">Kitchen and Dining</option>
                        <option value="Garden">Garden</option>
                    </select>
                </div>
                */}
                
                <div className="filter-sort">
                    {" "}
                    Order <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Price (Lowest)</option>
                        <option value="highest">Price (Highest)</option>
                    </select>
                </div>

            </div>
        )
    }
}
