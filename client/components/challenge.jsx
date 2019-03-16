import React from 'react';

function Challenge(props) {
  return (
    <div>
      <div>Type the Following:</div>
      <div>{props.challenge}</div>
    </div>
  );
}

export default Challenge;
