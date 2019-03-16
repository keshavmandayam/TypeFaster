import React from 'react';

function InputForm(props) {
  if (!props.display) {
    return null;
  }
  return (
    <form>
      <textarea value={props.value} onChange={props.handleInput} />
    </form>
  );
}

export default InputForm;
