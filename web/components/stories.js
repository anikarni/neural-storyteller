import React from 'react'

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
      <div id='result' className="stories">
        <div id="picture">
          <img src={story.image}/>
        </div>
        <p id="story" style={{whiteSpace: 'pre-line'}}>{story.story}</p>
      </div>
    )
  }
}

export default Stories
