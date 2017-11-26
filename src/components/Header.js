import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper header black">
                <a href="/" className="brand-logo">
                    <i className="material-icons">cloud</i>Focus Construction
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
                    <li>
                        <a href="collapsible.html">
                            <i className="material-icons">list</i>
                        </a>
                    </li>
                    <li>
                        <a href="mobile.html">
                            <i className="material-icons">more_vert</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
