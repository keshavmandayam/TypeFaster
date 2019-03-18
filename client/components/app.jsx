import React, { Component } from 'react';
import Challenge from './challenge.jsx';
import InputForm from './inputForm.jsx';
import DisplayProgress from './displayProgress.jsx';
import Status from './status.jsx';
import Timer from './timer.jsx';
import WordsPerMinute from './wordsPerMinute.jsx';
import Accuracy from './accuracy.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenge: 'These are words that you would need to type.',
      typedValue: '',
      displayValue: [],
      wordCount: 0,
      accuracy: 100,
      displayForm: true,
      timeLeft: 60
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleInput(event) {
    this.checkAccuracy(event.target.value);
    this.wordCount(event.target.value);
    let newState = this.state;
    newState.typedValue = event.target.value;
    newState.typedValue.length === newState.challenge.length
      ? (newState.displayForm = false)
      : (newState.displayForm = true);
    if (this.state.timeLeft > 59) {
      this.handleTime();
    }
    this.setState(newState);
  }
  handleTime() {
    let newState = this.state;
    newState.timeLeft > 0 ? (newState.timeLeft -= 1) : (newState.timeLeft = 0);
    this.setState(newState);
  }
  checkAccuracy(string) {
    const displayArr = [];
    let wrongChars = 0;
    const length = string.length;
    for (let i = 0; i < length; i++) {
      string[i] === this.state.challenge[i]
        ? displayArr.push([string[i], true])
        : displayArr.push([string[i], false]) && wrongChars++;
    }
    let accuracy = Math.floor(((length - wrongChars) / length) * 100);
    let newState = this.state;
    newState.displayValue = displayArr;
    newState.accuracy = accuracy;
    this.setState(newState);
  }
  wordCount(string) {
    let newState = this.state;
    newState.wordCount = string.split(' ').length;
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
        <Status text={this.state.wordCount} />
        {this.state.timeLeft < 60 &&
        this.state.timeLeft > 0 &&
        this.state.displayForm ? (
          <Timer time={this.state.timeLeft} handleTime={this.handleTime} />
        ) : (
          <div>{`Time Left: ${this.state.timeLeft} seconds`}</div>
        )}
        {this.state.timeLeft < 60 && (
            <WordsPerMinute
              timeLeft={this.state.timeLeft}
              wordCount={this.state.wordCount}
            />
          ) && <Accuracy accuracy={this.state.accuracy} />}
      </div>
    );
  }
}

export default App;
