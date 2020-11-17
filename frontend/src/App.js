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
    fetch('/items/small')
    .then(res => res.json())
    .then(items=> {
      this.setState({cards: items})
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
      this.setState({category: event.target.value, cards: data})
    } else {
      console.log('FILTER');
      console.log(data.filter((product) => product.category.indexOf(event.target.value) >= 0));
      this.setState({
        category: event.target.value, 
        cards: data.filter((product) => product.category.indexOf(event.target.value) >= 0)
      })
    }
  }


  render() {
    let button;
    if(this.state.user.isLoggedIn) {
        button =  <Button href="/logout" className="loginButton">LogOut</Button>
    }else{
        button = <Button href="/login" className="loginButton">Log In</Button>
    }
    return (
      <Router>
        <div className="App">
          <Header search={this.state.header}
          searchProducts = {this.searchProducts}/>
          {button}
          <Filter count={this.state.cards.length}
          category={this.state.category}
          sort={this.state.sort}
          filterProducts = {this.filterProducts}
          sortProducts = {this.sortProducts}
          />
          <Switch>
            <Route exact path="/" render={(props) => {
              console.log(props);
              return (
              <Home cards={this.state.cards}/>
              );
            }}/>
            <Route exact path="/register" render={(props) => (
              <Register/>
            )} />
            <Route exact path="/login" render={(props) => (
              <Login onLogin={this.handleUserData}/>
            )} />
            <Route exact path="/product/:id" render={(props) => {
              let cardPosition = props.location.pathname.replace('/product/', '');
              return (
                <ProductDetails
                  card={this.state.cards.find(o => o.id === parseInt(cardPosition))}
                />
              );
            }} />
            <Route component={Error} />
          </Switch>   
        </div>
      </Router>
    );
  }
}

export default App;
