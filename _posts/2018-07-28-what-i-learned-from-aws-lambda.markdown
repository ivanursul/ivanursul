---
layout: "post"
title:  "What I learned from AWS Lambda"
date: 2018-03-15 00:00:00
permalink: what-i-learned-from-aws-lambda
tags: ['aws', 'lambda', 'serverless']
---
![](assets/images/lambda.png){: .center-image }

For the past 1 month, I had a chance to work with AWS Lambda. During the period of work with Lambda, I collected a lot of thoughts about this technology and would like to share them with you.

### <a href="#gettingstarted" name="gettingstarted"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Getting started

So if you don't know anything about AWS, I recommend starting with [official docs](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html): Amazon has a very rich documentation which will explain all the details about Lambda.

If you don't want to read the whole doc, then Lambda is a technology which allows you to deploy your code in a so-called Lambda functions - a containers somewhere inside AWS infrastructure. This gives a lot of benefits: you pay money only when you start invoking Lambda. The [pricing](https://aws.amazon.com/lambda/pricing/) for it is relatively low, as usual, AWS has a free tier which includes 1M free requests per month and 400,000 GB-seconds of compute time per month. The free tier description is a big confusing, I recommend using this table:

| Memory (MB) | Free tier seconds per month | Price per 100ms ($) |
|-------------|-----------------------------|---------------------|
|128  | 3,200,000 | 0.000000208|
|...  | ... | ... |
|512  | 800,000   | 0.000000834|
|...  | ... | ... |
|1024 | 400,000   | 0.000001667|
|...  | ... | ... |
|2048 | 200,000   | 0.000003334|
|...  | ... | ... |
|3008 | 136,170   | 0.000004897|

Basically, for each particular RAM configuration, you get different free seconds.

Apart from that, the average cost of invocation on a 2048GB RAM container will cost you **0.000003334$**. For 1M requests, it's around 3.5 dollars.

