import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };
  }

  getPortfolioItems() {
    axios
      .get("https://jordan.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        this.setState({ 
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch((error) => {
        console.log("ERROR GORDO", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>Portfolio Form</h1>
        </div>
        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}

export default PortfolioManager;
