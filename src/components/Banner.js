import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/banner.scss';

class Banner extends Component {
  render() {
    return (        
			<div className='flex-col flex-center-both flex-space-around banner'>
        <div class='flex-col flex-center-cross upper'>
          <h3>3rd Workshop on Machine Learning & Data Analytics</h3>
          <h1>MLDA 2019</h1>
        </div>
        <div class='flex-col flex-center-cross lower'>
          <h1>25-31 May 2019</h1>
          <h1>Indian Institute of Information Technology, Allahabad</h1>
          <h1>Registration ends on 14.5.2019 12:00 AM IST</h1>
        </div>
      </div>
    );
  }
}

export default Banner;