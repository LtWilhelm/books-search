import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Book from "./components/Book";
import Search from './pages/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar location={document.location.pathname} />
        <Jumbotron />
        <Search />
      </Router>
    );
  }
}

export default App;
