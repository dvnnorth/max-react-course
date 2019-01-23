import React from 'react';

const UserOutput = props => (
  <div>
    <p>{props.username}</p>
    <p>{props.children}</p>
  </div>
);

export default UserOutput;
