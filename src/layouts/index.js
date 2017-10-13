import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';
import '../assets/sass/main.sass';
import '../assets/icons/style.css';

const Header = () => (
  <div>
    <div class="header-wrap">
      <h1>
        <Link to="/">Theatre and Code</Link>
      </h1>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Theatre and Code</title>
      <meta name='description' content='Theatre and Code is a website dedicated to the intersection of creative programming and theatre.'></meta>
      <meta name='keywords' content='theatre, code'></meta>
      <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
