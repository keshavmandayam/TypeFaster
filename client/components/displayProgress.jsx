import React from 'react';
import styled from 'styled-components';

// Standard and React styled components
const inaccurateStyle = {
  color: '#f96363'
};

const accurateStyle = {
  color: '#c9d6dc'
};

const Accurate = styled.div`
  border: 1px;
  background: #565a4d;
  font-size: 16px;
  font-family: monospace;
  color: #c9d6dc;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Padding = styled.div`
  padding: 10px;
`;

const Instructions = styled.div`
  font-size: 20px;
  font-weight: bold;
  overflow: auto;
  margin-bottom: 10px;
`;

function DisplayProgress(props) {
  //displays input value with different colors based on the accuracy of the input
  return (
    <Accurate>
      <Padding>
        <Instructions>What you have written so far!</Instructions>
        {props.text.map((ele, i) => {
          return ele[1] ? (
            <span key={i} style={accurateStyle}>
              {ele[0]}
            </span>
          ) : (
            <span key={i} style={inaccurateStyle}>
              {ele[0]}
            </span>
          );
        })}
      </Padding>
    </Accurate>
  );
}

export default DisplayProgress;
