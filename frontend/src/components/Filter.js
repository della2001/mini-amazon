import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <div className="filterCount">Product Count: {this.props.count}</div>
                <div className="filterSort">
                    {" "}
                    Order <select>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filterCategories">
                    {" "}
                    Categories <select>
                        <option value="any">Any</option>
                        <option value="home">Home Appliances</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>
            </div>
        )
    }
}
