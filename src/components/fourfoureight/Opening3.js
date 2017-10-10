import React, { Component } from "react";
import Link from "gatsby-link";

import opening3 from "../../assets/images/fourfoureight/opening3.mp4";

import Highlight from 'react-highlight.js';

class Opening3 extends Component {
  toggleCode() {
    const code = document.getElementById('opening3-code');
    if (code.style.display === 'none'){
      code.style.display = 'block';
    } else {
      code.style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <div className="section-448 opening3-448">
          <h3>Preshow Projections: Idea Three</h3>
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
            src={opening3}
          />

          <button id="opening3-toggle" className="code-toggle" onClick={this.toggleCode}>
            Show/Hide Code
          </button>

          <div id="opening3-code" style={{display: 'none'}}>
            <Highlight language={'javascript'}>
              {`
              `}
            </Highlight>

          </div>

        </div>
      </div>
    );
  }
}

export default Opening3;
