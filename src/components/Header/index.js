import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/header.scss';

import MenuButton from './MenuButton';

var menus = [
  { name: 'Home',
    link: '/',
    options: [
    ]
  },
  { name: 'Conference Information',
  link: '/',
  options: [
    {name: 'A', link: ''},
    {name: 'B', link: ''},
    ]
  },
  { name: 'General Information',
    link: '/',
    options: [
    ]
  },
  { name: 'Registration Information',
    link: '/',
    options: [
    ]
  },
]

class Header extends Component {
  render() {
    return (        
			<div className='flex-row flex-center-both header'>
        <Link to='/' className='flex-col flex-center-cross title'>
          <h1>MLDA 2018</h1>
        </Link>
        <div className='flex-row flex-center-cross menu-container'>
          { 
            menus.map((menu, index) => {
              return (
                <MenuButton menu={menu} key={index} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Header;