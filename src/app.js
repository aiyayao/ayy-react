import React, { Component } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

class App extends Component {

  getRouter = () => {
    if (process.env.NODE_ENV === 'development') {
      return HashRouter;
    }
    return BrowserRouter;
  }

  render() {
    const Router = this.getRouter();
    return (
      <Router>
        <div id="app">
          <Nav />
          {getRouter()}
          'test commit4'
        </div>
      </Router>
    );
  }
}

export default App;
