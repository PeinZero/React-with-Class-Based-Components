// import './App.css';
// import React, {Component} from 'react';
// import Person from './Person/Person';

//  BASICS, REACT createElement AND ALTERNATIVES, JSX VS HTML, FUNCTIONAL VS CLASS COMPONENTS

class App extends Component{
  render(){
    // create element usint React ...createElement take atleast 3 arguments with first being tagName, second configuration, and third html content.
    // return React.createElement('div' , {className: 'App'} , 'Hey, man.') 

    // nesting html tags 
    // return React.createElement('div' , {className: 'App'}, React.createElement('h1' , null , 'Hey, man.'));
    // The above line is equivalent to  the below code
    return(
      <div className = 'App'>
        <h1>Hey, man</h1>
        {/* making Person component dynamic by sending arguments, all these arguments will be recieved in a javascript object. */}
        <Person name = 'Mahad' age = '21'> I'm learning React</Person>  
        <Person name = 'Ammar' age = '23'> I'm learning Vue</Person>  
        <Person name = 'Abdullah' age = '22'/>  
      </div>
    )
    // This way (the above code is written in JSX and not html), we can write code easily since we import React above, it in the backend convert this to React.createElement method automatically.
  }
}

// This is also a way of making component, this way we also don't need to import Component, since this is a fucntion and not a class.
// function App() {
//   return (
//     <div className="App">
//       <h1>Hey, man.</h1>
//     </div>
//   );
// }

// export default App;
