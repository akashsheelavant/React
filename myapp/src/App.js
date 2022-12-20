import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Pakkya', age: 42, belt: 'black', id: 1},
      {name: 'Adavya', age: 34, belt: 'pink', id: 2},
      {name: 'Kariya', age: 51, belt: 'white', id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={ this.state.ninjas } />
      </div>
    );    
  }
}

export default App;
