import eel
import string
import random
import sqlite3
from neural import generate

eel.init('web')
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
    c.execute("INSERT INTO photos VALUES (?, ?)", (filepath, story))
    conn.commit()
    return story

_options = { 'mode': 'None' }
eel.start('bundle/index.html', options=_options)

