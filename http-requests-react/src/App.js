import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // TO ENABLE ROUTING, WE HAVE TO COVER THE MAIN APP IN <BrowserRouter> </BrowserRouter>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
