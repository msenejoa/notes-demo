import React from 'react'
import './App.css'
import Content from './components/Content'

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <header className='page-header'>header</header>
        <main className='page-main'>
          <Content />
        </main>
        <footer className='page-footer'>footer</footer>
      </div>
    </div>
  )
}

export default App
