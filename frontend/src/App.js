import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details'


export default function App() {
  return (
    <Router>
      <div className="App">
        <Home/>
      </div>
    </Router>

  );
}


