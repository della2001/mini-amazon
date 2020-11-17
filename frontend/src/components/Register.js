import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', username: '', password:'', address: '', is_buyer: false, is_seller: false };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this); 
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    console.log(JSON.stringify(this.state));
    fetch('/registration/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
        }
    ).then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(data =>  {this.setState({
        name: data.name, 
        id: data.user_id, 
        submitted: true
      })});
    event.preventDefault();

}



  render() {
    const { username, password, name, address } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={name} name='name' onChange={this.handleChange} placeholder="Name"/><br></br>
            <input type="text" value={username} name='username' onChange={this.handleChange} placeholder="Username"/><br></br>
            <input type="text" value={password} name='password' onChange={this.handleChange} placeholder="Password"/><br></br>
            <input type="text" value={address} name='address' onChange={this.handleChange} placeholder="Address"/><br></br>
            <label htmlFor="is_buyer">Buyer</label><input type="checkbox" checked={this.state.is_buyer} name = "is_buyer" onChange={this.handleChange}/><br></br>
            <label htmlFor="is_seller">Seller</label><input type="checkbox" checked={this.state.is_seller} name = "is_seller" onChange={this.handleChange}/><br></br>
            <input type="submit" value="Submit" />
        </form>
        <br></br>
        {this.state.id !== undefined &&
          <div>Registration successful! Welcome, {name}. Click <Link to="/">here</Link> to start browsing!</div>
        }
      </div>
      
    );
  }
}

export default Register;
/*
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
*/