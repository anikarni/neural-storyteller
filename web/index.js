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
  $('#take-picture').hide();
  $('#result').show();

  Webcam.snap((data_uri) => {
    document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';
  });
}

global.takeSnapshot = takeSnapshot

console.log(eel.generate_story('/Users/aarni/Documents/code/play/neural-storyteller/neural/images/ex2.jpg'))
