const Webcam = require('webcamjs')
const $ = require("jquery");

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
});
Webcam.attach('#my_camera')

const takeSnapshot = () => {
  $('#take-picture').css('display', 'none');
  $('#result').css('display', 'flex');

  Webcam.snap((data_uri) => {
    document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';
    const story = eel.generate_story(str.substring(str.indexOf(",") + 1))
  });
}

global.takeSnapshot = takeSnapshot
