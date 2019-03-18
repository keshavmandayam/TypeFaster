import React from 'react';

function WordsPerMinute(props) {
  let timeElapsed = 60 - props.timeLeft;
  let multiplier = 60 / timeElapsed;
  return <div>{`WPM: ${Math.floor(props.wordCount * multiplier)}`}</div>;
}

export default WordsPerMinute;
