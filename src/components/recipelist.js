import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeList extends Component {
  render() {
    return (
      <div>
        Hello From recipe list
        <Recipe />
      </div>
    );
  }
}

export default RecipeList;
