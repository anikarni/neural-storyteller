import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () =>
  <div className="hero">
    <h1 className="display-4">Neural Storyteller</h1>
    <hr/>
    <p>Your time here requires a souvenir as creative as your experience. We don't trust a computer to provide a worthy one, but we thought it might be fun to try it. Snap a picture of something that matters to you and let us run some magic and create a short story for you.</p>
    <Link to='/camera'>Start here!</Link>
    <Link to='/stories'>See others' stories</Link>
  </div>

export default Hero
