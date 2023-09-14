import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to='/' activeClassName='nav-link-active'>Home</NavLink>
        <NavLink to='/about-me'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </div>
    );
  }
}

export default NavigationContainer;