You can also use the [pricing calculator](https://s3.amazonaws.com/lambda-tools/pricing-calculator.html), hosted on amazonaws bucket.

### <a href="#coldstart" name="coldstart"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Cold starts

Ask yourself a question: if we don't have a physical server and all things are running somewhere inside AWS, then when does it starts? The answer hides in the title of this paragraph: Lambda has a cold start, a process when your container is actually starting up. The cold start runs together with the first invocation of the function, so whenever someone runs Lambda function for the first time - 100% that you will get the additional latency because of the start.

We know that cold start will happen during the first invocation, but we don't know exactly it will happen again. I found some [articles](https://hackernoon.com/im-afraid-you-re-thinking-about-aws-lambda-cold-starts-all-wrong-7d907f278a4f), where people researched this question and gave their assumption about how much time does AWS keeps your container, but this is just an assumption: nothing can stop AWS from changing their cold start policy in the future.

What I actually like is the way community solve this problem: there's a [plugin](https://serverless.com/blog/keep-your-lambdas-warm/) for Serverless framework, which allows your function to stay warm all the time: there's a CloudWatch scheduler, which pings Lambda constantly and doesn't allow it to get killed.
If you don't use Serverless, you can build the same inside AWS infrastructure, Serverless is just a wrapper.


### <a href="#samvsserverless" name="samvsserverless"><i class="fa fa-link anchor" aria-hidden="true"></i></a> AWS SAM or Serverless

There's a bunch of ways you can maintain your Lambda function:

* Manually using AWS Console
* Using [AWS SAM](https://github.com/awslabs/serverless-application-model)
* Using [Serverless](https://serverless.com) framework

The first option is a very easy option: you just need to enter the AWS Console, go to Lambda and deploy your function. However, as everything in the world is connected, the same goes with your Lambda function: it's very rare that you have just a single Lambda function, usually, you have a lot of AWS services and it's extremely important to have a single place for storing them. This is available in AWS SAM and Serverless.

SAM and Serverless are just wrappers around CloudFormation templates: they provide a convenient interface for defining your Lambda function.

I tried both AWS SAM and Serverless. I personally like Serverless, because it has better documentation, a bigger community, and a better brand. I know that AWS SAM was an internal AWS project, now it's open-sourced. Still, I think Serverless is a more mature project.

### <a href="#cheaperisnotbetter" name="cheaperisnotbetter"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Cheaper doesn't mean better

In Lambda, you pay for 100ms slices. So, if a particular Lambda function will take 125ms, then you pay for the 2 slices. In case you are using 128MB of RAM, you will pay 0.000000208$ * 2 and if you use 3008MB RAM container, you will pay 0.000004897$ * 2. You may think that if you choose the 128MB container, then you will pay less, but unfortunately, it doesn't work like that. What AWS is hiding from us is the fact that there is a direct relation between RAM and CPU: if you are reserving more memory, you get better CPU. Ran Ribenzaft explains it in his [article](https://medium.com/epsagon/how-to-make-lambda-faster-memory-performance-benchmark-be6ebc41f0fc): he wrote the Fibonacci function and compared the results from different memory reservations: 

> As we can see, there’s a high correlation between shorter durations and price differences for different memory sizes. Besides, we see that at some point (2048MB => 3008MB) the performance does not increase at the expected rate, while the price does.

### <a href="#language" name="language"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Language

AWS Lambda supports code written in Node.js (JavaScript), Python, Java (Java 8 compatible), and C# (.NET Core) and Go. 

Everyone has its own preferences in choosing the right language for his Lambda function. Before choosing the right language, you should first learn your traffic: who is going to invoke the lambda function? How often? Do you have hot periods? Do you have periods when nobody will invoke it?

I started with the same question and learned that my traffic is unpredictable: I was designing a new feature for inviting users to the system and learned from the legacy implementation that sometimes nobody invites new users. This means that most probably I will have cold starts.

Then I went to the internet to search about cold start/language relation. I found a couple of articles on [acloudguru](https://read.acloud.guru/does-coding-language-memory-or-package-size-affect-cold-starts-of-aws-lambda-a15e26d12c76):

> I’m pleasantly surprised by how little cold start the Python runtime experiences. OK, there were some outlier data points that heavily influenced some of the 99 percentile and standard deviations — but you can’t argue with a 0.41ms cold start time at the 95 percentile of a 128MB function.

Another interesting reply was on [quora](https://www.quora.com/What-language-is-better-suited-to-AWS-Lambda): 

> Actually, I'm surprised that nobody cared to whack a quick-n-dirty test for this. I made a quick test to run empty programs (as well as simple Lambda functions manipulating JSON and interacting with DynamoDB) in Java/Python/Node.js and time their execution (as well as resident memory use): berezovskyi/lambda-test. So no matter what you think arbitrarily, Python 2.7 seems to have the best start-up performance both in terms of RAM and CPU time.

> UPD 2016-03-07: I have now completed a test of real-world Lambda functions. While Java still has the worst cold start performance, under load it runs more than an order of magnitude faster that Node or Python (with JSON and DynamoDB work) and fits well in 128MB RAM.

I like to know that I won't have problems with cold starts, so I chose Python: it has everything that I need for a development, even though I came from Java world. 

### <a href="#serverlessisnotstateless" name="serverlessisnotstateless"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Serverless doesn't mean stateless

Finally, the last thing I'd like to say is that a term `Serverless` doesn't necessary mean stateless: even though you are running some sort of a function, you can still keep your things in the memory. Let me give you a short example: you need to send a message to Kafka inside your AWS Lambda function. Before sending the message, your first need to initialize Kafka producer and before initializing Kafka producer, you have to know where Kafka brokers are by sending a request to configuration service which stores this information. The code would like:

```
import json
import os
import urllib3
import base64
import datetime
import uuid

from src.model.thrift.emailmanager.ttypes import TNotificationEvent, TMessage, MessageMetadataName
from src.utils.thrift_utils import serialize_thrift
from log_cfg import logger
from kafka import KafkaProducer


def send_email_manager_event(event: TNotificationEvent):
    message = TMessage(
        ...
    )

    thrift_message = serialize_thrift(message)

    logger.info('Payload: ' + thrift_message.decode("utf-8"))
    broker_list = retrieve_broker_list()
    producer = KafkaProducer(
        bootstrap_servers=broker_list,
        batch_size=0
    )
    record = producer.send('emailManager.immediate-codeless-ess', thrift_message).get(timeout=10)

    logger.info('Received kafka metadata, offset: {}, partition: {}'.format(record.offset, record.partition))


def retrieve_broker_list():
    http = urllib3.PoolManager()
    r = http.request('GET', os.environ['CONFIGURATION_SERVICE_URL'], headers={'Content-Type': 'application/json'})
    response = json.loads(r.data)

    metadata_borker_list = response['kafkaPublisher.producer.metadataBrokerList']
    logger.info('kafka metadata broker list: {}'.format(metadata_borker_list))

    return metadata_borker_list
``` 

The most time extensive things are:

```
    broker_list = retrieve_broker_list()
    producer = KafkaProducer(
        bootstrap_servers=broker_list,
        batch_size=0
    )
```

It takes around 400-500ms for me to send the request using `retrieve_broker_list` function and couple of milliseconds for initializing Kafka producer.

I was curious if it possible to create some sort of global variables and changed my code to: 

```
import json
import os
import urllib3
import base64
import datetime
import uuid

from src.model.thrift.emailmanager.ttypes import TNotificationEvent, TMessage, MessageMetadataName
from src.utils.thrift_utils import serialize_thrift
from log_cfg import logger
from kafka import KafkaProducer


def retrieve_broker_list():
    http = urllib3.PoolManager()
    r = http.request('GET', os.environ['CONFIGURATION_SERVICE_URL'], headers={'Content-Type': 'application/json'})
    response = json.loads(r.data)

    metadata_borker_list = response['kafkaPublisher.producer.metadataBrokerList']
    logger.info('kafka metadata broker list: {}'.format(metadata_borker_list))

    return metadata_borker_list


broker_list = retrieve_broker_list()
producer = KafkaProducer(
    bootstrap_servers=broker_list,
    batch_size=0
)


def send_email_manager_event(event: TNotificationEvent):
    message = TMessage(
        ...
    )

    thrift_message = serialize_thrift(message)

    logger.info('Payload: ' + thrift_message.decode("utf-8"))

    record = producer.send('emailManager.immediate-codeless-ess', thrift_message).get(timeout=10)

    logger.info('Received kafka metadata, offset: {}, partition: {}'.format(record.offset, record.partition))
```

This dramatically reduced the latency of the invocation from 800ms on average to 20-50ms. The best result that I could achieve is around 11ms.

### <a href="#conclusion" name="conclusion"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Conclusion

AWS Lambda is a very powerful approach. It lets you reduce your costs and get a better isolation from the other parts of your system. However, it comes with many limitations, which you have to overcome, in your work. So be clever and think outside the box/container :)
