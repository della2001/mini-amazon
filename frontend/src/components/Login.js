import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password:'', name: '', id: null, submitted: false };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this); 
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    var url = '/login/' + this.state.username + '/' + this.state.password;

    fetch(url).then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(data =>  this.setState({name: data.name, id: data.user_id, submitted: true}), );
    event.preventDefault();
}


  render() {
    const { username, password, name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={username} name="username" onChange={this.handleChange} placeholder="Username"/>
          <input type="text" value={password} name="password" onChange={this.handleChange} placeholder="Password"/>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        {this.state.submitted ? <h3>Welcome back, {name}!</h3> : ''}
      </div>
      
    );
  }
}

export default Login;