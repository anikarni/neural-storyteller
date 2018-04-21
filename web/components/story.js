import React from 'react'
import { Link } from 'react-router-dom'

const lorem = 'My woman gave her a little glance . Yes , she was in love with me , and I could n\'t help but notice the smug look on her face . It was the first time I entered his room , to find out what had happened to her . Her hair hung loose around her shoulders , making her feel as if she were the only girl in the world . In fact , it had taken a lot of patience for the young woman s body . She was so eager to witness that , the old stranger stripped down and forth with her face'

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
      : this.updateStory([null, lorem])
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
      <div>
        <div id="result">
          <div id="picture">
            <img src={this.props.location.state.imageUri}/>
          </div>
          <p id="story">{ this.state.story }</p>
        </div>
        <div>
          <p style={{color: '#7A7570'}}>
            We'd love to share these stories will other SHOPA patients. Can we?
          </p>
          <a onClick={this.saveStory.bind(this)}>Yes, please share the love!</a>
          <Link to='/'>Nah, thanks</Link>
        </div>
      </div>
    )
  }
}

export default Story
