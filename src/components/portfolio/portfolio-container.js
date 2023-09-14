import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: 'eCommerce' },
        { title: "Eventbrite", category: 'Scheduling' },
        { title: "Ministry Safe", category: 'Enterprise' },
        { title: "SwingAway", category: 'eCommerce' },
      ],
    };

    this.hadlePageTitleUpdate = this.hadlePageTitleUpdate.bind(this);
    
  };

  handlePageFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
  };

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} url={"www.google.com"} />;
    });
  };

  hadlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else",
    });
  };

  render() {
    if(this.state.isLoading){
        return <div>Loading...</div>;
    }


    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handlePageFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handlePageFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handlePageFilter('Enterprise')}>Enterprise</button>

        {this.portfolioItems()}
        <hr/>


        <button onClick={this.hadlePageTitleUpdate}>Change title
        </button>
      </div>
    );
  };
};
