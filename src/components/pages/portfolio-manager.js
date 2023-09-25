import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);

  }

  handleSuccessfulFormSubmission(portfolioItem) {
   this.setState({
    portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
   })
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError ERROR>>>", error);
  }

  getPortfolioItems() {
    axios
      .get("https://gaizkamg.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc")
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
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
          <h1>
            <PortfolioForm 
              handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
              handleFormSubmissionError={this.handleFormSubmissionError}
            
            />
          </h1>
        </div>
        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}

export default PortfolioManager;
