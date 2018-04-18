import React from 'react'
import Hero from './hero'
import Camera from './Camera'
import Story from './Story'

const App = () =>
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Header</a>
    </nav>
    <Hero />
    <Camera />
    <Story />
    <footer className="footer">
      <span className="text-muted">Footer</span>
    </footer>
  </div>

export default App
