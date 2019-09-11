import React, {Component} from 'react'
import RecipeList from '../components/recipelist';
import Search from '../components/search';
import {recipeData} from '../data/tempList';

class Recipes extends Component {
  constructor(props) {
  super(props);
  
  }
  state = {
    recipes: recipeData,
    search: ""
  };
  handleChange = evt => {
    this.setState({
      search: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}

export default Recipes;