import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () =>
  <div class="hero">
    <h1 className="display-4">Neural Storyller</h1>
    <p>We know you're having a blast and you probably know it too. How would you describe this experience in a song lyric or a novel, though? Let us give it a try. Snap a picture, we'll tell you a story.</p>
    <Link to='/camera'>Start here!</Link>
  </div>

export default Hero
