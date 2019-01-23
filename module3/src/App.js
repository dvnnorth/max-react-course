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
    ],
    showPeople: true
  };

  switchNameHandler = (index, age, name) => {
    let randomNames = ['Jane', 'John', 'Kyle', 'Thurgood', 'Michelle'];
    let newPeople = [...this.state.people];
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

  nameChangeHandler = (event, index) => {
    const people = [...this.state.people]
    people.splice(index, 1, {
      name: event.target.value,
      age: this.state.people[index].age
    });
    this.setState({ people });
  };

  deletePersonHandler = (event, index) => {
    event.preventDefault();
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people });
  };

  toggleShowPeople = () => {
    let show = this.state.showPeople;
    this.setState({ showPeople: !show });
  };

  render() {
    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => (
            <Person
              key={index}
              index={index}
              name={person.name}
              age={person.age}
              click={event => this.deletePersonHandler(event, index)}
              changeName={this.nameChangeHandler}
            >
              {person.name === 'Jens' ? (
                <p>
                  Here is a short biography about {this.state.people.length - 1}
                  : He is a human. I told you it was short!
                </p>
              ) : null}
            </Person>
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working.</p>
        <button
          onClick={this.toggleShowPeople}
          style={{
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          Show People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
