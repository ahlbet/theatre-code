import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import About from '../components/About';
import Dream from '../components/Dream';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Button = styled(Link)`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-transform: uppercase;

  :hover {
    background: white;
    color: black;
  }
`;

const IndexPage = () => (
  <div>
    <div id="home" className="landing">
      <h1>Theatre and Code</h1>
      <p>
        An exploration of the intersection of creative programming and the
        theatrical arts.
      </p>
      {/* <Link className="toBlog" to="/blog/"> */}
      <Button to="/blog/">Blog</Button>
      {/* </Link> */}
    </div>
    <About />
    <Dream />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
