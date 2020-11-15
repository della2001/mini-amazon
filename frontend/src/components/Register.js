import React, { Component, useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      fetch("/registration/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
    console.log('REGISTERED NEW USER');
    console.log(data);
    };

  return (
    <div className="Register">
      <h3>Create account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="name" placeholder="Name" ref={register} />
        </div>

        <div>
          <input name="username" placeholder="Username" ref={register} />
        </div>

        <div>
          <input name="password" placeholder="Password" ref={register} />
        </div>

        <div>
          <input name="address" placeholder="Address" ref={register}/>
        </div>

        <div>
          <label htmlFor="is_buyer">Buyer</label>
          <input type="checkbox" name="is_buyer" placeholder="buyer" ref={register}/>
        </div>

        <div>
          <label htmlFor="is_seller">Seller</label>
          <input type="checkbox" name="is_seller" placeholder="seller" ref={register}/>
        </div>

        <input type="submit" value="Register"/>
      </form>
    </div>
  );
}

export default Register;
