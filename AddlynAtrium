import openai,tweepy, random

class TwitterBot():

    api_key =""
    api_key_secret =""
    access_token=""
    access_token_secret=""

    
    #OpenAI
    openai.api_key = ""

    # Connecting to Twitter
    auth = tweepy.OAuthHandler(api_key, api_key_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth, wait_on_rate_limit=True)

    # Creating Tweets
    prompts = [
        {
            "hashtag": "#sarcasm",
            "text": "post jokes about the Los Angeles Chargers with the mannerisms of Jenna Ortega in Wednesday"
        },
        {
            "hashtag": "",
            "text": "tweet a lyric from any of Jennifer Lopez's songs"
        },
        {
            "hashtag": "#topthatCNN",
            "text": "tweet a sarcastic headline about the Los Angeles Chargers"
        },
        {
            "hashtag": "#perfectcrime",
            "text": "tweet a quote with who said it from any of the characters of the TV show Monk"
               }
    ]


    def __init__(self):
        error = 1
        while(error == 1):
            tweet = self.create_tweet()
            try:
                error = 0
                self.api.update_status(tweet)
            except:
                error = 1
    
    def create_tweet(self):
        chosen_prompt = random.choice(self.prompts)
        text = chosen_prompt["text"]
        hashtags = chosen_prompt["hashtag"]

        response = openai.Completion.create(
            engine="text-davinci-001",
            prompt=text,
            max_tokens=64,
        )

        tweet = response.choices[0].text
        tweet = tweet + " " + hashtags
        return tweet


twitter = TwitterBot()
twitter.create_tweet()





