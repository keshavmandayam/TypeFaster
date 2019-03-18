import React from 'react';

function Status(props) {
  let startedTyping = props.text > 0 ? true : false;
  return (
    <div>
      {!startedTyping
        ? 'Start typing sample text to begin test'
        : `Word count: ${props.text}`}
    </div>
  );
}

export default Status;
