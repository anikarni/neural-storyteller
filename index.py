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
    story = 'We had to the group of people at the beach , but for the first time in my life , it felt like they were going to fall apart . I was n\'t really sure what the beach was going to be . I had never seen Nate so beautiful , and he had no intention of helping her out on the beach . As soon as the sun came up , she shook her head and let go of my arm . Heat spread through my body , reminding me that Lissa and I have been friends for almost twenty-four thousand years . I was more than willing to ignore the group , at the beach people left .' # generate.story(z, filename)
    r.hset(filename, 'image', filepath)
    r.hset(filename, 'story', story)
    return story

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)

