import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searched: '',
        }
    }

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
}

handleSearch = event => {
    event.preventDefault();

    this.props.searchNews(this.state.searched.toUpperCase())
    this.clearInputs();
}

clearInputs = () => {
    this.setState({searched: ''});
}

render() {
    return (
        <form>
            <input
                type='text'
                placeholder='Search for news articles here'
                name='searched'
                value={this.state.searched}
                onChange={event => this.handleChange(event)}
            />
            <button className='search-button' onClick={event => this.handleSearch(event)}>SEARCH</button>
        </form>
        )         
    }
}

SearchForm.propTypes = {
    searchNews: PropTypes.func
}

export default SearchForm;