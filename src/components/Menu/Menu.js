import React, { Component } from 'react';
import './Menu.css'
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Menu extends Component {
    constructor({filterNews, selectedTopicTitle}) {
        super({filterNews, selectedTopicTitle})
    }


handleClick = (event) => {
    const { value } = event.target
    this.props.filterNews(value)
}
    
    render() {
        return (
            <nav className='nav'>
                <h1>What's <span>New?</span></h1>
                <button value='local' className={this.props.selectedTopicTitle === 'local' ? 'active' : 'nav-button'} onClick={this.handleClick}>Local News</button>
                <button value='technology' className={this.props.selectedTopicTitle === 'technology' ? 'active' : 'nav-button'} onClick={this.handleClick}>Technology</button>
                <button value='entertainment' className={this.props.selectedTopicTitle === 'entertainment' ? 'active' : 'nav-button'} onClick={this.handleClick}>Entertainment</button>
                <button value ='science' className={this.props.selectedTopicTitle === 'science' ? 'active' : 'nav-button'} onClick={this.handleClick}>Science</button>
                <button value='health' className={this.props.selectedTopicTitle === 'health' ? 'active' : 'nav-button'} onClick={this.handleClick}>Health</button>
            </nav>
        )
    }
}

Menu.propTypes = {
    filterNews: PropTypes.func,
    selectedTopicTitle: PropTypes.string
}

export default Menu;