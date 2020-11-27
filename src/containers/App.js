import React, { Component, useState } from 'react';
import './App.css';
// import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import WithClass from '../hoc/WithClass'
import withClasses from '../hoc/withClasses'
import Aux from '../hoc/Aux';

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
    showPersons: false,
    showCockpit: true
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Apps.js] shouldComponentUpdate')
    return true;
  }

  render (){
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
          />
    }

    return (
        <Aux>
          <button onClick={() => this.setState({showCockpit: false})}>remove cockpit</button>
          {this.state.showCockpit ? <Cockpit  
          projectTitle={this.props.projectTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}/> : null}
          {persons}
        </Aux>
    );
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "does this work?"))
}

export default withClasses(App, classes.App);









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
