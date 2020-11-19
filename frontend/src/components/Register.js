import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', username: '', password:'', address: '', is_buyer: false, is_seller: false }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this) 
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(JSON.stringify(this.state))
    fetch('/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('uid', data.user_id)
        this.setState({
          name: data.name, 
          id: data.user_id, 
          submitted: true
        })
      })
  }



  render() {
    const { username, password, name, address } = this.state

    return (
      <div className='auth'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={name} name='name' onChange={this.handleChange} placeholder='Name'/><br></br>
          <input type='text' value={username} name='username' onChange={this.handleChange} placeholder='Username'/><br></br>
          <input type='text' value={password} name='password' onChange={this.handleChange} placeholder='Password'/><br></br>
          <input type='text' value={address} name='address' onChange={this.handleChange} placeholder='Address'/><br></br>
          <div className='checkboxes'>
            <label htmlFor='is_buyer'>Buyer</label><input type='checkbox' checked={this.state.is_buyer} name = 'is_buyer' onChange={this.handleChange}/>
            <div style={{ width: 16 }} />
            <label htmlFor='is_seller'>Seller </label><input type='checkbox' checked={this.state.is_seller} name = 'is_seller' onChange={this.handleChange}/>
          </div>
          <Button type='submit'>Register</Button>
        </form>
        {this.state.id !== undefined && (
          <span>Registration successful! Welcome, {name}. Click <a href='/'>here</a> to start browsing!</span>
        )}
      </div>
      
    )
  }
}

export default Register