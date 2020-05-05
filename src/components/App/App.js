import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
// import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entertainment,
      health,
      local,
      science,
      technology
    }
  }

  render () {
    return (
      <main className="app">
        <Menu />
        <NewsContainer local={this.state.local} />
      </main>
    );
  }
}

export default App;
