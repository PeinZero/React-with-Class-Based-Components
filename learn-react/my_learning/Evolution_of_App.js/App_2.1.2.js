// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person';

// DISPLAYING CONTENT CONDITIONALLY METHOD 2: THE JAVASCRIPT WAY

class App extends Component{

  state = {
    persons: [
                { name: 'mahad', age: 21 },
                { name: 'ammar', age: 22 },
                { name: 'abdullah', age: 23 }
    ],
    human: true,
    showPerson: false
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

  togglePersonHandler = () => {
    const togglePerson = this.state.showPerson
    this.setState({showPerson: !togglePerson})
    // again here human and persons are merged and not discarded
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      cursor: 'pointer',
      border: '1px solid blue',
      padding: '8px'
    }

    // Since render is called everytime React checks whether it needs to re-render this page, react takes the latest state into account. 
    // This method is more cleaner, we create a variable which is either null or has JSX
    let persons = null
    if (this.state.showPerson){
      persons = (
        <div>
          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}> I'm learning React</Person>  
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> I'm learning Vue</Person>
          <Person 
            name = {this.state.persons[2].name}
            age = {this.state.persons[2].age}
            click = {() => this.switchNameHandler('Maddy')}
            changed = {this.changedNameHandler}
          /> 
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
