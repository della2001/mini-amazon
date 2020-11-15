import React, { Component, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


function Login() {
  
    const { login, handleSubmit } = useForm();
    const onSubmit = data => {
      var url = "/user/test";
      console.log(url);
      fetch(url);
      console.log('LOGGED IN USER');
      console.log(data);
      };
  
    return (
      <div className="Login">
        <h3>Log into existing account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input name="username" placeholder="Username" ref={login} />
          </div>
          <div>
            <input name="password" placeholder="Password" ref={login} />
          </div>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
    
  
}

export default Login;