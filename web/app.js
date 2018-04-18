import React from 'react'

const App = () =>
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Header</a>
    </nav>
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <a href="take-picture.html" className="btn btn-primary active">Take Pic</a>
    </div>
    <footer className="footer">
      <span className="text-muted">Footer</span>
    </footer>
  </div>

export default App
