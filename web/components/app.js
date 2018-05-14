import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hero from './hero'
import Camera from './Camera'
import Story from './Story'
import Stories from './Stories'

const App = () =>
  <div>
    <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path='/camera' component={Camera}/>
      <Route path='/story' component={Story}/>
      <Route path='/stories' component={Stories}/>
    </Switch>
    <footer>
      <div className="info">
        <i className="fa fa-info" aria-hidden="true"></i>
        <div className="tooltip-text">
          <p>The neural storyteller is a recurrent neural network that generates little stories about images. It first generates captions for your image through a model trained with captions and images. A second model is trained to map these captions to novel passages or song lyrics. Wanna learn more? Checkout the original project at https://github.com/ryankiros/neural-storyteller.</p>
          <p>Credits: Ryan Kiros and crew for the original neural-storyteller, and Anike Arni and Bruna Pereira for making it into a (hopefully) fun experience.</p>
        </div>
      </div>
    </footer>
  </div>

export default App
