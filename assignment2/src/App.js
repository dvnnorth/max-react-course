import React, { Component } from 'react';
import './App.css';

// Components
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  };

  handleInput = event => this.setState({ text: event.target.value });

  handleDeleteChar = index => {
    const text = [...this.state.text];
    text.splice(index, 1);
    this.setState({ text: text.join('') });
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput.bind(this)} value={this.state.text} />
        <p>{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length} />
        {this.state.text.split('').map((char, i) => (
          <CharComponent
            char={char}
            key={i}
            click={this.handleDeleteChar.bind(this, i)}
          />
        ))}
      </div>
    );
  }
}

export default App;
