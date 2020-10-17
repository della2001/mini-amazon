import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">Product Count: {this.props.count}</div>
                <div className="filter-categories">
                    {" "}
                    Categories <select value={this.props.categories} onChange={this.props.filterProducts}>
                        <option value="">Any</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                </div>
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
