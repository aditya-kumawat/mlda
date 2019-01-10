import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/banner.scss';

class Banner extends Component {
  render() {
    return (        
			<div className='flex-col flex-center-both banner'>
        <Link to='/' className='flex-col flex-center-cross title'>
          <h1>MLDA 2018</h1>
        </Link>
      </div>
    );
  }
}

export default Banner;