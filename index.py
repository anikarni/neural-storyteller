import eel
import string
import random
import redis
#  from neural import generate

eel.init('web')
#  z = generate.load_all()
r = redis.StrictRedis(host='localhost', port=6379, db=0)

@eel.expose
def generate_story(image):
    filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(20))
    filepath = 'images/' + filename + '.jpg'
    fh = open(filepath, "wb")
    fh.write(image.decode('base64'))
    fh.close()
    story = 'story' # generate.story(z, filename)
    r.hset(filename, 'image', filepath, 'story', story)
    return 'story'

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)

