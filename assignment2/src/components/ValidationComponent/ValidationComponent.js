import React from 'react';

const ValidationComponent = props => {
  let output = 'Length of text field is too short';
  if (props.textLength === 5) {
    output = "Oooo, that's just the right length!";
  } else if (props.textLength > 5) {
    output = "Hey now, that's too long my guy!";
  }
  return <p>{output}</p>;
};

export default ValidationComponent;
