import React from 'react'

//Webcam.set({
    //width: 700,
    //height: 530,
    //dest_width: 640,
    //dest_height: 480,
    //image_format: 'jpeg',
    //jpeg_quality: 90,
    //force_flash: false,
    //flip_horiz: true,
    //fps: 45
//})

//Webcam.attach('#my_camera')

const takeSnapshot = () => console.log('snapshot')

const Camera = () =>
  <div id="take-picture" className="container">
    <div id="my_camera"></div>
    <a onClick={takeSnapshot}>Take Snapshot</a>
  </div>

export default Camera
