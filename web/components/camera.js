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

const takeSnapshot = (history) => {
  Webcam.snap(imageUri => {
    history.push('/story', { imageUri })
  });
}

class Camera extends React.Component {
  componentDidMount() {
    Webcam.attach('#my_camera')
  }

  render() {
    return (
      <div id="take-picture" className="container">
        <div id="my_camera"></div>
        <a onClick={takeSnapshot.bind(null, this.props.history)}>Take Snapshot</a>
      </div>
    )
  }
}

export default withRouter(Camera)
