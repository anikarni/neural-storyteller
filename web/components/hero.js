import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () =>
  <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <Link to='/camera'>Take Pic</Link>
  </div>

export default Hero
