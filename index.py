import eel
import string
import random
import sqlite3
from neural import generate
import bottle
import os

eel.init('web/dist')
conn = sqlite3.connect('neural.db')
conn.text_factory = str
c = conn.cursor()
z = generate.load_all(c, conn)
z_swift = dict(z)
z_swift['bpos'] = generate.load_posbias()

@eel.expose
def generate_story(image, lyrics):
    filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(20))
    filepath = 'images/' + filename + '.jpg'
    fh = open('web/dist/' + filepath, "wb")
    fh.write(image.decode('base64'))
    fh.close()
    trained_models = z_swift if lyrics else z
    story = generate.story(trained_models, 'web/dist/' + filepath, lyric=lyrics)
    return [filepath, story]

@eel.expose
def save_story(filepath, story):
    if filepath and story:
        c.execute("INSERT INTO photos VALUES (?, ?)", (filepath, story))
        conn.commit()

@eel.expose
def get_stories():
    c.execute("SELECT * FROM photos")
    images = c.fetchall()
    return map(lambda image: { 'image': image[0], 'story': image[1] }, images)

@bottle.route('/')
@bottle.route('/stories')
@bottle.route('/story')
@bottle.route('/camera')
def _static():
    return bottle.static_file('index.html', root=os.path.abspath('web/dist'))

_options = { 'mode': 'None' }
eel.start('', options=_options)

