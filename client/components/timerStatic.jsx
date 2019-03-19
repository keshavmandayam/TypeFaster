import React, { Component } from 'react';
import styled from 'styled-components';

// React styled components
const Main = styled.div`
  border: 1px;
  color: #565a4d;
  font-family: monospace;
  background: #c9d6dc;
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
  width: 100%;
`;

const Padding = styled.div`
  padding: 5px;
`;

// Static representation of timer prior to countdown. Gives user expected time requirements.
class TimerStatic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Main>
        <Padding>{`Countdown: ${this.props.time} seconds`}</Padding>
      </Main>
    );
  }
}

export default TimerStatic;
