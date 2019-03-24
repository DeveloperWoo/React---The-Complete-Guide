import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Hyunju', age: 25},
      {name: 'Angela', age: 24}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {id: 'id1', name: 'Max', age: 29},
        {id: 'id2', name: event.target.value, age: 25},
        {id: 'id3', name: 'Angela', age: 24}
      ]
    })
  }

  deletePErsonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePErsonHandler(index)}
              name = {person.name} 
              age = {person.age}
              key = {person.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am Hyunju's first React App :)</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button> 
        {persons}
      </div>
    );
    //return(React.createElement('div', {className='App'}, React.createElement('h1', null, 'Hi, I am Hyunju')));
  }
}

export default App;
