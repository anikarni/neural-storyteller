import React from 'react'
import { Link } from 'react-router-dom'

const extractBase64FromImageUri = base64Uri =>
  base64Uri.substring(base64Uri.indexOf(",") + 1)

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
  }

  componentWillMount() {
    const image = extractBase64FromImageUri(this.props.location.state.imageUri)
    if (global.eel) global.eel.generate_story(image)(this.updateStory.bind(this))
  }

  updateStory([filepath, story]) {
    this.setState({ filepath, story, disabled: false })
  }

  saveStory() {
    const { filepath, story } = this.state
    if (global.eel) global.eel.save_story(filepath, story)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div id="result">
          <div id="picture">
            <img src={this.props.location.state.imageUri}/>
          </div>
          <p id="story">{ this.state.story || 'Generating story... Give us a few minutes in the name of inspiration and creativity.' }</p>
        </div>
        <div>
          <p style={{color: '#7A7570'}}>
            We'd love to share these stories will other SHOPA patients. Can we?
          </p>
          <a
            onClick={this.saveStory.bind(this)}
            className={this.state.disabled ? "disabled" : ""}>Yes, please share the love!</a>
          <Link
            to='/'
            className={this.state.disabled ? "disabled" : ""}>Nah, thanks</Link>
        </div>
      </div>
    )
  }
}

export default Story
