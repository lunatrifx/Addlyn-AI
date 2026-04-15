# Addlyn-AI

Addlyn is the headlining data science project I first made on June 22, 2019. What once started as a humble 32KB Arduino Uno project that could run limited tasks in rudimentary voice capture and transcription, static object detection, and basic computer automation is now a fully robust assistant that is meant to pursue the cutting edge and test the limits of what is possible today.

Addlyn is not intended to be the know-it-all chatbot or AI that we've all grown accustomed to and used in every facet of our life. She is intended to work with you and vice versa in order for the both of you to fully understand the world we live in. Therefore, no large LLMs (either locally, cloud, or through API calls) are used in this project. Two reasons: I want to optimize on space, as with current LLMs that is simply not possible.

**The second reason is that AI learns better when you learn better**. Blindly asking AI what you want to learn can get you far, but unless you press on subtopics you're only going to stay on the superficial topics of your subject. With Addlyn, think of ChatRTX; you provide the sources, and because you provide the sources you know what's right or wrong before you send it off to her. In this workflow, you actively learn to be vigilant and learn to be accountable and knowledgeable with your work, which is a something we all need especially with the conflicts that have arisen with accusations of AI generated work.

## Currently supported platforms 

Addlyn is recommended to be run on the following platforms with more to come (TBA, when preliminary discussions turn into early Alpha builds): 

**Virtualization:**

Google Colab Pro with High RAM enabled. 

**Local Builds:**

1) 16GB VRAM to 32GB VRAM or greater, as we will be using a modified versions of existing AI models as a basic framework:

* NVIDIA Cosmos Reason 2-8B
* NVIDIA Parakeet
* NVIDIA Magpie

2) Storage:

* Set storage to comfortably build the frameworks
* Storage to import all the sources you will use and store

# Version History 

I'm just putting this here to clear up the Twitter bio and ultimately if you're curious about Addlyn-AI.

Version 1.0.0 (2019-2021): Known as Jxea, this iteration dealt with open voice capture and object detections via ultrasonic sensor. She was inspired by a project I did in my 3rd year high school PLTW electronics class. Tested the limits of a 32KB Arduino Uno.

Version 2.0.0 (2022-2023): This iteration moved away from open voice capture and into the first integration of an API. Using OpenAI's ChatGPT API, I created a source of 4 prompts it can draw from: some prompts included making 'news', quotes with who said it from what show, and getting sports data. Like how OpenAI explicitly stated that its cutoff was 2021 and can hallucinate information, Addlyn incorrectly pinned quotes or made up quotes to a series. The jokes generated were a hit or miss as well. This bot also was able to utilize Apple Shortcuts as its final ability; I wrote a script which was able to take what ever I was listening to and post it on to Twitter. 

Version 3.0.0 (2026-): Third time is the charm. Like what I have said above, this iteration will test the limits of what is possible today by using existing frameworks and modifying it to both be efficient and firing on all cylinders. We can get so far with with a know-it-all AI, but what's the fun in that with a locally deployed LLM? How about if you provide the sources, and knowing what's right or wrong can help build up the both of you at the same time?


# Check out the sister project!

Amerieca is a similar model which uses the same philosophy, but instead of text and speech, you'll both work together to build the world and create a 3D reconstruction of it. Uses NVIDIA Alphamayo, NVIDIA Drive, and will benefit autonomous vehicles and game developers.







