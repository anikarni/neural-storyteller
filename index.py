import eel
# from neural_storyteller import generate
# z = generate.load_all()
eel.init('web')

# @eel.expose
# def generate_story(image):
    # generate.story(z, './ex1.jpg')

_options = { 'mode': 'None' }

eel.start('dist/index.html', options=_options)
