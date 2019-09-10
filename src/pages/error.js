import React, { Component } from 'react'
import Header from '../components/header';
import {Link} from 'react-router-dom';

class Error extends Component {
  render() {
    return (
    <Header title='404' styleClass='default-hero'>
      <h2 className='text-light text-uppercase'>You're in the wrong place</h2>
      <Link 
        to='/'
        className='text-uppercase btn btn-secondary btn-lg mt-3'
        >
        return home
      </Link>
    </Header>
    )
  }
}

export default Error;
