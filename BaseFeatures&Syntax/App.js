import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Hyunju', age: 25},
      {name: 'Angela', age: 24}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    //console.log('Was clicked');
    //DO NOT DO THIS: personsState.persons[1].name = 'Hyunju Woo';
    //DO NOT DO THIS: personsState.persons[0].age = 29;
    setPersonsState({
      persons: [
        {name: 'Max', age: 29},
        {name: 'Hyunju Woo', age: 25},
        {name: 'Angela', age: 24}
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi, I am Hyunju</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbie is Reading books</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  //return(React.createElement('div', {className='App'}, React.createElement('h1', null, 'Hi, I am Hyunju')));
} 
  
    

export default app;
