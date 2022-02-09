import classes from './App.module.css';
import React, {Component} from 'react';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{

  state = {
    persons: [
                { id: 'x1', name: 'mahad', age: 21 },
                { id: 'x2', name: 'ammar', age: 22 },
                { id: 'x3', name: 'abdullah', age: 23 }
    ],
    human: true,
    showPerson: false
  }
  
  changedNameHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex( (person) =>{
      return person.id === id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const togglePerson = this.state.showPerson
    this.setState({showPerson: !togglePerson})
  }

  render(){
    
    let persons = null
    if (this.state.showPerson){
      persons = <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.changedNameHandler}
                />
    }

    return(
        <div className = {classes.App}>
          
          <Cockpit
            persons = {this.state.persons}
            showPerson = {this.state.showPerson}
            clicked = {this.togglePersonHandler}
          />
          
          {persons}
        </div>
    )
  }
}

export default App;
