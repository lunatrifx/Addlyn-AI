# Addlyn-AI


Addlyn is the second iteration of a Twitter bot I made on 01/20/22. Nothing special about it, other than this time it runs off of 4 different OpenAI prompts integrated into the code. Further updates currently being worked on include moving to analyze data by web scraping and producing statistics in addition to production of normal comments using OpenAI's API.


Addlyn took 12 hours to code in total. I did make the 3D rendition of her from Blender and I would say that added another 27 hours since I had to resculpt, rerig then compose and also rig the custom clothing of Addlyn. In total, 39 hours in total was dedicated in bringing Addlyn back to Twitter.


The one thing I highly suggest to those who want to follow along with this project is to pay attention to where everything is going on your computer and what your workflow on Xcode for Python is. People who are more experienced with Twitter API should get this done in about 4-6 hours.

## Currently supported platforms 

Addlyn is recommended to be run on the following platforms with more to come: 
  - Google Colab w/ Cloud Scheduler or local IDE (for code)
  - Apple M1+ (8.0 GB+) / Windows Equivalent (for rendering and live capture)

# Version History 

I'm just putting this here to clear up the Twitter bio and ultimately if you're curious about Addlyn-AI.

Version 1.0.0 (2019-2021): Known as Jxea, this iteration dealt with open voice capture which was inspired by a project I did in my 3rd year high school PLTW electronics class. Like versions after it, there was a server (here, in the form of an Arduino) that served as the place of voice capture and posting to Twitter. 

Version 2.0.0 (2022-2023): This iteration moved away from open voice capture and into the first integration of an API. Using OpenAI's ChatGPT API, I created a source of 4 prompts it can draw from: some prompts included making 'news', quotes with who said it from what show, and getting sports data. Like how OpenAI explicitly stated that its cutoff was 2021 and can hallucinate information, Addlyn incorrectly pinned quotes or made up quotes to a series. The jokes generated were a hit or miss as well. At the same time, began to implement the ability to like and retweet, which was a success. This bot also was able to utilize Apple Shortcuts as its final ability; I wrote a script which was able to take what ever I was listening to and post it on to Twitter. 

Version 3.0.0 (2023- ): This upcoming iteration is inspired greatly by machine learning. It is also a transition away from the previous versions as it doesn't call on APIs or voice captures but rather a combination of live motion capture, sentiment analysis, and image classification. 







