import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuList from './MenuList';

var menuClass = ['menu'];
var hoverClass = [''];

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  setActive(value) {
    this.setState({
      active: value,
    })
  }

  menuButtonEnter() {
    this.setActive(true);
  }
  
  menuButtonLeave() {
    this.setActive(false);
  }

  render() {
    var {menu} = this.props;
    if(this.state.active) hoverClass = ['active'];
    else hoverClass = [];

    return (
      <div class='menu-button' onMouseLeave={this.menuButtonLeave.bind(this)}>
        <Link to='/' className={[...menuClass, ...hoverClass].join(' ')} onMouseEnter={this.menuButtonEnter.bind(this)}>
          <h4>{menu.name.toUpperCase()}</h4>
        </Link>
        {
          this.state.active &&
          <MenuList options={menu.options} />
        }
      </div>
    );
  }
}

export default MenuButton;