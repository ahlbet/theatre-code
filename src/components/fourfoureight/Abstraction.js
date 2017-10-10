import React, { Component } from "react";
import Link from "gatsby-link";

import abstractionMovie from "../../assets/images/fourfoureight/abstraction.mp4";

class Abstraction extends Component {
  render() {
    return (
      <div>
        <div className="section-448 abstraction-448">
          <h3>Abstraction Projection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <video
            className="video-448"
            controls="controls"
            src={abstractionMovie}
          />
        </div>
      </div>
    );
  }
}

export default Abstraction;
