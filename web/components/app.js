import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hero from './hero'
import Camera from './Camera'
import Story from './Story'

const App = () =>
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Header</a>
    </nav>
    <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path='/camera' component={Camera}/>
      <Route path='/story' component={Story}/>
    </Switch>
    <footer className="footer">
      <span className="text-muted">Footer</span>
    </footer>
  </div>

export default App
