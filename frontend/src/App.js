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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      test: [],
      cartItems: [],
      search: "",
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
      console.log(items);
      this.setState({cards: items})
      return data; 
    })
    .catch(console.log)
  }

  /*componentDidMount() {
    fetch('/items/all')
      .then(response => response.json())
      .then(data => this.setState({ test: data }));
    console.log('fetched items');
    console.log(this.state.test);
  }*/
  


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
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <Header search={this.state.search}
          searchProducts = {this.searchProducts}/>
          <Filter count={this.state.cards.length}
          category={this.state.category}
          sort={this.state.sort}
          filterProducts = {this.filterProducts}
          sortProducts = {this.sortProducts}
          />

          <Switch>
            <Route exact path="/" render={(props) => (
              <Home cards={this.state.cards}/>
            )} />
            <Route exact path="/register" render={(props) => (
              <Register/>
            )} />
            <Route exact path="/login" render={(props) => (
              <Login/>
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
