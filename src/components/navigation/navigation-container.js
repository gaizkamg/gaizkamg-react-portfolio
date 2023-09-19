import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationContainer = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <NavLink to={route} activeClassName="nav-link-active">
       {linkText}
      </NavLink>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.error("ERROR signing out", error);
      });
  };
  
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          {props.loggedInStatus === "LOGGED_IN"
            ? dynamicLink("/portfolio-manager", "Portfolio Manager")
            : null}
          <NavLink to="/auth" activeClassName="nav-link-active">
            Auth
          </NavLink>
        </div>
      </div>
      <div className="right-side">
        GAIZKA MARTÍNEZ
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>Sign Out</a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationContainer);
