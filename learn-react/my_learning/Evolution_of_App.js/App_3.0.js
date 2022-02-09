// import classes from './App.module.css';
// import React, {Component} from 'react';
// import Person from './Person/Person'; 

// USING CSS MODULES FOR STYLING 
// Here we import an object from a .module.css file
// the classes in css file are the properties of this object 

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
    let btnClass = [classes.Button]
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
      
      btnClass.push(classes.Red);
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2){
      assignedClasses.push( classes.red)
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push( classes.bold )
    }

    return(
        <div className = {classes.App}>
          <h1>Hey, man</h1>
          <p className = {assignedClasses.join(' ')}>How you doing?</p>
          <button className = {btnClass.join(' ')} onClick = {this.togglePersonHandler}> Switch Person</button>
          {persons}
        </div>
    )
  }
}

export default App;
