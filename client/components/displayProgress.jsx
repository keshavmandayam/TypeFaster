import React from 'react';
// Styling to represent accuracy of typed character
const inaccurateStyle = {
  color: 'red'
};

const accurateStyle = {
  color: 'green'
};

function DisplayProgress(props) {
  //displays input value with different colors based on the accuracy of the input
  return (
    <div>
      {props.text.map(ele => {
        return ele[1] ? (
          <span style={accurateStyle}>{ele[0]}</span>
        ) : (
          <span style={inaccurateStyle}>{ele[0]}</span>
        );
      })}
    </div>
  );
}

export default DisplayProgress;
