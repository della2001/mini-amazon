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
      cards: [],
    }
  }

  componentWillMount() {
    this.setState({
      cards: data,
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Filter count={this.state.cards.length}/>
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
