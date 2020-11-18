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
        var url = '/ordercomplete/' + this.state.user_id;
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
                                
                    <p>You have successfully completed your order! Click <Link to={{ pathname: '/'}}>here</Link> to continue shopping!</p>
                </div>
                <div>&nbsp;</div>
                
                </div>

        )

    
        }
    }
