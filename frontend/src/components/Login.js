import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password:'', name: '', id: -1, submitted: false}
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this) 
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    var url = '/login/' + this.state.username + '/' + this.state.password

    fetch(url).then(function(response) {
        console.log(response)
        return response.json()
      })
      .then(data =>  {
        // console.log(data)
        localStorage.setItem('uid', data.user_id)
        this.setState({
          name: data.name, 
          id: data.user_id, 
          submitted: true
        }
      )})
      //.then(() => setTimeout(() => this.setState({ logged: true }), 5000))
      .catch(function(error) {
        console.log(error)
      })
    
  }

  render() {
    const { username, password, name } = this.state

    return (
      <div className='auth'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={username} name='username' onChange={this.handleChange} placeholder='Username'/><br></br>
          <input type='text' value={password} name='password' onChange={this.handleChange} placeholder='Password'/><br></br>
          <Button type='submit'>Login</Button>
        </form>

        {!this.state.submitted && (
          <span>
            Don't have an account? Click here to <Link to='/register'>Register</Link>.
          </span>
        )}
        {this.state.submitted && this.state.id === undefined && (
          <span>
            User does not exist. Click here to <Link to='/register'>Register</Link>.
          </span>
        )}
        {this.state.submitted && this.state.id !== undefined && (
          <span>
            Welcome back, {name}! Click <a href='/'>here</a> to start shopping!
          </span>
        )}
      </div>
    )
  }
}

export default Login
