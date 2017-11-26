import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import About from '../components/About';

const IndexPage = () => (
    <div>
        <Hero />
        <About />
        <Link to="/page-2/">Go to page 2</Link>
    </div>
);

export default IndexPage;
