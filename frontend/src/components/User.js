import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { 
            username: localStorage.getItem('username'), 
            password: localStorage.getItem('password'), 
            name: localStorage.getItem('name'), 
            user_id: localStorage.getItem('uid'), 
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
