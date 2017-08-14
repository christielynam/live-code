import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
    this.submitIdea = this.submitIdea.bind(this)
  }

  handleChange(thing, e) {
    this.setState({ [thing]: e.target.value })
  }

  submitIdea() {
    this.props.addIdea(this.state)
    this.setState({ title: '', body: '' })
  }

  render() {
    return (
      <div className='controls-container'>
        <input placeholder='title'
               value={ this.state.title }
               onChange={ this.handleChange.bind(this, 'title') } />

        <input placeholder='body'
               value={ this.state.body }
               onChange={ e => this.handleChange('body', e) }/>

        <button onClick={ this.submitIdea }>Submit</button>
      </div>
    )
  }

}
