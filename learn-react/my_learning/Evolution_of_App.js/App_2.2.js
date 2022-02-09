// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person'; 

// DOING EVERYTHING DYNAMICALLY INSTEAD OF HARDCODING

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
    
    // alternate way to copy person object
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
    // there is a flaw in this method because original state is being changed that can make app have unpredictable behaviors, so we should make a copy.
    // const persons = this.state.persons

    // we can make a copy by using slice() method without arguments
    // using this statement as opposed to above fix the flaw
    // const persons = this.state.persons.slice() 

    // alternate way to make a copy is using spread operator
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})

    // Note:- you should change state in an immutable fashion, which means by first making a copy.
  }

  togglePersonHandler = () => {
    const togglePerson = this.state.showPerson
    this.setState({showPerson: !togglePerson})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      cursor: 'pointer',
      border: '1px solid blue',
      padding: '8px'
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
                      // react cannot differentiate between elements, so we need to give it a unique key.
                      // This way, react will not need to re-render the entire list, but only the element changed in the list.
                  />
          })}
        </div>
      )
    }
    return(
      <div className = 'App'>
        <h1>Hey, man</h1>
        <button style = {style} onClick = {this.togglePersonHandler}> Switch Person</button>
        {persons}
      </div>
    )
  }
}

export default App;
