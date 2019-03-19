import React, { Component } from 'react';
import styled from 'styled-components';
// React styled components
const Main = styled.div`
  border: 1px;
  color: #565a4d;
  font-family: monospace;
  background: #c9d6dc;
  font-size: 60px;
  font-weight: bold;
  overflow: auto;
  width: 100%;
`;

const Padding = styled.div`
  padding: 5px;
`;
// Utilizes setinterval and react life-cycle methods to achieve the effect of a countdown timer.
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
    return (
      <Main>
        <Padding>{`${this.props.time} seconds`}</Padding>
      </Main>
    );
  }
}

export default Timer;
