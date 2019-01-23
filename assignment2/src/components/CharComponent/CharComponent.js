import React from 'react';

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
};

const CharComponent = props => (
  <span style={style} onClick={props.click}>
    {props.char}
  </span>
);

export default CharComponent;
