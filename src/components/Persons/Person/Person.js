import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import styled from 'styled-components';
import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import withClasses from '../../../hoc/withClasses'
import AuthContext from '../../../context/auth-context'

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
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        return true;
    }
    componentDidMount() {
        console.log("[Person.js] componentDidMount")
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log("authcontext check", this.context.authenticated);
    }

    componentDidUpdate() {
        console.log("[Person.js] componentDidUpdate")
    }

    // const rnd = Math.random();
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    render() {
        console.log("[Person.js] render")
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                <p key="id1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key="id2">{this.props.children}</p>
                <input 
                    key="id3" 

                    //old js way for ref
                    // ref={(inputEl) => {this.inputElement = inputEl}} 
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
    
                </input>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.func
}

export default withClasses(Person, classes.Person);