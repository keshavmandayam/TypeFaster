import React from 'react';
import styled from 'styled-components';

//React styled components
const Main = styled.div`
  border: 1px;
  background: #565a4d;
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
  font-family: monospace;
  color: #c9d6dc;
  width: 100%;
`;

const Padding = styled.div`
  padding: 5px;
`;
// Basic stat to represent accuracy of user input
function Accuracy(props) {
  return (
    <Main>
      <Padding>{`Accuracy: ${props.accuracy}%`}</Padding>
    </Main>
  );
}

export default Accuracy;
