import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange(thing, e) {
    this.setState({ [thing]: e.target.value })
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

        <button onClick={ this.props.addIdea }>Submit</button>
      </div>
    )
  }

}
