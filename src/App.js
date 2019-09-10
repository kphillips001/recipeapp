import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Recipes from './pages/recipes';
import SingleRecipe from './pages/singlerecipe';
import Error from './pages/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes' component={Recipes} />
            <Route path='/recipes/:id' component={SingleRecipe} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

