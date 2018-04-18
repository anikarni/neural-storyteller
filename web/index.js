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

const displayImage = imageUri =>
  document.getElementById('picture').innerHTML = '<img src="'+imageUri+'"/>';

const displayStory = story =>
  $('#story').html(story)

const extractBase64FromImageUri = base64Uri =>
  base64Uri.substring(base64Uri.indexOf(",") + 1)

const generateStory = imageUri =>
  eel.generate_story(extractBase64FromImageUri(imageUri))(story => displayStory(story))

const takeSnapshot = () => {
  displayResultSection()

  Webcam.snap(imageUri => {
    displayImage(imageUri)
    generateStory(imageUri)
  });
}

global.takeSnapshot = takeSnapshot
