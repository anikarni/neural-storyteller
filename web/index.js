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

const displayResultSection = () => {
  $('#take-picture').css('display', 'none');
  $('#result').css('display', 'flex');
}

const extractBase64ImageFromString = (base64String) =>
  base64String.substring(base64String.indexOf(",") + 1)

const takeSnapshot = () => {
  displayResultSection()

  Webcam.snap((dataUri) => {
    document.getElementById('picture').innerHTML = '<img src="'+dataUri+'"/>';
    const story = eel.generate_story(extractBase64ImageFromString(dataUri))
  });
}

global.takeSnapshot = takeSnapshot
