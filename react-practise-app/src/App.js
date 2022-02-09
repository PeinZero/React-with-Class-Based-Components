import React, { Component} from 'react'
import Auxiliary from './hoc/Auxiliary/Auxiliary'
import Structure from './hoc/Structure/Structure'
import BurgerMaker from './containers/BurgerMaker/BurgerMaker'

class App extends Component{
  render(){
    return(
      <Auxiliary>
        <Structure>
          <BurgerMaker/> 
        </Structure>
      </Auxiliary>
    );
  }
}


export default App;
