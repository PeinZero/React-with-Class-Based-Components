import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) =>{
    const assignedClasses = []
    let btnClass = ''

    if (props.showPerson){
        btnClass = classes.Red
    }
    if (props.persons.length <= 2){
      assignedClasses.push( classes.red)
    }
    if (props.persons.length <= 1){
      assignedClasses.push( classes.bold )
    }

    return(
        <div className = {classes.Cockpit}>
            <h1>Hey, man</h1>
            <p className = {assignedClasses.join(' ')}>How you doing?</p>
            <button className = {btnClass} onClick = {props.clicked}> Switch Person</button>
        </div>    
    );
}

export default cockpit;