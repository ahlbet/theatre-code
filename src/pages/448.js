import React, { Component } from "react";
import Link from "gatsby-link";

import Opening1 from "../components/fourfoureight/Opening1";
import Opening2 from "../components/fourfoureight/Opening2";
import Opening3 from "../components/fourfoureight/Opening3";
import Abstraction from "../components/fourfoureight/Abstraction";
import Letter from "../components/fourfoureight/Letter";

import fourfoureight1 from "../assets/images/fourfoureight/fourfoureight-1.jpg";

const FourFourEight = () => (
  <div>
    <div className="wrap-448">
      <Link to="/#projects">Back to projects</Link>
      <h1>Projections for 4.48 Psychosis</h1>
      <div className="intro-448">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={fourfoureight1} alt="4.48 Production shot" />
      </div>

      <Opening1 />
      <hr />
      {/* <Opening2 /> */}
      <hr />
      {/* <Opening3 /> */}
      <hr />
      {/* <Abstraction /> */}
      <hr />
      {/* <Letter /> */}

      <Link to="/#projects">Back to projects</Link>
    </div>
  </div>
);

export default FourFourEight;
