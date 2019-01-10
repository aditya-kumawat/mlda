import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var optionClass = ['flex-row', 'flex-center-cross', 'option'];
var hoverClass;

class MenuOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    })
  }
  menuMouseOver() {
    this.toggleHover();
  }
  
  menuMouseOut() {
    this.toggleHover();
  }

  
  render() {
    var { option } = this.props;
    if(this.state.hover) hoverClass = ['active'];
    else hoverClass = [];

    return(
      <Link to='/' className={[...optionClass, ...hoverClass].join(' ')} onMouseOver={this.menuMouseOver.bind(this)} onMouseOut={this.menuMouseOut.bind(this)}>
        <h4>{option.name.toUpperCase()}</h4>
      </Link>
    );
  }
}

export default MenuOption;