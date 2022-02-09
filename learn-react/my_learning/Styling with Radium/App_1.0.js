// import './App.css';
// import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';
// import Person from './Person/Person'; 

// STYLING WITH RADIUM
// Installation: npm i radium
// Import Radium: import Radium from 'radium';
// All you need to do is cover your components with Radium like Radium(App) or Radium(Person)
// StyleRoot Element is needed if working with keyframes,media queries etc
// Import Radium: import Radium from 'radium';
// Then you need to put entire root component div in StyleRoot Element as done below.

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      cursor: 'pointer',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    }

    let persons = null
    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map( (person,index) => {
            return <Person 
                      
                      click = {() => this.deletePersonHandler(index)}
                      changed = { (event) => this.changedNameHandler(event,person.id)}
                      
                      name = {person.name}
                      age = {person.age}  
                      key = {person.id}
                  />
          })}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    const classes = []

    if (this.state.persons.length <= 2){
      classes.push('red')
    }
    if (this.state.persons.length <= 1){
      classes.push('bold')
    }

    return(
      <StyleRoot>
        <div className = 'App'>
          <h1>Hey, man</h1>
          <p className = {classes.join(' ')}>How you doing?</p>
          <button style = {style} onClick = {this.togglePersonHandler}> Switch Person</button>
          {persons}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
