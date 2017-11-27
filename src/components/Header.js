import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper header #f5f5f5">
                <ul className="left hide-on-med-and-down">
                    <li>
                        <a href="sass.html">
                            <i className="material-icons">info</i>
                        </a>
                    </li>
                    <li>
                        <a href="badges.html">
                            <i className="material-icons">view_module</i>
                        </a>
                    </li>
                </ul>
                <a href="/" className="brand-logo center">
                    Focus Construction
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="sass.html">
                            <i className="material-icons">info</i>
                        </a>
                    </li>
                    <li>
                        <a href="badges.html">
                            <i className="material-icons">view_module</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
