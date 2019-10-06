import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar location={document.location.pathname} />
        <Jumbotron />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>
    );
  }
}

export default App;
