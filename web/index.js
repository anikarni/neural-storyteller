const Webcam = require('webcamjs')
const $ = require("jquery");

Webcam.attach('#my_camera')

const takeSnapshot = () => {
  $('#take-picture').hide();
  $('#result').show();

  Webcam.snap((data_uri) => {
    document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';
  });
}

global.takeSnapshot = takeSnapshot
