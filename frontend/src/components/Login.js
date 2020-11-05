import React, { Component, useState, useEffect } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

import { useForm } from "react-hook-form";


function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });
        
    };


    

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)} action="/registration/" method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Name" ref={register} />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Username" ref={register} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Password" ref={register} />
        </div>

        <div>
          <label htmlFor="is_buyer">Buyer</label>
          <input
            type="checkbox"
            name="is_buyer"
            placeholder="buyer"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            placeholder="Address"
            /*type="email"*/
            ref={register}
          />

        <div>
          <label htmlFor="is_seller">Seller</label>
          <input
            type="checkbox"
            name="is_seller"
            placeholder="seller"
            ref={register}
          />
        </div>

        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;


/*class Login extends Component {

    
    
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            name:'',
            username:''
        };
      }

    handleSubmit(event) {
        console.log("making request");
        fetch("/registration/")
        .then(res => res.json())
        .then(
        result => {
            this.setState({
                user_id: result.user_id,
                items: result.name,
                username: result.username
                });
            }
        )
        console.log('userid after', this.state.user_id)
    }

    render() {
        
        return (
        <div class='loginForm'>
            <h1>Register/Log In</h1><br></br>
            <Form onSubmit={this.handleSubmit} action="http://localhost:5000/registration/" method="POST">
                <Form.Control id="name" name="name" placeholder="Name" />
                <Form.Control id="username" name="username" placeholder="Username" />
                <Form.Control id="password" name="password" placeholder="Password" />
                <Form.Control id="address" name="address" placeholder="Email Address" />
                <Form.Check label="Seller" size="sm" name="isSeller" />
                <Form.Check label="Buyer" size="sm" name="isBuyer" />
                <br></br>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        
    )
    }
}*/

