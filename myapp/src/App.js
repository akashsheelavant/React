import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Form from './Form'

class App extends Component {
  state = {
    ninjas: [
      {name: 'Pakkya', age: 42, belt: 'black', id: 1},
      {name: 'Adavya', age: 34, belt: 'pink', id: 2},
      {name: 'Kariya', age: 51, belt: 'white', id: 3}
    ]
  }

  addItems = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteItem = (id) => {
    let items = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: items
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={ this.state.ninjas } deleteItem = { this.deleteItem } />
        <Form addItems={this.addItems}/>
      </div>
    );    
  }
}

export default App;
