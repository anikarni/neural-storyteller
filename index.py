import eel
from neural import generate

eel.init('web')
z = generate.load_all()

@eel.expose
def generate_story(image):
    return generate.story(z, image)

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)
