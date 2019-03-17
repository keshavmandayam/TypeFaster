import React from 'react';

function Status(props) {
  let startedTyping = props.text.length > 0 ? true : false;
  let wordCount = props.text.split(' ').length;
  return (
    <div>
      {!startedTyping
        ? 'Start typing sample text to begin test'
        : `Word count: ${wordCount}`}
    </div>
  );
}

export default Status;
