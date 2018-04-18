import eel
import string
import random
import redis
from neural import generate

eel.init('web')
r = redis.StrictRedis(host='localhost', port=6379, db=0)
z = generate.load_all(r)

@eel.expose
def generate_story(image):
    filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(20))
    filepath = 'images/' + filename + '.jpg'
    fh = open(filepath, "wb")
    fh.write(image.decode('base64'))
    fh.close()
    story = generate.story(z, filename)
    r.hset(filename, 'image', filepath)
    r.hset(filename, 'story', story)
    return story

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)

