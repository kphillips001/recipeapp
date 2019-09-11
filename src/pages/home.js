import React, { Component } from 'react'
import Header from '../components/header';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    <Header title='fabulous recipes'>
      <Link 
          to='recipes' 
          className='text-uppercase btn btn-secondary btn-lg mt-3'>
          search recipes
      </Link>
    </Header>
    );
  }
}

export default Home;