import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';

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
    }
  }

  filterNews = (topicValue) => {
        this.setState({selectedTopic: this.state[topicValue]})
  }

  render () {
    return (
      <main className="app">
        <Menu filterNews={this.filterNews} newsData={this.state.data} />
        <NewsContainer news={this.state.selectedTopic} />
        <SearchForm />
        
      </main>
    );
  }
}

export default App;
