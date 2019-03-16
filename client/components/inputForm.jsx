import React from 'react';

function InputForm(props) {
  return (
    <form>
      <textarea value={props.value} onChange={props.handleInput} />
    </form>
  );
}

export default InputForm;
