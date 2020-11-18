import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {get_small_items} from './components/api.js'
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import data from './data/items.json';
import Filter from './components/Filter';
import Cart from './components/Cart'
import Button from 'react-bootstrap/Button';
import api from './api';
import Logout from './components/Logout'
import User from './components/User'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: -1,
        name: "",
        username: "", 
        isLoggedIn: "",
      }, 
      header: {
        search: "",
      }, 
      cards: [],
      test: [],
      cartItems: [],
      category: "",
      sort: "",
      username: "",
      id: null,
      name:""
    }
  }
  componentDidMount() {
    this.checkLogin();
    fetch('/items/small')
    .then(res => res.json())
    .then(items=> {
      this.setState({cards: items, test: items})
      return data; 
    })
    .catch(console.log)
  }

  handleUserData = (userData) => {
    if (userData.user_id != undefined){
      this.setState({user: {
        id: userData.user_id, 
        name: userData.name, 
        username: userData.username, 
        isLoggedIn: true
      }});
      localStorage.setItem("uid", userData.user_id)
      localStorage.setItem("name", userData.name)
      localStorage.setItem("isLoggedIn", true)
    }
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems})
  }
  searchProducts = (event) => {
    if (event.target.value === "") {
      this.setState({search: event.target.value})
    } else {
      this.setState({
        search: event.target.value, 
        cards: this.state.cards.filter((product) => product.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
      })
    }
  }

  sortProducts = (event) => {
    console.log(event.target.value)
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      cards: this.state.cards.slice().sort((a,b) => (
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a.id > b.id)? 1:-1)
      ))
    }))
  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({cards: this.state.test})
    } else {
      //console.log('FILTERED');
      this.setState({
        category: event.target.value, 
        cards: this.state.test.filter((product) => product.category.indexOf(event.target.value) >= 0)
      })
    }
  }

  checkLogin() {
    if (localStorage.getItem('uid')) {
      this.setState({
        user: {
          id: localStorage.getItem('uid'),
          username: localStorage.getItem('username'),
          name: localStorage.getItem('name'),
          isLoggedIn: true
        }
      })
    }
  }

  render() {
    console.log(this.state);
    let button;
    if(this.state.user.isLoggedIn) {
        button =  <Button href="/logout" className="loginButton">Log Out</Button>
    }else{
        button = <Button href="/login" className="loginButton">Log In</Button>
    }
    return (
      <Router>
        <div className="App">
          <Header search={this.state.header}
          searchProducts = {this.searchProducts}/>
          {button}
          {this.state.user.isLoggedIn &&
          <Button href="/user" className="profileButton">My Profile</Button>
        }
          <Filter count={this.state.cards.length}
          category={this.state.category}
          sort={this.state.sort}
          filterProducts = {this.filterProducts}
          sortProducts = {this.sortProducts}
          />
          <h3>Welcome{this.state.user.isLoggedIn &&
          <span>, {this.state.user.name}</span>
        }!</h3>
        <Route exact path="/user" render={(props) => {
              console.log(this.state.user.id);
              console.log(props);
              return (
                <User
                  uid={this.state.user.id}
                />
              );
            }} />
          
          <Switch>
            <Route exact path="/" render={(props) => {
              console.log(props);
              return (
              <Home items={this.state.cards}/>
              );
            }}/>
            <Route exact path="/register" render={(props) => (
              <Register/>
            )} />
            
            <Route exact path="/login" render={(props) => (
              <Login onLogin={this.handleUserData}/>
            )} />
            <Route exact path="/logout" render={(props) => {
              localStorage.clear();
              return (
              <Logout/>
            )}} />
            <Route exact path="/product/:item_id" render={(props) => {
              console.log(this.state.cards);
              console.log(props);
              let cardPosition = props.location.pathname.replace('/product/', '');
              return (
                <ProductDetails
                  card={this.state.cards.find(o => o.item_id === parseInt(cardPosition))}
                />
              );
            }} />
            <Route exact path="/cart" component={Cart} />
            
            <Route component={Error} />
          </Switch>   
        </div>
      </Router>
    );
  }
}

export default App;
