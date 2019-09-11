import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Recipes from './pages/recipes';
import SingleRecipe from './pages/singlerecipe';
import Default from './pages/default';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipes' component={Recipes} />
              <Route path='/recipes/:id' component={SingleRecipe} />
              <Route component={Default} />
            </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

