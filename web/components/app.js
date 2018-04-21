import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hero from './hero'
import Camera from './Camera'
import Story from './Story'

const App = () =>
  <div>
    <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path='/camera' component={Camera}/>
      <Route path='/story' component={Story}/>
    </Switch>
  </div>

export default App
