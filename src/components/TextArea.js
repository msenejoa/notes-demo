import React, { Component } from 'react'
import ContentEditable from './ContentEditable'
import { htmlParser } from './../lib/htmlParser'

const empty = {
  html: '',
  rawText: 'enter text',
  source: { name: '' },
}

export default class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlState: empty,
    }
    this.handleChange = this.handleChange.bind(this)
    this.textRef = React.createRef()
  }

  handleChange(text, e) {
    let newHtmlState = { ...this.state.htmlState }
    newHtmlState.rawText = text
    newHtmlState.html = text
    this.parseText(newHtmlState)
  }

  parseText(htmlState) {
    const newState = htmlParser(htmlState)
    this.props.htmlState(newState)

    this.setState({ htmlState: newState })
  }

  render() {
    return (
      <div>
        <ContentEditable
          htmlState={this.state.htmlState}
          onChange={this.handleChange}
          _ref={this.textRef}
        />
      </div>
    )
  }
}
