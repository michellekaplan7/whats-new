import React, { Component } from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import local from "../../data/local";
import technology from "../../data/technology";
import entertainment from "../../data/entertainment";
import science from "../../data/science";
import health from "../../data/health";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTopic: local,
      local: local,
      technology: technology,
      entertainment: entertainment,
      science: science,
      health: health,
      selectedTopicTitle: "local",
    };
  }

  filterNews = (topicValue) => {
    this.setState({
      selectedTopic: this.state[topicValue],
      selectedTopicTitle: topicValue,
    });
  };

  searchNews = (searchedText) => {
    const results = this.state[this.state.selectedTopicTitle].filter((news) => {
      return (
        news.description.toUpperCase().includes(searchedText) ||
        news.headline.toUpperCase().includes(searchedText)
      );
    });
    this.setState({ selectedTopic: results });
  };

  render() {
    return (
      <main className="app">
        <Menu
          filterNews={this.filterNews}
          selectedTopicTitle={this.state.selectedTopicTitle}
        />
        <NewsContainer news={this.state.selectedTopic} />
        <SearchForm searchNews={this.searchNews} />
      </main>
    );
  }
}

export default App;
