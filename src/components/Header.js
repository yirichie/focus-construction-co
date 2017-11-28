import React from 'react';
import Link from 'gatsby-link';

import img from '../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-nav nav-left">
                <Link to="/about" activeStyle={{ color: 'orange' }}>
                    ABOUT
                </Link>
                <Link to="/contact" activeStyle={{ color: 'orange' }}>
                    CONTACT
                </Link>
            </div>
            <Link to="/" activeStyle={{ color: 'orange' }}>
                <img src={img} className="logo" />
            </Link>
            <div className="header-nav nav-right">
                <Link to="/clients" activeStyle={{ color: 'orange' }}>
                    CLIENTS
                </Link>
                <Link to="/portfolio" activeStyle={{ color: 'orange' }}>
                    PORTFOLIO
                </Link>
            </div>
        </div>
    );
};

export default Header;
