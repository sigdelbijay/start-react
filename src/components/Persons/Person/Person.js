import React, {Component} from 'react';
// import styled from 'styled-components';
import classes from './Person.css'
import Aux from '../../../hoc/Aux'

// const StyledDiv = styled.div`
//     .Person {
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px, 3px, #ccc;
//         padding: 16px;
//         text-align: center;
//     }

//     @media (min-width: 500px) {
//         .Person {
//             width: 450px;
//         }
//     }
// `;

class Person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        return true;
    }
    // const rnd = Math.random();
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    render() {
        return (
            <Aux>
                <p key="id1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>,
                <p key="id2">{this.props.children}</p>,
                <input key="id3" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )
    }
}

export default Person;