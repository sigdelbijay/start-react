import React, { Component, useState } from 'react';
import './App.css';
// import styled from 'styled-components';
import classes from './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.showPersons ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.showPersons ? 'salmon': 'lightgreen'};
//     color: black;
// `;

class App extends Component {
  state = {
    persons: [
      {id: '123sdd', name: "john", age: 28},
      {id: '123sfd', name: "jane", age: 29}
    ],
    otherPerson: "julia",
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: "suman", age: 29}
  //     ]
  //   })
  // };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id );
    const persons = [...this.state.persons];
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    persons[personIndex] = person;
    console.log("persons", persons);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render (){
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              key={person.id}/>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'john')}
          changed = {this.nameChangedHandler}>My hobbies are playing and dancing.</Person> */}
        </div>
      )
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if(this.state.persons.length <2) assignedClasses.push(classes.red);
    if(this.state.persons.length <1) assignedClasses.push(classes.bold);
    return (
        <div className={classes.App}>
          <h1>Start React App</h1>
          <p className={assignedClasses.join(' ')}>This is working.</p>
          {/* <button onClick={() => this.switchNameHandler('bijay')}>switch name</button> */}
          <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}

        </div>
    );
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "does this work?"))
}

export default App;









  //using state in funcitonal component using useState hook
  // const [personsState, setPersonsState] = useState({
  //   persons: [
  //     {name: "john", age: 28},
  //     {name: "jane", age: 29}
  //   ]
  // })
  // const [otherPersonState] = useState('julia');


  // console.log(personsState, otherPersonState);

  // const switchNameHandler = () => {
  //   setPersonsState({
  //     persons: [
  //       {name: "bijay", age: 28},
  //       {name: "suman", age: 29}
  //     ]
  //   })
  // }
