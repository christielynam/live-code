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

  deleteIdea(id) {
    console.log('firrrrreeed!');
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)

    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <div className="App">
        <Controls  addIdea={ this.addIdea.bind(this) } />
        <IdeaList ideas={this.state.ideas}
                  deleteIdea={this.deleteIdea.bind(this)} />
      </div>
    );
  }
}

export default App;
