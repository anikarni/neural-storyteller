import React from 'react'
import { Link } from 'react-router-dom'
import Webcam from 'webcamjs'

const takeSnapshot = () => {
  Webcam.snap(imageUri => {
    //displayImage(imageUri)
    //generateStory(imageUri)
  });
}

class Camera extends React.Component {
  componentDidMount() {
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

    Webcam.attach('#my_camera')
  }

  render() {
    return (
      <div id="take-picture" className="container">
        <div id="my_camera"></div>
        <a onClick={takeSnapshot}>Take Snapshot</a>
        <Link to='/story' someProp='someValue'>Take</Link>
      </div>
    )
  }
}

export default Camera
