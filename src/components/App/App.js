import React, { Component } from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: [],
      selectedTopic: [],
      selectedTopicTitle: "local",
    };
  }

  componentDidMount() {
    fetch("https://whats-new-api.herokuapp.com/api/v1/news")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          local: data.local,
          technology: data.technology,
          entertainment: data.entertainment,
          science: data.science,
          health: data.health,
          selectedTopic: data.local,
        })
      )
      .catch((err) => console.log(err.message));
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
