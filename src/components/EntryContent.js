import React, { Component } from 'react'

export default class EntryContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let entry = { author: '', source: '', entry: '', pageTo: '', pageFrom: '' }
    if (this.props.htmlState.entrySources) {
      entry = { ...this.props.htmlState.entrySources }
    }
    return (
      <div>
        <h3>Author</h3>
        <p>{entry.author}</p>
        <br />
        <h3>Source</h3>
        <p>{entry.source}</p>
        <br />
        <h3>Page{entry.pageTo && 's'}</h3>
        <p>
          {entry.pageFrom}
          {entry.pageTo && `-${entry.pageTo}`}
        </p>
        <br />
        <h3>Entry</h3>
        <p>{entry.entry}</p>
      </div>
    )
  }
}
