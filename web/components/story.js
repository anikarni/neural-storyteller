import React from 'react'
import { Link } from 'react-router-dom'

const extractBase64FromImageUri = base64Uri =>
  base64Uri.substring(base64Uri.indexOf(",") + 1)


class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: 'Generating story...' }
  }

  componentWillMount() {
    const image = extractBase64FromImageUri(this.props.location.state.imageUri)
    global.eel
      ? global.eel.generate_story(image)(this.updateStory.bind(this))
      : this.updateStory([null, 'Not running backend'])
  }

  updateStory([filepath, story]) {
    this.setState({ filepath, story })
  }

  saveStory() {
    const { filepath, story } = this.state
    if (global.eel) global.eel.save_story(filepath, story)
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="result">
        <div id="picture">
          <img src={this.props.location.state.imageUri}/>
        </div>
        <p id="story">{ this.state.story }</p>
        <a onClick={this.saveStory.bind(this)}>Save</a>
        <Link to='/'>Cancel</Link>
      </div>
    )
  }
}

export default Story
