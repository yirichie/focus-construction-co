import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'materialize-css/dist/css/materialize.min.css';

import siteData from '../siteData';
import Header from '../components/Header';

import './index.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title={siteData.title} meta={siteData.meta} />
        <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <Header />
        <div>{children()}</div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
