import React, { Component } from 'react';
import Header from '../Header';
import Banner from '../Banner';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='afterHeader'>
          <Banner />
        </div>
      </>
    );
  }
}

export default Home;