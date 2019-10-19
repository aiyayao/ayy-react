import React, { Component } from 'react';

import './Page1.css';

import dogs from 'assets/images/timg.jpg';

class Page1 extends Component {
  render() {
    return (
      <div className="page1">
        This is Page1.
        <img src={dogs} alt="dogs" />
      </div>
    );
  }
};

export default Page1;
