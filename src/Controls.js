import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
    this.submitIdea = this.submitIdea.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(thing, e) {
    this.setState({ [thing]: e.target.value })
  }

  submitIdea() {
    const idea = Object.assign({ id: Date.now() }, this.state)
    this.props.addIdea(idea)
    this.setState({ title: '', body: '' })
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.submitIdea()
    }
  }

  render() {
    return (
      <div className='controls-container'>
        <input placeholder='title'
               value={ this.state.title }
               onChange={ this.handleChange.bind(this, 'title') } />

        <input placeholder='body'
               value={ this.state.body }
               onChange={ e => this.handleChange('body', e) }
               onKeyDown={ this.handleEnter }/>

        <button onClick={ this.submitIdea }>Submit</button>
      </div>
    )
  }

}
