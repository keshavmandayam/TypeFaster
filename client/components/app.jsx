import React, { Component } from 'react';
// Chose to use react styled components along with css grid as opposted to standard css
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
// Data generation api used to create block of text for the typing test
import faker from 'faker';
// All of the React components
import Challenge from './challenge.jsx';
import InputForm from './inputForm.jsx';
import DisplayProgress from './displayProgress.jsx';
import Status from './status.jsx';
import Timer from './timer.jsx';
import TimerStatic from './timerStatic.jsx';
import WordsPerMinute from './wordsPerMinute.jsx';
import Accuracy from './accuracy.jsx';

// Stylized div for Title or Header
const Title = styled.div`
  background-color: #565a4d;
  height: 60px;
  font-size: 2.2em;
  font-family: monospace;
  text-align: left;
  text-indent: 25px;
  line-height: 2;
  color: #c9d6dc;
  overflow: auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenge: '',
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
  // Handles user input in the textarea block
  handleInput(event) {
    this.checkAccuracy(event.target.value);
    this.wordCount(event.target.value);
    let newState = this.state;
    newState.typedValue = event.target.value;
    newState.typedValue.length === newState.challenge.length ||
    this.state.timeLeft === 0
      ? (newState.displayForm = false)
      : (newState.displayForm = true);
    if (this.state.timeLeft > 59) {
      this.handleTime();
    }
    this.setState(newState);
  }
  // Used to update remaining time in the state
  handleTime() {
    let newState = this.state;
    newState.timeLeft > 0 ? (newState.timeLeft -= 1) : (newState.timeLeft = 0);
    this.setState(newState);
  }
  // Checks for accuracy and drives character colorization
  checkAccuracy(string) {
    const displayArr = [];
    let wrongChars = 0;
    const length = string.length;
    for (let i = 0; i < length; i++) {
      string[i] === this.state.challenge[i]
        ? displayArr.push([string[i], true])
        : displayArr.push([string[i], false]) && wrongChars++;
    }
    let accuracy =
      length === 0 ? 100 : Math.floor(((length - wrongChars) / length) * 100);
    let newState = this.state;
    newState.displayValue = displayArr;
    newState.accuracy = accuracy;
    this.setState(newState);
  }
  // Updates state variable for word count. Also required info for WPM.
  wordCount(string) {
    let newState = this.state;
    newState.wordCount = string.length > 0 ? string.split(' ').length : 0;
    this.setState(newState);
  }
  // Uses faker api to generate multiple sentences for user to try and type
  generateChallenge() {
    let challenge = faker.hacker.phrase();
    for (let i = 0; i < 5; i++) {
      challenge += ` ${faker.hacker.phrase()}`;
    }
    return challenge;
  }
  // One page load, updates the 'challenge component' with a new text block
  componentDidMount() {
    let newState = this.state;
    newState.challenge = this.generateChallenge();
    this.setState(newState);
  }
  // The Grid and Cell components come from styled-css-grid to allow CSS grid functionality with
  // react styled-components. Remaining components were developed for this project.
  render() {
    return (
      <Grid columns={'2fr 1fr'} rows={'minmax(60px,auto) 1fr'}>
        <Cell width={2}>
          <Title>Type Faster</Title>
        </Cell>
        <Cell>
          <Grid columns={'1fr'} rows={'1fr 1fr 1fr'}>
            <Cell>
              <Challenge challenge={this.state.challenge} />
            </Cell>
            <Cell>
              <DisplayProgress text={this.state.displayValue} />
            </Cell>
            <Cell>
              <InputForm
                time={this.state.timeLeft}
                value={this.state.typedValue}
                handleInput={this.handleInput}
                display={this.state.displayForm}
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Status text={this.state.wordCount} />
          {this.state.timeLeft < 60 && (
            <div>
              <WordsPerMinute
                timeLeft={this.state.timeLeft}
                wordCount={this.state.wordCount}
              />
              <Accuracy accuracy={this.state.accuracy} />
            </div>
          )}
          {this.state.timeLeft < 60 &&
          this.state.timeLeft > 0 &&
          this.state.displayForm ? (
            <Timer time={this.state.timeLeft} handleTime={this.handleTime} />
          ) : (
            <TimerStatic time={this.state.timeLeft} />
          )}
        </Cell>
      </Grid>
    );
  }
}

export default App;
