import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.countDown = setInterval(this.props.handleTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.countDown);
  }
  render() {
    return <div>{`Time Left: ${this.props.time} seconds`}</div>;
  }
}

export default Timer;
