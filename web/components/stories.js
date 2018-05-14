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
    if (stories) setTimeout(this.nextIndex.bind(this), 15000)
    return (
      <div className="stories">
        <div id="picture">
          <img src={story.image}/>
          <p id="story">{story.story}</p>
        </div>
      </div>
    )
  }
}

export default Stories
