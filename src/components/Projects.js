import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import thumbnail448 from '../assets/images/448-thumbnail.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const StyledLink = styled(Link)`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-transform: uppercase;

  :hover {
    background: black;
    color: white;
  }
`;

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects" className="projects-wrap">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div className="project">
              <img src={thumbnail448} alt="Project Image" />
              <p>
                The production of <em>4.48 Psychosis</em>, a play by Sarah Kane,
                at the Phoenix Theater in Minneapolis used projections written
                in JavaScript and p5.js.
              </p>
              <StyledLink to="/448/">Check out 4.48 Psychosis!</StyledLink>
            </div>
            <div className="project">
              <img src={project3} alt="Project Image" />
              <p>More projects coming soon!</p>
              {/* <Link to="/{project}">Check out Project Two!</Link> */}
            </div>
            {/* <div className="project">
              <img src={project3} alt="Project Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/{project}">Check out Project 3!</Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
