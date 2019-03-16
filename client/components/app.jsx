import React, { Component } from 'react';
import Challenge from './challenge.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenge: 'These are words that you would need to type'
    };
  }
  render() {
    return (
      <div>
        <Challenge challenge={this.state.challenge} />
      </div>
    );
  }
}

export default App;
