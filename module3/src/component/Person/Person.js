import React, { Fragment } from 'react';

const Person = props => (
  <Fragment>
    <p>My name is {props.name} and I am {props.age}</p>
    <p>{ props.children }</p>
  </Fragment>
);

export default Person;