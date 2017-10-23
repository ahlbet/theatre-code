import React, { Component } from 'react';
import Link from 'gatsby-link';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrap">
          <Link to="/#home">Top</Link>
          <Link to="/blog/">Blog</Link>
          <p>
            Made by{' '}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="http://www.dylanstratton.com/"
            >
              Dylan Stratton
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
