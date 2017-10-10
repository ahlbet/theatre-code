import React, { Component } from 'react';
import Link from 'gatsby-link';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-wrap">
          <div className="col1">
            <h3>Theatre</h3>
            <span className="icon icon-quill" />
            <p>
              Theatre's beauty rests in its immediacy, shared breaths, and sole
              existence in one's memory. Actors are the computers of the stage.
            </p>
          </div>
          <div className="col2">
            <h3>What</h3>
            <span className="icon icon-display" />
            <p>
              <strong>
                Theatre and Code grew out of an interest in examining how lines
                of code can influence lines of a script and vice versa.
              </strong>{' '}
              How can modern tech change the way theatre artists develop and
              perform plays? Can the theatrical process help programmers code
              more thoughtful software?
            </p>
          </div>
          <div className="col1">
            <h3>Code</h3>
            <span className="icon icon-embed2" />
            <p>
              Code's power begins with its speed, recursiveness, and seemingly
              endless uses. Computers are the actors of the technology era.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
