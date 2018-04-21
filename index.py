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

@eel.expose
def generate_story(image):
    filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(20))
    filepath = 'images/' + filename + '.jpg'
    fh = open(filepath, "wb")
    fh.write(image.decode('base64'))
    fh.close()
    story = generate.story(z, filepath)
    return [filepath, story]

@eel.expose
def save_story(filepath, story):
    if filepath and story:
        c.execute("INSERT INTO photos VALUES (?, ?)", (filepath, story))
        conn.commit()

@bottle.route('/')
def _static():
    return bottle.static_file('index.html', root=os.path.abspath('web/dist'))

_options = { 'mode': 'None' }
eel.start('', options=_options)

