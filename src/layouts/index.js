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
        <Header />
        <div>{children()}</div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
