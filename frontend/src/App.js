import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header'
import Login from './components/Login'
import data from './data/items.json';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data,
      categories: "",
      sort: ""
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
      this.setState({categories: event.target.value, cards: data})
    } else {
      this.setState({
        categories: event.target.value, 
        cards: data.filter((product) => product.categories.indexOf(event.target.value) >= 0)
      })
    }
  }
  /*
  componentWillMount() {
    this.setState({
      cards: data,
    })
  }
  */
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Filter count={this.state.cards.length}
          categories={this.state.categories}
          sort={this.state.sort}
          filterProducts = {this.filterProducts}
          sortProducts = {this.sortProducts}
          />
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home cards={this.state.cards} />
            )} />
            <Route exact path="/login" render={(props) => (
              <Login/>
            )} />
            <Route exact path="/product/:id" render={(props) => {
              let cardPosition = props.location.pathname.replace('/product/', '');
              return (
                <ProductDetails
                  card={this.state.cards[cardPosition]}
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
