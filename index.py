import eel
import string
import random
#  from neural import generate

eel.init('web')
#  z = generate.load_all()

@eel.expose
def generate_story(image):
    filename = 'images/' + ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(20)) + '.jpg'
    fh = open(filename, "wb")
    fh.write(image.decode('base64'))
    fh.close()
    return 'story'
    #  return generate.story(z, filename)

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)

