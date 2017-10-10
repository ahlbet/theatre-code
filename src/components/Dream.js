import React, { Component } from 'react';
import Link from 'gatsby-link';

import codeDream from '../assets/images/code-dream.jpg';
import theatreDream from '../assets/images/theatre-dream.jpg';

class Dream extends Component {
  render() {
    return (
      <div>
        <div className="dream-wrap">
          <div className="dream-col1">
            <img src={codeDream} alt="Code Dream" />
            <p>
              How can lines of code impact the theatre? In many ways, code already has a substantial place in the theatre. For designers, complex software allows for intricate and detailed lighting and projection designs. Products like QLab provide tools for programming lighting and sound cues. But can code be stretched into deeper artistic uses? Can we write software that generates entire plays and blocking? Can we start with a base script and transform the words into sounds, images, or videos?
            </p>
          </div>
          <div className="dream-col2">
            <img src={theatreDream} alt="Theatre Dream" />
            <p>
              How does the theatrical process alter the way software is developed, if at all? Codebases are often structured in an organized way - separating the CSS from the JS from images. Can a software developer learn anything about structuring code from the theatrical concepts of rehearsal, blocking, or various acting techniques? The theatre is based in the idea of performing Other - is there a way that software mirrors this idea when one writes code that another person will use?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dream;
