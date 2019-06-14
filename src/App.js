import React, { Component } from 'react'
import './App.css'
import EntryContent from './components/EntryContent'
import TextArea from './components/TextArea'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlState: {},
    }
  }

  handleChange(value) {
    this.setState({ htmlState: { ...value } })
  }

  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <header className='page-header' />
          <main className='page-main'>
            <div className='left'>
              {/*
            <Content />
          */}
              <TextArea htmlState={v => this.handleChange(v)} />
            </div>

            <div className='right'>
              <EntryContent htmlState={this.state.htmlState} />
            </div>
          </main>
          <footer className='page-footer' />
        </div>
      </div>
    )
  }
}

export default App
