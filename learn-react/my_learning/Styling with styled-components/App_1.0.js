// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person'; 
// import styled from 'styled-components';

// STYLING WITH STYLED COMPONENTS
// Installation: npm i styled-componets

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    cursor: pointer;
    border: 1px solid blue;
    padding: 8px;

    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }

`;
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

    }

    const classes = []

    if (this.state.persons.length <= 2){
      classes.push('red')
    }
    if (this.state.persons.length <= 1){
      classes.push('bold')
    }

    return(
        <div className = 'App'>
          <h1>Hey, man</h1>
          <p className = {classes.join(' ')}>How you doing?</p>
          <StyledButton alt = {this.state.showPerson} onClick = {this.togglePersonHandler}> Switch Person</StyledButton>
          {persons}
        </div>
    )
  }
}

export default App;
