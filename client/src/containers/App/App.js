import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../../components/About/About'
import Products from '../Products/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/products" component={Products} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
