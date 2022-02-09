// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person';

// HANDLERS (METHODS), STATE  AND SETSTATE, METHOD CALLING USING THIS OPERATOR

class App extends Component{
  // props are set and pass value from outside the component, whereas state is managed inside a component.
  // state only work in class that extends Component
  // state is a special property, it can change and if it does it will lead react to re-render DOM

  state = {
    persons: [
                { name: 'mahad', age: 21 },
                { name: 'ammar', age: 22 },
                { name: 'abdullah', age: 23 }
    ],
    human: true
  }

  switchNameHandler = () =>{
    // console.log('was clicked!');
    // if this wasn't an arrow function, then we could'nt have used 'this'
    // Component class has a method to change 'state' property used above called setState()
    // setState takes in an object, and it will merge whatever we define inside with our existing state.
    this.setState({persons: [
      { name: 'maddy', age: 22 },
      { name: 'ammar', age: 22 },
      { name: 'abdullah', age: 23 }
    ]})
    
    // - setState will compare the state above with setState content. 
    // - It will check which part of the state is being over-written or changing, in our case it checks persons property.
    // - It will merge the old state with the new one, which in our case will overwrite the person property.
    // - It will not touch any thing else i.e 'human: true' in state above will not be discarded.
    // - Changes will be reflected upon persons only.
  }

  render(){
    return(
      <div className = 'App'>
        <h1>Hey, man</h1>
        <button onClick = {this.switchNameHandler}> Switch Name</button>
        {/* here this refers to the class 'App'.*/}
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}> I'm learning React</Person>  
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> I'm learning Vue</Person>  
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>  
      </div>
    )
  }
}

// export default App;
