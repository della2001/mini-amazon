import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
// import api from './api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      test: [],
      cartItems: [],
      search: '',
      category: '',
      sort: '',
      username: '',
      id: null,
      name:'',
      user: {
        id: -1,
        name: "",
        username: "", 
        isLoggedIn: "",
      }, 
    }
  }

  componentDidMount() {
    const userId = localStorage.getItem('uid')
    if (userId) {
      this.setState({
        user: {
          id: userId,
          username: localStorage.getItem('username'),
          name: localStorage.getItem('name'),
          isLoggedIn: true
        }
      })
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/products/:id' component={ProductDetails} />
            <Route exact path='/cart' component={Cart} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
