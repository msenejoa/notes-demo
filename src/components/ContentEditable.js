import React, { Component } from 'react'
import { setEndOfContenteditable } from './../lib/htmlParser'

export default class ContentEditable extends Component {
  constructor(props) {
    super(props)
    this.emitChange = this.emitChange.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.htmlState.html !== this.props._ref.current.innerHTML
  }

  componentDidUpdate() {
    if (this.props.htmlState.raw !== this.props._ref.current.innerHTML) {
      this.props._ref.current.innerHTML = this.props.htmlState.rawText
    }
    var el = this.props._ref.current
    setEndOfContenteditable(el)
  }

  emitChange(e) {
    var html = this.props._ref.current.innerHTML
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange(html)
    }
    this.lastHtml = html
  }

  render() {
    return (
      <div
        style={{ height: '100px' }}
        ref={this.props._ref}
        id='contenteditable'
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.htmlState.html }}
      />
    )
  }
}
