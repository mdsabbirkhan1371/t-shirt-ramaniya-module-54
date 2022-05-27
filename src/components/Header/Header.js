import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav className='nav'>
                <Link to='/home'>Home</Link>
                <Link to='/orderreview'>OrderReview</Link>
                <Link to='/grandpa'>GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;