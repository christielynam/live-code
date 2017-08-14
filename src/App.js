import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import IdeaList from './IdeaList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea(idea) {
    const newTruth = [ ...this.state.ideas, idea ]
    this.setState({ ideas: newTruth })
  }


  render() {
    return (
      <div className="App">
        <Controls  addIdea={ this.addIdea.bind(this) } />
        <IdeaList ideas={this.state.ideas} />
      </div>
    );
  }
}

export default App;
