import React, { Component } from "react";
import Link from "gatsby-link";

import project from "../assets/images/project.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects" className="projects-wrap">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div className="project">
              <img src={project} alt="Project Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/448/">Check out 4.48 Psychosis!</Link>
            </div>
            <div className="project">
              <img src={project2} alt="Project Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/{project}">Check out Project Two!</Link>
            </div>
            <div className="project">
              <img src={project3} alt="Project Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/{project}">Check out Project 3!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
