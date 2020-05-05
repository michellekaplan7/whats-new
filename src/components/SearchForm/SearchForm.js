import React, { Component } from 'react';
import './SearchForm.css';
import { render } from '@testing-library/react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searched: '',
        }
    }

// handleChange = event => {

// }

// searchNews = event => {
//     event.preventDefault();
// }


render() {
    return (
        <form>
            <input
                type='text'
                placeholder='Search for news articles here'
                name='searched'
                value={this.state.searched}
                // onChange={event => this.handleChange(event)}
            />
            <button className='search-button' onClick={event => this.searchNews(event)}>SEARCH</button>
        </form>
        )         
    }
}

export default SearchForm;