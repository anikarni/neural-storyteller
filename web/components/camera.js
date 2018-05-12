import React from 'react'
import { withRouter } from 'react-router-dom'
import Webcam from 'webcamjs'

Webcam.set({
    width: 700,
    height: 530,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90,
    force_flash: false,
    flip_horiz: true,
    fps: 45
})

class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
  }

  componentDidMount() {
    Webcam.attach('#my_camera')
    Webcam.on('live', () => {
      this.setState({ disabled: false })
    })
  }

  takeSnapshot() {
    if (this.state.disabled) { return }
    this.setState({ count: 5, disabled: true })
    const lyrics = document.getElementById('lyrics').checked
    const loop = setInterval(() => {
      this.setState({ count: this.state.count - 1 })
      if (this.state.count === 0) {
        Webcam.snap(imageUri => { this.props.history.push('/story', { imageUri, lyrics }) });
        clearInterval(loop)
      }
    }, 1000)
  }


  render() {
    return (
      <div id="take-picture">
        <p id="loading-camera">Loading camera...</p>
        <div id="my_camera"></div>
        <h2 id="countdown">{this.state.count}</h2>
        <div>
          <input type="checkbox" name="lyrics" id="lyrics"/>
          <label htmlFor="lyrics"
            style={{color: '#7A7570', textTransform: 'uppercase'}}>
            I want Taylor Swift lyrics instead of a novel passage, please! Thx!
          </label>
        </div>
        <a
          onClick={this.takeSnapshot.bind(this)}
          className={this.state.disabled ? "disabled" : ""}>Take Snapshot</a>
      </div>
    )
  }
}

export default withRouter(Camera)
