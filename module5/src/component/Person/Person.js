import React from 'react';

// Styling
import './Person.css';

const Person = props => (
  <div className="Person">
    <p onClick={event => props.click(event, props.index)}>
      My name is {props.name} and I am {props.age}
    </p>
    <div>{props.children}</div>
    <input
      type="text"
      onChange={event => props.changeName(event, props.index)}
      value={props.name}
    />
  </div>
);

export default Person;
