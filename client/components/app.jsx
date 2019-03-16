import React, { Component } from 'react';
import Challenge from './challenge.jsx';
import InputForm from './inputForm.jsx';
import DisplayProgress from './displayProgress.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenge: 'These are words that you would need to type.',
      typedValue: '',
      displayValue: [],
      displayForm: true
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.checkAccuracy(event.target.value);
    let newState = this.state;
    newState.typedValue = event.target.value;
    newState.typedValue.length === newState.challenge.length
      ? (newState.displayForm = false)
      : (newState.displayForm = true);
    this.setState(newState);
  }
  checkAccuracy(string) {
    const displayArr = [];
    for (let i = 0; i < string.length; i++) {
      string[i] === this.state.challenge[i]
        ? displayArr.push([string[i], true])
        : displayArr.push([string[i], false]);
    }
    let newState = this.state;
    newState.displayValue = displayArr;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Challenge challenge={this.state.challenge} />
        <DisplayProgress text={this.state.displayValue} />
        <InputForm
          value={this.state.typedValue}
          handleInput={this.handleInput}
          display={this.state.displayForm}
        />
      </div>
    );
  }
}

export default App;
