import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';

export default class User extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { 
            username: localStorage.getItem('username'), 
            password: localStorage.getItem('password'), 
            name: localStorage.getItem('name'), 
            user_id: localStorage.getItem('uid'), 
            usertype: localStorage.getItem('usertype'),
            orders: []
        };
    }
    componentDidMount() {
        var url = '/order/' + this.state.user_id;
        fetch(url).then(function(response) {
            console.log(response);
            return response.json();
          })
          .then(data =>  {
            console.log(data);
            this.setState({
            orders: data
            });
            //return data;
        })
    }
    render() {
        
        return (
            <div>
                <div>&nbsp;</div>
                <div>
                    <p>Username: {this.state.username}</p>
                    <p>Name: {this.state.name}</p>                    
                    <p>Click <Link to={{ pathname: '/additem'}}>here</Link> to add an item to the site so that you can start selling!</p>
                </div>
                <div>&nbsp;</div>
                <div>
                    <h3>Order History</h3>
                    <p></p>
                </div>
                {this.state.orders}
            </div>
          

        )
        
    }
}
