import React from 'react';
import './Menu.css'

const Menu = () => {

    return (
        <nav className='nav'>
            <h1>What's <span>New?</span></h1>
            <button className='nav-button'>Local News</button>
            <button className='nav-button'>Technology</button>
            <button className='nav-button'>Entertainment</button>
            <button className='nav-button'>Science</button>
            <button className='nav-button'>Health</button>
        </nav>
    )
}

export default Menu;