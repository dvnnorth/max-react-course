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
    showPeople: true,
    newPersonName: '',
    newPersonAge: 0,
    ageValidated: true
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
    const people = [...this.state.people];
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

  newPersonNameHandler = event =>
    this.setState({ newPersonName: event.target.value });

  newPersonAgeHandler = event => {
    if (isNaN(parseInt(event.target.value)) || event.target.value === '0') {
      this.setState({ newPersonAge: 0, ageValidated: false });
    } else {
      this.setState({
        newPersonAge: parseInt(event.target.value),
        ageValidated: true
      });
    }
  };

  submitNewPersonHandler = event => {
    event.preventDefault();
    let newPeople = [...this.state.people];
    newPeople.push({
      name: this.state.newPersonName,
      age: this.state.newPersonAge
    });
    this.setState({ people: newPeople, newPersonName: '', newPersonAge: 0 });
  };

  toggleShowPeople = () => {
    let show = this.state.showPeople;
    this.setState({ showPeople: !show });
  };

  render() {
    let people = null;

    let textClasses = [];

    let buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    // Conditional rendering and styling
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
    } else {
      buttonStyle.backgroundColor = 'red';
    }

    if (this.state.people.length <= 2) {
      textClasses.push('red');
    }

    if (this.state.people.length <= 1) {
      textClasses.push('bold');
    }

    if (this.state.people.length > 2) {
      textClasses = [];
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p className={textClasses.join(' ')}>This is really working.</p>
        <button onClick={this.toggleShowPeople} style={buttonStyle}>
          Toggle People
        </button>
        {people}
        <p>Add a person:</p>
        <form style={{ padding: '10px' }}>
          <input
            onChange={this.newPersonNameHandler.bind(this)}
            value={this.state.newPersonName}
          />
          <br />
          <input
            onChange={this.newPersonAgeHandler.bind(this)}
            value={this.state.newPersonAge === 0 ? '' : this.state.newPersonAge}
          />
          {this.state.ageValidated ? null : (
            <span style={{ color: 'red', padding: '5px' }}>
              Age must be a number greater than 0
            </span>
          )}
          <button onClick={this.submitNewPersonHandler.bind(this)}>+</button>
        </form>
      </div>
    );
  }
}

export default App;
