import React, { Component } from 'react';

import * as styles from './Home.scss';

const propTypes = {};

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>This is Home.</div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
