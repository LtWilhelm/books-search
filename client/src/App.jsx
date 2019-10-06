import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

import NavBar from './components/NavBar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar location={document.location.pathname} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>
    );
  }
}

export default App;
