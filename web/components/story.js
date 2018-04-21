import React from 'react'

const extractBase64FromImageUri = base64Uri =>
  base64Uri.substring(base64Uri.indexOf(",") + 1)

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: 'Generating story...' }
  }

  updateStory(story) {
    this.setState({ story })
  }

  componentWillMount() {
    const image = extractBase64FromImageUri(this.props.location.state.imageUri)
    global.eel
      ? global.eel.generate_story(image)(this.updateStory)
      : this.updateStory('Not running backend')
  }

  render() {
    return (
      <div id="result">
        <div id="picture">
          <img src={this.props.location.state.imageUri}/>
        </div>
        <p id="story">{ this.state.story }</p>
      </div>
    )
  }
}

export default Story
