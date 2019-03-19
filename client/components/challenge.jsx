import React from 'react';
import styled from 'styled-components';

//React styled components
const TextBlock = styled.div`
  color: #565a4d;
  font-size: 16px;
  font-family: monospace;
  background-color: #c9d6dc;
  padding: 10px;
  overflow: auto;
`;

const Instructions = styled.div`
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
  margin-bottom: 10px;
`;

// Basic representation of the data generated for user to try and emulate
function Challenge(props) {
  return (
    <TextBlock>
      <Instructions>Type the Following</Instructions>
      <div>{props.challenge}</div>
    </TextBlock>
  );
}

export default Challenge;
