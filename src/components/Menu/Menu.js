import React, { Component } from 'react';
import './Menu.css'
import { render } from '@testing-library/react';

class Menu extends Component {
    constructor({filterNews}) {
        super({filterNews})
    }


handleClick = (event) => {
    const { value } = event.target
    this.props.filterNews(value)
}
    
    render() {
        return (
            <nav className='nav'>
                <h1>What's <span>New?</span></h1>
                <button value='local' className='nav-button' onClick={this.handleClick}>Local News</button>
                <button value='technology' className='nav-button' onClick={this.handleClick}>Technology</button>
                <button value='entertainment' className='nav-button' onClick={this.handleClick}>Entertainment</button>
                <button value ='science' className='nav-button' onClick={this.handleClick}>Science</button>
                <button value='health' className='nav-button' onClick={this.handleClick}>Health</button>
            </nav>
        )
    }
}


export default Menu;