import React, { Component } from 'react';
import Challenge from './challenge.jsx';
import InputForm from './inputForm.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenge: 'These are words that you would need to type.',
      typedValue: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let newState = this.state;
    newState.typedValue = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Challenge challenge={this.state.challenge} />
        <InputForm
          value={this.state.typedValue}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
