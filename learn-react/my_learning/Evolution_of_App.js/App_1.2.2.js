// import './App.css';
// useState it allows to manage state in a functional component
// import React, {useState} from 'react';
// import Person from './Person/Person';

// we can manage state in functional components using react hooks
// to use react hooks we must use function instead of class
// react hook is basically a collection of functions exposed to you by react which you can use in functional components

// This is a statefull,container,smart component
// Must be few in React app. 
// This make your app easy to maintain and manage. 
// You have a clear flow of data and it's very clear where your main logic sits and where your data changes
// and then is distributed to the rest of your app.
// So, if changes needs to be done, you know exactly where to make that change.
// If every component, manages it own state, you quickly end up with spaghetti code. 
// That can make the app very hard to reuse and maintain
// Therefore, there should many stateless, presentation or dump component such as persons in Person.js and very few 
// statefull components.

const App = (props) => { 
  // useState always return 2 things
  // we are using de-structuring method here
  const [personsState, setPersonsState] = useState({
    persons: [
                { name: 'mahad', age: 21 },
                { name: 'ammar', age: 22 },
                { name: 'abdullah', age: 23 }
    ]
  });

  const [humanState, setHumanState] = useState({
    human: 'yes'
  });
  
  // we can write functions within functions in JS.
  const switchNameHandler = () =>{
    // since this.setState can't be used anymore, we will use setPersonsState
    // setPersonsState does not merge here, instead it replaces the old state with new one.
    setPersonsState({
      persons: [
        { name: 'maddy', age: 22 },
        { name: 'ammar', age: 22 },
        { name: 'abdullah', age: 23 }
      ]
    });

    setHumanState({
      human: 'still human'
    })

    // Another method is to use multiple useState
  };

  return(
    <div className = 'App'>
      <h1>Hey, man</h1>
      {/* here instead of this.switchNameHandler we will use just switchNameHandler. */}
      <button onClick = {switchNameHandler}> Switch Name</button>
      {/* we can't use this here since app is not a class but instead we have personsState to access persons content.*/}
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}> I'm learning React</Person>  
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}> I'm learning Vue</Person>  
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/> 
      <p>Human: {humanState.human}</p> 
    </div>
  )
}

// export default App;
