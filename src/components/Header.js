import React from 'react';
import Link from 'gatsby-link';

import img from '../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <Link to="/">
                <img src={img} className="logo" />
            </Link>
            <div>
                <Link to="/clients">CLIENTS</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
            </div>
        </div>
    );
};

export default Header;
