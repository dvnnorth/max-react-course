import React from 'react';

// Styling
import './Person.css';

const Person = props => (
  <div className="Person">
    <p onClick={() => props.click(props.index, props.age)}>
      My name is {props.name} and I am {props.age}
    </p>
    <div>{props.children}</div>
    <input
      type="text"
      onChange={event => props.changeName(event, props.index, props.age)}
      value={props.name}
    />
  </div>
);

export default Person;
