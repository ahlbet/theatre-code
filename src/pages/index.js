import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import About from '../components/About';
import Dream from '../components/Dream';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Button = styled(Link)`
  font-size: 3rem;
  border-radius: 3px;
  padding: 1rem 2rem;
  margin: 0 1rem;
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
    <section id="home" className="section-landing">
      <div className="landing">
        <h1 className="landing__heading">Theatre and Code</h1>
        <p className="landing__sub-heading">
          The intersection of creative programming and the theatrical arts.
        </p>
        {/* <Link className="toBlog" to="/blog/"> */}
        <Button to="/blog/">Blog</Button>
        {/* </Link> */}
      </div>
    </section>
    <About />
    <Dream />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
