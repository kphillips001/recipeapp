import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './pages/home';
import Recipes from './pages/recipes';
import SingleRecipe from './pages/singlerecipe';
import Error from './pages/error';

class App extends Component {
  render() {
    return (
      <div>
        <Home /> 
        <Recipes />
        <SingleRecipe />
        <Error />
      </div>
    );
  }
}
export default App;

