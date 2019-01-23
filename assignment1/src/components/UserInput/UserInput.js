import React from 'react';

const UserInput = props => (
  <div>
    <input
      style={{
        backgroundColor: '#ddd',
        border: '2px solid red'
      }}
      type="text"
      value={props.value}
      onChange={e => props.changeName(e, props.index)}
    />
  </div>
);

export default UserInput;
