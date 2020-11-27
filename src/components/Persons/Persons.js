import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        if(nextProps.persons !== this.props.persons) return true;
        else return false;
    }
    render() {
        console.log('[Persons.js render]')
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)}
                key={person.id}/>
            })
    }
}

export default Persons;