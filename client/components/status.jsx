import React from 'react';
import styled from 'styled-components';

// React styled components
const Main = styled.div`
  border: 1px;
  background: #565a4d;
  font-family: monospace;
  color: #c9d6dc;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
`;

const Padding = styled.div`
  padding: 5px;
`;
// Displays Word Count or instructions to begin typing.
function Status(props) {
  let startedTyping = props.text > 0 ? true : false;
  return (
    <Main>
      <Padding>
        {!startedTyping
          ? 'Start typing sample text to begin test!'
          : 'Good luck!'}
      </Padding>
      {startedTyping && <Padding>{`Word count: ${props.text}`}</Padding>}
    </Main>
  );
}

export default Status;
