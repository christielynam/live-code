import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea() {
    alert('triggered!')
  }


  render() {
    return (
      <div className="App">
        <Controls addIdea={ this.addIdea.bind(this) } />
      </div>
    );
  }
}

export default App;
