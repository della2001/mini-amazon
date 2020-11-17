import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password:'', name: '', id: -1, submitted: false};
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
      .then(data =>  {
        console.log(data)
        this.setState({
          name: data.name, 
          id: data.user_id, 
          submitted: true
        }
      )})
      //.then(() => setTimeout(() => this.setState({ logged: true }), 5000))
      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();

  }

  



  render() {
    const { username, password, name } = this.state;
    /*
    if (this.state.logged) {
      return <Redirect to="/"></Redirect>
    }
    */

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={username} name="username" onChange={this.handleChange} placeholder="Username"/><br></br>
          <input type="text" value={password} name="password" onChange={this.handleChange} placeholder="Password"/><br></br>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        {this.state.submitted && this.state.id === undefined &&
          <div>User does not exist. Click here to <Link to="/register">Register</Link>.
          </div>
        }
        {this.state.submitted && this.state.id !== undefined &&
          <div><p>Welcome back, {name}! Click 
          <Link to={{
            pathname: '/',
            aboutProps:{
              name: {name}
            }
          }}>here</Link>
          to start shopping!</p></div>
      
        }
      </div>
      
    );
  }
}

export default Login;