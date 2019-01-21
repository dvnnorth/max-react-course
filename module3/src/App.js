import React, { Component } from 'react';
import './App.css';

// Components
import Person from './component/Person/Person';

class App extends Component {

  state = {
    people: [
      { name: 'Devin', age: '31' },
      { name: 'Victoria', age: '31' },
      { name: 'Manu', age: '30' },
      { name: 'Max', age: '29' }
    ]
  };

  generateAge() {
    return Math.floor(Math.random() * 30);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working.</p>
        {this.state.people.map((person, index) => <Person key={index} name={person.name} age={person.age} />)}
        <Person name="Kyle" age={this.generateAge()}>
          <p>Here is a short biography about Kyle: He is a human. I told you it was short!</p>
        </Person>
      </div>
    );
  }
}

export default App;
