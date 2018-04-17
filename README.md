# neural-storyteller

This project seeks to create a easily accessible UI for uploading images and generating images based on the [neural-storyteller](git@github.com:ryankiros/neural-storyteller.git) project. All props go to their work.

## Getting started

You will first need to download some pre-trained models and style vectors. Most of the materials are available in a single compressed file, which you can obtain by running

    wget http://www.cs.toronto.edu/~rkiros/neural_storyteller.zip

Included is a pre-trained decoder on romance novels, the decoder dictionary, caption and romance style vectors, MS COCO training captions and a pre-trained image-sentence embedding model.

Next, you need to obtain the pre-trained skip-thoughts encoder. Go [here](https://github.com/ryankiros/skip-thoughts) and follow the instructions on the main page to obtain the pre-trained model.

Finally, we need the VGG-19 ConvNet parameters. You can obtain them by running

    wget https://s3.amazonaws.com/lasagne/recipes/pretrained/imagenet/vgg19.pkl

Note that this model is for non-commercial use only. Once you have all the materials, open `neural/config.py` and specify the locations of all of the models and style vectors that you downloaded.

For running on CPU, you will need to download the VGG-19 prototxt and model by:

    wget http://www.robots.ox.ac.uk/~vgg/software/very_deep/caffe/VGG_ILSVRC_19_layers.caffemodel
    wget https://gist.githubusercontent.com/ksimonyan/3785162f95cd2d5fee77/raw/bb2b4fe0a9bb0669211cf3d0bc949dfdda173e9e/VGG_ILSVRC_19_layers_deploy.prototxt

 You also need to modify pycaffe and model path in `neural/config.py`, and modify the flag in line 8 as:

    FLAG_CPU_MODE = True

## install

```
pip install -r requirements.txt
cd web && npm install
```

## run

```
npm start
```

## The original neural-storyteller

neural-storyteller is a recurrent neural network that generates little stories about images. This repository contains code for generating stories with your own images, as well as instructions for training new models.

<img src="https://github.com/ryankiros/neural-storyteller/blob/master/images/ex1.jpg" height="220px" align="left">
*We were barely able to catch the breeze at the beach , and it felt as if someone stepped out of my mind . She was in love with him for the first time in months , so she had no intention of escaping . The sun had risen from the ocean , making her feel more alive than normal . She 's beautiful , but the truth is that I do n't know what to do . The sun was just starting to fade away , leaving people scattered around the Atlantic Ocean . I d seen the men in his life , who guided me at the beach once more .*

[Samim](http://samim.io/) has made an awesome blog post with lots of results [here](https://medium.com/@samim/generating-stories-about-images-d163ba41e4ed).

Some more results from an older model trained on Adventure books can be found [here](http://www.cs.toronto.edu/~rkiros/adv_L.html).

The whole approach contains 4 components:
* [skip-thought vectors](https://github.com/ryankiros/skip-thoughts)
* [image-sentence embeddings](https://github.com/ryankiros/visual-semantic-embedding)
* [conditional neural language models](https://github.com/ryankiros/skip-thoughts/tree/master/decoding)
* style shifting (described in this project)

The 'style-shifting' operation is what allows our model to transfer standard image captions to the style of stories from novels. The only source of supervision in our models is from [Microsoft COCO](http://mscoco.org/) captions. That is, we did not collect any new training data to directly predict stories given images.

Style shifting was inspired by [A Neural Algorithm of Artistic Style](http://arxiv.org/abs/1508.06576) but the technical details are completely different.

### How does it work?

We first train a recurrent neural network (RNN) decoder on romance novels. Each passage from a novel is mapped to a skip-thought vector. The RNN then conditions on the skip-thought vector and aims to generate the passage that it has encoded. We use romance novels collected from the BookCorpus [dataset](http://www.cs.toronto.edu/~mbweb/).

Parallel to this, we train a visual-semantic embedding between COCO images and captions. In this model, captions and images are mapped into a common vector space. After training, we can embed new images and retrieve captions.

Given these models, we need a way to bridge the gap between retrieved image captions and passages in novels. That is, if we had a function F that maps a collection of image caption vectors **x** to a book passage vector F(**x**), then we could feed F(**x**) to the decoder to get our story. There is no such parallel data, so we need to construct F another way.

It turns out that skip-thought vectors have some intriguing properties that allow us to construct F in a really simple way. Suppose we have 3 vectors: an image caption **x**, a "caption style" vector **c** and a "book style" vector **b**. Then we define F as

F(**x**) = **x** - **c** + **b**

which intuitively means: keep the "thought" of the caption, but replace the image caption style with that of a story. Then, we simply feed F(**x**) to the decoder.

How do we construct **c** and **b**? Here, **c** is the mean of the skip-thought vectors for Microsoft COCO training captions. We set **b** to be the mean of the skip-thought vectors for romance novel passages that are of length > 100.


## License

all distribution, reproduct and usage must follow the [neural-storyteller](git@github.com:ryankiros/neural-storyteller.git) terms and conditions.

