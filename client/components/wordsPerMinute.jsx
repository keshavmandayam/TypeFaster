import React from 'react';
import styled from 'styled-components';

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

function WordsPerMinute(props) {
  let timeElapsed = 60 - props.timeLeft;
  let multiplier = 60 / timeElapsed;
  return (
    <Main>
      <Padding>{`WPM: ${Math.floor(props.wordCount * multiplier)}`}</Padding>
    </Main>
  );
}

export default WordsPerMinute;
