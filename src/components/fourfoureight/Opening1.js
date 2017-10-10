import React, { Component } from "react";
import Link from "gatsby-link";

import opening1 from "../../assets/images/fourfoureight/opening1.mp4";

import Highlight from 'react-highlight.js';

class Opening1 extends Component {
  toggleCode() {
    const code = document.getElementById('opening1-code');
    if (code.style.display === 'none'){
      code.style.display = 'block';
    } else {
      code.style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <div className="section-448 opening1-448">
          <h3>Preshow Projections: Idea One</h3>
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
            src={opening1}
          />

          <button id="opening1-toggle" onClick={this.toggleCode}>
            Show/Hide Code
          </button>

          <div id="opening1-code" style={{display: 'none'}}>
            <Highlight language={'javascript'}>
              {`
                var dancingWords = [];
                var speed = 3;
                var addSpeed = 26;
                var counter = 0;
                var total = 27;
                var num = total * 4;
                var rem = 0;
                var addNum = 0;

                var paragraph = 'please open the curtains';
                var words = paragraph.split(' ');

                function removeWords() {
                  dancingWords[rem].removeSpan();
                  rem++;
                }

                function addSentence() {
                  if (addNum === 4) {
                    addNum = 0;
                  }

                  var spannedWord = createSpan(words[addNum]);
                  var dw = new DanceSpan(spannedWord, random(200, 1000), random(200, 400));
                  dancingWords.push(dw);
                  addNum++;
                }

                function DanceSpan(element, x, y) {
                  element.position(x, y);

                  this.brownian = function() {
                    x += random(-speed, speed);
                    y += random(-speed, speed);
                    element.position(x, y);
                  };

                  this.removeSpan = function() {
                    element.remove();
                  };
                }

                function setup() {
                  addSentence();
                }

                function draw() {
                  for (var i = 0; i < dancingWords.length; i++) {
                    dancingWords[i].brownian();
                  }

                  var add = frameCount % addSpeed;

                  if (add === addSpeed / 2) {
                    if (counter < num) {
                      addSentence();
                      counter++;
                    }
                    if (counter >= num) {
                      removeWords();
                    }
                  }
                }
              `}
            </Highlight>

          </div>

        </div>
      </div>
    );
  }
}

export default Opening1;
