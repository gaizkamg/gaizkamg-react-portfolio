import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
            <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
            <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
            <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
          </div>
        </div>
        <div class="right-side">GAIZKA MARTÍNEZ</div>
      </div>
    );
  }
}

export default NavigationContainer;
