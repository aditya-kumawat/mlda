import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuOption from './MenuOption';

class MenuList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { options } = this.props;
    
    if(options.length != 0) {
      return (
        <div class='flex-col menu-list'>
          {
            options.map((option, index) => {
              return(
                <MenuOption option={option} key={index} />
              );
            })
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MenuList;