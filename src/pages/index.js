import React from 'react';
import Link from 'gatsby-link';

import About from '../components/About';
import Dream from '../components/Dream';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <div id="home" className="landing">
      <h1>Theatre and Code</h1>
      <p>
        An exploration of the intersection of creative programming and the
        theatrical arts.
      </p>
      <Link className="toBlog" to="/blog/">
        Blog
      </Link>
    </div>
    <About />
    <Dream />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
