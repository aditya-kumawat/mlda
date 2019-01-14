import React, { Component } from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Info from '../Info';

class Home extends Component {
  render() {
    return (
      <>
        <Header activeTab='home' />
        <div className='afterHeader'>
          <Banner />
          <Info />
        </div>
      </>
    );
  }
}

export default Home;