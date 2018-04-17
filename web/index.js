const Webcam = require('webcamjs')

Webcam.attach('#my_camera')

const takeSnapshot = () => {
  Webcam.snap((data_uri) => {
    document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
  });
}

global.takeSnapshot = takeSnapshot
