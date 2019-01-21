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
      { name: 'Max', age: '29' },
      { name: 'Jens', age: '33' }
    ]
  };

  switchNameHandler = (index, age, name) => {
    let randomNames = ['Jane', 'John', 'Kyle', 'Thurgood', 'Michelle'];
    let newPeople = this.state.people;
    let newPerson = {
      name: name
        ? name
        : randomNames[Math.floor(Math.random() * randomNames.length)],
      age: age
    };
    newPeople.splice(index, 1, newPerson);
    this.setState({
      people: newPeople
    });
  };

  nameChangeHandler = (event, index, age) => {
    this.switchNameHandler(index, age, event.target.value);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working.</p>
        <button
          onClick={this.switchNameHandler}
          style={{
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          Switch Name
        </button>
        {this.state.people.slice(0, 4).map((person, index) => (
          <Person
            key={index}
            index={index}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler}
            changeName={this.nameChangeHandler}
          />
        ))}
        <Person
          name={this.state.people[4].name}
          age={this.state.people[4].age}
          index={4}
          click={this.switchNameHandler}
          changeName={this.nameChangeHandler}
        >
          <p>
            Here is a short biography about {this.state.people[4].name}: He is a
            human. I told you it was short!
          </p>
        </Person>
      </div>
    );
  }
}

export default App;
