import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper header #f5f5f5">
                <ul className="left hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
                <Link className="brand-logo center" to="/">
                    Focus Construction
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
