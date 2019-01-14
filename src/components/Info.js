import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/info.scss';

class Info extends Component {
  render() {
    return (        
			<div className='flex-col flex-center-both info'>
        <div className='flex-row flex-center-main title'>
          <h2>Welcome to MLDA 2019</h2>
        </div>
        <div className='flex-col container'>
          <div className=''>
          </div>
          <div className='flex-col flex-center-both highlight'>
            <h2>Submission Due : 31 July 2018 (IST = GMT+5:30)</h2>
            <p>Notification : 31 August 2018
            <br></br>
            Final Version Due : 14 September 2018
            <br></br>
            <br></br>
            Tutorials : 15 - 16 December 2018
            <br></br>
            Conference : 17 - 19 December 2018</p>
            <h2>Deadline For Early Registration : 30 November 2018 (IST = GMT+5:30)</h2>
            <p>~late registration fee will be applied after the deadline~</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;