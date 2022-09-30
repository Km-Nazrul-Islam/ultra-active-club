import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-navigation'>
            <img src={logo} alt="" />
           <h2>MY REGULER ACTIVITY</h2> 
        </nav>
    );
};

export default Header;