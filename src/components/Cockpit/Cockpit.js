import React, { useEffect } from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        const timeout = setTimeout(() => {
            alert('save data to cloud');
        }, 5000);
        return () => {
            console.log('[Cockpit.js]', 'cleanup work in useEffect')
            clearTimeout(timeout)
        }
    }, []);
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2nd')
        return () => {
            console.log('[Cockpit.js]', 'cleanup work in useEffect 2nd')
        }
    });
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(props.personsLength <2) assignedClasses.push(classes.red);
    if(props.personsLength <1) assignedClasses.push(classes.bold);

    return (
        <div className={classes.Cockpit}>
            <h3>{props.projectTitle}</h3>
            <p className={assignedClasses.join(' ')}>This is working.</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            {/* <button onClick={() => props.switchNameHandler('bijay')}>switch name</button> */}
        </div>
    )
}

export default React.memo(cockpit);