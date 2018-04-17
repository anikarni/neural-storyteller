import os
"""
Configuration for the generate module
"""

#-----------------------------------------------------------------------------#
# Flags for running on CPU
#-----------------------------------------------------------------------------#
FLAG_CPU_MODE = True

#-----------------------------------------------------------------------------#
# Paths to models and biases
#-----------------------------------------------------------------------------#
paths = dict()

# Skip-thoughts
paths['skmodels'] = os.path.abspath('./neural/models') + '/'
paths['sktables'] = os.path.abspath('./neural/models') + '/'

# Decoder
paths['decmodel'] = os.path.abspath('./neural/models/romance.npz')
paths['dictionary'] = os.path.abspath('./neural/models/romance_dictionary.pkl')

# Image-sentence embedding
paths['vsemodel'] = os.path.abspath('./neural/models/coco_embedding.npz')

# VGG-19 convnet
paths['vgg'] = os.path.abspath('./neural/models/vgg19.pkl')
paths['pycaffe'] = os.path.abspath('../caffe/python')
paths['vgg_proto_caffe'] = os.path.abspath('./neural/models/VGG_ILSVRC_19_layers_deploy.prototxt')
paths['vgg_model_caffe'] = os.path.abspath('./neural/models/VGG_ILSVRC_19_layers.caffemodel')


# COCO training captions
paths['captions'] = os.path.abspath('./neural/models/coco_train_caps.txt')

# Biases
paths['negbias'] = os.path.abspath('./neural/models/caption_style.npy')
paths['posbias'] = os.path.abspath('./neural/models/romance_style.npy')
