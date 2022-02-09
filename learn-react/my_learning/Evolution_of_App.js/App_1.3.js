// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person';

// WORKING WITH HANDLERS THAT RECEIVE ARGS, BIND VS FUNCTION METHOD, PASSING METHODS REFERENCE BETWEEN COMPONENTS, ALSO INLINE STYLING

class App extends Component{

  state = {
    persons: [
                { name: 'mahad', age: 21 },
                { name: 'ammar', age: 22 },
                { name: 'abdullah', age: 23 }
    ],
    human: true
  }

  switchNameHandler = (newName) =>{
    this.setState({persons: [
      { name: newName, age: 22 },
      { name: 'ammar', age: 22 },
      { name: 'abdullah', age: 23 }
    ]})
  }

  changedNameHandler = (event) =>{
    this.setState({persons: [
      { name:  'mahad', age: 22 },
      { name: 'ammar', age: 22 },
      { name: event.target.value, age: 23 } 
    ]})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      cursor: 'pointer',
      border: '1px solid blue',
      padding: '8px'
    }
    return(
      <div className = 'App'>
        <h1>Hey, man</h1>
        
        {/* First Method of sending an argument in function switchNameHandler i.e 'Peinzero' using bind() */}
        {/* This is better practise than Second Method */}
        {/* inline styling */}
        <button style = {style} onClick = {this.switchNameHandler.bind(this,'Peinzero')}> Switch Name</button>
        
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}> I'm learning React</Person>  
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> I'm learning Vue</Person>
        
        {/* sending switchNameHandler as an argument to person Component in Person.js  */}
        {/* Second Method of sending an argument in function switchNameHandler i.e 'Maddy' using an Anonymous function */}
        <Person 
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age}
          click = {() => this.switchNameHandler('Maddy')}
          changed = {this.changedNameHandler}
        />  

      </div>
    )
  }
}

export default App;
