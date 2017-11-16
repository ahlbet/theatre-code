import React, { Component } from 'react';
import Link from 'gatsby-link';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row footer__row">
          <div className="col-1-of-3">
            <Link className="footer__link" to="/#home">
              Top
            </Link>
          </div>
          <div className="col-1-of-3">
            <Link className="footer__link" to="/blog/">
              Blog
            </Link>
          </div>
          <div className="col-1-of-3">
            <p className="footer__credit">
              Made by{' '}
              <a
                className="footer__link"
                rel="noreferrer noopener"
                target="_blank"
                href="http://www.dylanstratton.com/"
              >
                Dylan Stratton
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
