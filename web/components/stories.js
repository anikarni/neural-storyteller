import React from 'react'
import { Link } from 'react-router-dom'

class Stories extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  componentWillMount() {
    if (global.eel) global.eel.get_stories()(this.update.bind(this))
  }

  update(stories) {
    this.setState({ stories })
  }

  nextIndex() {
    const currentIndex = this.state.index
    const index = (currentIndex < this.state.stories.length - 1) ? currentIndex + 1 : 0
    this.setState({ index })
  }

  render() {
    const { stories } = this.state
    const story = (stories) ? stories[this.state.index] : {}
    if (stories) setTimeout(this.nextIndex.bind(this), 20000)
    return (
      <div>
        <div id='result'>
          <div id="picture">
            <img src={story.image||'images/9ZIQCUMZAQ7AXK77379P.jpg'}/>
          </div>
          <p id="story" style={{whiteSpace: 'pre-line'}}>{story.story || 'dsdadas'}</p>
        </div>
        <Link to='/'>Back to home page</Link>
      </div>
    )
  }
}

export default Stories
