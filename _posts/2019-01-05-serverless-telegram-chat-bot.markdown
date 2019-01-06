---
layout: "post"
title:  "Experimenting further, writing a Serverless Telegram Chat Bot"
date: 2019-01-05 00:00:00
permalink: serverless-telegram-chat-bit
tags: ['java', 'chat-bots']
---

In my [last article](https://ivanursul.com/how-we-wrote-telegram-chat-bots) I wrote about how I wrote Telegram Chat for tracking co-working spends. I wrote a chat bot using Java, hosted it on my Raspberry PI 3. Yes, it's serving its needs, we fully rely on it. However, since this chat bot was written as an experiment, I wanted to proceed with research and investigate how real chat bots are written. 

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Why Raspberry PI 3 is not the the best place for hosting a Chat Bot

Since Telegram Chat Bot can use Long-Polling model, we don't care about a dedicated IP address or DNS record, the only thing we need is internet. So yes, Raspberry PI device is a computer, we can run our program there, so hosting a Telegram Chat with Long-Polling model is an option. However, what if we are writing a Chat Bot with hudreds or thousands of requests/second? Obviously, Long-Polling model could become a bottleneck since it allows to run a single application in a single Raspberry PI which means we can't spread the load across multiple devices, which means you can't scale the whole construction horizontally, only vertically, by adding more CPU/RAM power.

Long story short, if we want to have a scalable Chat Bot in Telegram, we have to   get rid of long-polling model.


### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Understanding Web Hooks

If we refuse long-polling, then what should be use instead? According to Telegram documentation, there's a [setWebhook](https://core.telegram.org/bots/api#setwebhook) API, which allows you to receive requests to a given URL:

```
Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.

If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. https://www.example.com/<token>. Since nobody else knows your bot‘s token, you can be pretty sure it’s us.
```

You have to instruct Telegram to send a request to a specified URL every time someone interacts with your bot. In order to do that, you have to send a POST request with a following signature:

```
curl --request POST --url https://api.telegram.org/bot${bot_token}/setWebhook --header 'content-type: application/json' --data '{"url": "https://yourdomain.com/api"}'
```

After you do that, you will now start receiving POST requests to https://yourdomain.com/api with a JSON-serialized [Update](https://core.telegram.org/bots/api#update) object:

```
{
    "update_id":642342347,
    "message":{
        "message_id":23,
        "from":{
            "id":10000xxxx,
            "is_bot":false,
            "first_name":"Ivan",
            "username":"iursul",
            "language_code":"en-US"
        },
        "chat":{
            "id":10000xxxx,
            "first_name":"Ivan",
            "username":"iursul",
            "type":"private"
        },
        "date":1609641174,
        "text":"Hello World!"
    }
}
```

Good, so practically speaking, instead of long-polling, we can redirect all incoming user messages to some API, hosted on the internet. Now, we can write a fully-managed backend and scale it horizontally, have a load balancer, add enough instances and live without problems.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Do we really need a backend for a Chat Bot?

I wanted to move my Chat Bot to use WebHooks and scale it, if needed, so I started thinking about a possible options. Currently we don't use the Chat bot heavily, we have up to 30 spend units per month, which is nothing.

One of the simplest options for me was to write an API and instruct Chat Bot to use it. I could host it on AWS or DigitalOcean, or on any other CloudProvider. I didn't like this approach since I would have to spend 10-20 for running cloud instance.

Another option was to use Serverless approach, write a Lambda function and host it in AWS. Keeping in mind that AWS has a free tier, which includes 1 million requests per month, and 400,000 GB-seconds of compute time on a monthly basis, I decided to stick to it. 

PS - Check out my article about about [things I learned from using AWS Lambda](https://ivanursul.com/what-i-learned-from-aws-lambda), which includes section about free tier and pricing.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> What AWS services do I need? 

Before writing Lambda function, we need to figure out what AWS components do we need for our Chat Bot. 

First of all, we need [AWS Lambda](https://aws.amazon.com/lambda/). I think I will chose Python as a programming language.

Secondly, we want a dedicated address to instruct Telegram to send , so we need an [API Gateway](https://aws.amazon.com/api-gateway/). Gateway will receive request from Telegram and invoke Lambda to process the message. Lambda will send a request to Telegram in order to send a response to a user.

Finally, we want a database for storing our users, spends and relationships. I decided to stick to AWS DynamoDB since you can specify read and write capacity and pay for it. Since I don't have a lot of traffic I can specify set read and write concurrency level to 1 and pay 0.8 dollars per month.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Serverless framework

Serverless is a default option for AWS Lambda, so I sticked to it. I will be using Python as a programming language.

Before we start, you need to make sure you have: 

* Installed Python3
* Installed Node.js v6.5.0 or later
* AWS account with admin rights
* You configured credentials 

### Step 1: Create your bot

The process of creatin a Chat bot is super easy:

* Go to @BotFather
* Type **/newbot**
* You will receive a message: 
```
Alright, a new bot. How are we going to call it? Please choose a name for your bot.
```
Specify a name for you bot, I picked **iursul-test-bot**
* Now specify a username:
```
Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.
```
I picked **iursultestbot**

After you finish the process, you will get a message:

```
Done! Congratulations on your new bot. You will find it at t.me/iursultestbot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
610644356:AAGZZCEVxKLLoR113tQzotVVNH9oYV9c32E

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

### Step 2: Install Serverless

The fist thing you need to do is install the **serverless** framework:

```
npm install -g serverless
```

### Step 3: Create a project

Once you install it, go to your projects folder and execute:

```
serverless create --template aws-python3 --path iursultestbot
```

It will create a following structure: 

```
.
├── handler.py
└── serverless.yml
```


**serverless.yml** contains following structure:

```
service: iursultestbot

provider:
  name: aws
  runtime: python3.6

functions:
  hello:
    handler: handler.hello
```

Default **handler.py** file has following code:

```

import json


def hello(event, context):
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
```

### Step 4: Add API Gateway

The next thing you need to do is to expose your API to the external world, so everyone can call your bot. In order to do that, modify **serverless.yml** and add API Gateway integration:

```
service: iursultestbot

provider:
  name: aws
  runtime: python3.6

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: webhook
          method: post
          cors: true
```

What was changed? We added **http** event:

```
...
    events:
      - http:
          path: webhook
          method: post
          cors: true
```

### Step 5: Setup AWS Credentials

Before you deploy your Lambda project on AWS, you need to have credentials configured on your local machine.

You need to following this 5 steps:

* Log in to your AWS Account, at the right corner, click on your name and go to **My Security Credentials**
* Go to **Users** section and create a user
* Specify username and choose **Programmatic access**
* On **Permissions** page, choose **Attach existing policies directly** and choose **AdministratorAccess**. You can play around with IAM and choose more gradual permissions, I chose **AdministratorAccess** for demo purposes.
* After you review and create a user, you will be redirected to a page where you can download CSV credentials. You will get access key and secret access key.

Make sure you have [awscli installed](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) and execute:

```
$ aws configure
AWS Access Key ID [None]: ${yourKeyID}
AWS Secret Access Key [None]: ${yourSecreteAccessKey}
...
```

Congratulations, you configured AWS on your local machine

### Step 6: Deploy your project

The next thing you need to do is to deploy your project on AWS, run

```
serverless deploy
```

If everything works well, you will receive a similar message:

```
$ serverless deploy                                                                                                              
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (3.34 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: iursultestbot
stage: dev
region: us-east-1
stack: iursultestbot-dev
api keys:
  None
endpoints:
  POST - https://m93x0b2arg.execute-api.us-east-1.amazonaws.com/dev/webhook
functions:
  hello: iursultestbot-dev-hello
```

### Step 7: Organize a proper response for Telegram

At this step, Lambda and API Gateway are ready, the only thing which is left is response format, we need to  send the right response.

Modify your **serverless.yml**:

```
service: iursultestbot

provider:
  name: aws
  runtime: python3.6
  environment:
    TELEGRAM_TOKEN: 610644356:AAGZZCEVxKLLoR113tQzotVVNH9oYV9c32E

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: webhook
          method: post
          cors: true
```

Create a file called **requirements.txt** and add following line:

```
requests
```

Create a file called **setup.cfg** and add a following line:

```
[install]
prefix=
```

I am not sure if **setup.cfg** is required for everyone, at least it helped me when I was getting the [following message](https://stackoverflow.com/questions/24257803/distutilsoptionerror-must-supply-either-home-or-prefix-exec-prefix-not-both)

Execute:

```
$ pip3 install -r requirements.txt -t vendored                                                                                   

Collecting requests (from -r requirements.txt (line 1))
  Using cached https://files.pythonhosted.org/packages/7d/e3/20f3d364d6c8e5d2353c72a67778eb189176f08e873c9900e10c0287b84b/requests-2.21.0-py2.py3-none-any.whl
Collecting chardet<3.1.0,>=3.0.2 (from requests->-r requirements.txt (line 1))
  Using cached https://files.pythonhosted.org/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl
Collecting urllib3<1.25,>=1.21.1 (from requests->-r requirements.txt (line 1))
  Using cached https://files.pythonhosted.org/packages/62/00/ee1d7de624db8ba7090d1226aebefab96a2c71cd5cfa7629d6ad3f61b79e/urllib3-1.24.1-py2.py3-none-any.whl
Collecting idna<2.9,>=2.5 (from requests->-r requirements.txt (line 1))
  Using cached https://files.pythonhosted.org/packages/14/2c/cd551d81dbe15200be1cf41cd03869a46fe7226e7450af7a6545bfc474c9/idna-2.8-py2.py3-none-any.whl
Collecting certifi>=2017.4.17 (from requests->-r requirements.txt (line 1))
  Using cached https://files.pythonhosted.org/packages/9f/e0/accfc1b56b57e9750eba272e24c4dddeac86852c2bebd1236674d7887e8a/certifi-2018.11.29-py2.py3-none-any.whl
Installing collected packages: chardet, urllib3, idna, certifi, requests
Successfully installed certifi-2018.11.29 chardet-3.0.4 idna-2.8 requests-2.21.0 urllib3-1.24.1
```

Modify your **handler.py**:

```
import json
import os
import sys

here = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.join(here, "./vendored"))

import requests


TOKEN = os.environ['TELEGRAM_TOKEN']


def hello(event, context):
    try:
        data = json.loads(event["body"])
        message = str(data["message"]["text"])
        chat_id = data["message"]["chat"]["id"]

        data = {
            "text": "Echo: {}".format(message).encode("utf8"),
            "chat_id": chat_id
        }

        requests.post(
            "https://api.telegram.org/bot{}/sendMessage".format(TOKEN),
            data
        )

    except Exception as e:
        print(e)

    return {"statusCode": 200}
```


Finally, execute:

```
serverless deploy
```

### Step 8: Configure webhook

The last thing you need to do is configure a web hook:

```
$ curl --request POST --url https://api.telegram.org/bot610644356:AAGZZCEVxKLLoR113tQzotVVNH9oYV9c32E/setWebhook --header 'content-type: application/json' --data '{"url": "https://m93x0b2arg.execute-api.us-east-1.amazonaws.com/dev/webhook"}'

{"ok":true,"result":true,"description":"Webhook was set"}
```

### Step 9: Test

Now just go to your chat bot and send any message:

![](assets/images/telegram-bots/telegram-chat-bot-test.png){: .center-image }

