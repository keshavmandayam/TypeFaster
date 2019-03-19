import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  border: 1px;
  border-color: #565a4d;
  color: #565a4d;
  font-size: 16px;
  font-family: monospace;
  background: #c9d6dc;
  width: 99.5%;
  height: 100%;
  overflow: auto;
  resize: none;
`;

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

function InputForm(props) {
  if (!props.display && props.time === 0) {
    return (
      <TextBlock>
        <Instructions>Oops you're out of time!</Instructions>
      </TextBlock>
    );
  }

  if (!props.display && props.time < 60) {
    return (
      <TextBlock>
        <Instructions>
          Congrats! Checkout how you did to the right!
        </Instructions>
      </TextBlock>
    );
  }
  if (!props.display) {
    return null;
  }
  return (
    <form>
      <TextArea
        value={props.value}
        onChange={props.handleInput}
        placeholder={'Type here...'}
        autoFocus
      />
    </form>
  );
}

export default InputForm;
