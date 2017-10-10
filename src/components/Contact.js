import React, { Component } from 'react';
import Link from 'gatsby-link';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-wrap">
          <h3>Contact</h3>
          <p>
            Theatre and Code is currently open to collaborations! Do you have a theatre project that could benefit from code? Are you a programmer interested in including theatre in your software? We would love to chat.
          </p>
          <a href="mailto:dm.stratton94@gmail.com">dm.stratton94@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default Contact;
