import React, { Component } from 'react';

// Components
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

// Styling
import './App.css';

class App extends Component {
  state = {
    usernames: ['Devin', 'Kyle', 'Thurgood']
  };

  handleNameChange = (event, index) => {
    let newUsernames = [...this.state.usernames];
    newUsernames.splice(index, 1, event.target.value);
    this.setState({
      usernames: [...newUsernames]
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.usernames.map((username, index) => (
          <UserOutput index={index} username={username}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            aperiam dolorum cum. Aspernatur cupiditate esse neque, iure sed at a
            hic ipsam delectus consequuntur quidem, unde facere, officiis
            officia quisquam.
            <UserInput value={username} changeName={this.handleNameChange} />
          </UserOutput>
        ))}
      </div>
    );
  }
}

export default App;
