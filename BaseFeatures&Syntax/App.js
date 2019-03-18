import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Hyunju', age: 25},
      {name: 'Angela', age: 24}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am Hyunju</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbie is Reading books</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return(React.createElement('div', {className='App'}, React.createElement('h1', null, 'Hi, I am Hyunju')));
  }
}

export default App;
