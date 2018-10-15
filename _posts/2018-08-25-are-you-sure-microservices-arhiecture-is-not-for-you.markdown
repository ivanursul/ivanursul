---
layout: "post"
title:  "Are you sure microservices architecture is for you?"
date: 2018-03-15 00:00:00
permalink: are-you-sure-microservice-architecture-is-for-you
tags: ['microservices']
---

![](https://media.giphy.com/media/xUPGcoQgzgXZp263i8/giphy.gif?style=centerme)

Today is the starting of the fourth year since I began my journey with microservices. I started with a theoretical knowledge about this architecture and now I ended up with a more deep and practical experience. While I still believe I can find news problems in microservices, I prepared an article with a list of problems which I had a chance to face in my work.

You will read short stories which I faced during my work. If you don't agree with them and think that they could be fixed and identified earlier - that's okay, I believe that you can't find a microservices structure with identical problems - every organization has its own path and its own problems, thus, things that failed in one microservices architecture, could be omitted in another.

### <a href="#isolatedmessaginglayer" name="isolatedmessaginglayer"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Isolated messaging layer

![](https://media.giphy.com/media/3o6ZsZpBZwqiohX30Y/giphy.gif?style=centerme)

This story is about the messaging layer. You know the story, every cool microservices architecture has to have its own [messaging layer](https://microservices.io/patterns/communication-style/messaging.html): the idea is that you have an asynchronous way of communication between your services. I spent some time explaining this in [Microservices interaction at scale using Apache Kafka
](https://ivanursul.com/microservices-interaction-apache-kafka) article.

So, the perfect scenario assumes that you have a bunch of microservices and some messaging system(Kafka?). All those tiny small(or big) microservices are using the messaging system to produce and consume messages from different services. For instance, if you have a shopping cart and you have a service which handles requests from it, once you get a new purchase, this service will send an event to a topic like `order.purshased`. Then you have a bunch of other folks like fraudDetectionService, userService, emailService and others that would like to know that the order is created and update their databases accordingly. So they listen to `order.purchased` and do the update there. That's the perfect world. 

You may get yourself with a question about how to organize the messaging system. You may think that it's a third party system and not all of your software engineers will know how to use it. Thus, you may decide to isolate it and provide a proprietary API for using it. One of the ways of doing that is to write a special service (communication service) which knows how to use a messaging system that you chose, so every service who wants to get async communication, have to define a mapping for topic-to-endpoint communication: instead of listening to the topic, each service creates an endpoint. Who listens to the topic? Correct, communication service does that. Finally, you end up with one giant communication service which listens to all topics and sends requests to all services. 

The positive things about that are that you encapsulate the messaging system so your developers have to work with proprietary API written inside your company. You have to provide a good documentation for it and if you do that - developers can read it and use it.

The bad things about this approach are that you have a single point of failure: since all communication is done through a single service, in case something goes wrong, your system will just stop. The organization which has this approach implemented has regular issues with OOM of this services since it's hard to predict the load. 

### <a href="#hystrixresilience" name="hystrixresilience"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Hystrix and resilience

![](https://media.giphy.com/media/xT5LMCyeSkYU87jfZC/giphy.gif?style=centerme)

Next story is about resilient systems. We all know [Hystrix](https://github.com/Netflix/Hystrix) - a world-famous circuit breaker, which allows opening a circuit once something goes out of control. For example, if you are sending requests to another service and it starts sending a lot of 5xx - Hystrix will open a circuit for you will automatically throw Hystrix related exceptions without sending requests to the broken service. Hystrix will wait for some before trying to start sending requests again and if it fails for the second time - the story will repeat.

The second story is about choosing the wrong library for your needs. Hystrix is a great tool with its fallback mechanism, it does a great work, but unfortunately, it won't work properly when you use it to send requests to another service. The thing is that if you are sending requests to service which has 4 instances under its load balancer and one service goes down - you will get 25% of failed requests, Hystrix will open a circuit and your service will go down as well. For things like HTTP requests you have to choose a more intelligent way of sending requests with tools like [Ribbon](https://github.com/Netflix/ribbon). It has a better way of choosing the right IP addresses for sending the request, so Ribbon can remove some instance from the list if he sees that it doesn't work.

I would say, it's a very controversial mistake because if a service goes down - usually all instances are affected. Usually, one instance can fail because of some Out Of Memory and if he does that - this means other instances will start failing with the same problem soon. So this problem is hardly reproducible.

### <a href="#incorrectmetricdata" name="incorrectmetricdata"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Incorrect metrics data

![](https://media.giphy.com/media/o6cgfqc9U60bC/giphy.gif?style=centerme)

When you have dozens or hundreds of services, you hardly rely on metrics - an information about a number of requests coming(rate) and their duration(latency). You have lots of different services which listen to some changes and update their databases accordingly. So you measure all these operations and eventually start believing that the information there is 100% correct. Unfortunately, it's not always true. 
Metrics are often calculated incorrectly, by using inaccurate systems like Graphite and when you don't know this - you can get into lots of false alarms if you decide to use them to trigger incident alerts.

### <a href="#designyourterentioncorrectly" name="designyourterentioncorrectly"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Design your retention policy correctly

![](https://media.giphy.com/media/ToMjGpBmDyMmBrMmbf2/giphy.gif?style=centerme)

This is about retention policy issue. You may have heard about different practices of changing service owners: one team writes some service, then another team takes over it, then service moves to another team. There may be other variations like team writes the service and then management decides to move this service to another team, for some reasons. Why I am writing all this is because sometimes, service can be designed incorrectly. For instance, service is written for storing some information which grows exponentially, then it goes to another team, which decides to ignore the problem and finally, it goes to your team. By that time database become bigger and if you are happy enough to get the service which has some cloud database and cloud provider is just autoscaling it and sending monthly bills - bingo, you get the problem. Luckily, it started spending 10x from its starting price and you just don't know what to do. You start planning how to shrink the database and remove unused data and your consumers start to complain that they need the data. Now you have to do a big analysis and understand which data is important and which is not.

This problem can occur in situations when you often want to create and your users address book - a list of connections which each user hold. This address book can be constructed from almost all your business entities. Let's say, you have an online store like eBay and you're selling you some products to the customers. When a client enters vendors page, you want to know if he is in his address book, if he messaged him and if consumer favorited his page. So you start listening to all these changes like purchases, messages, favorite actions and put in some database. After some time, the database will grow and you will get into troubles.

The moral of the story - don't do the services like address book and if you really need them - always think how much your data will look like in the future.

### <a href="#propriatorysoftware" name="propriatorysoftware"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Propriatory software for your infrastructure

![](https://media.giphy.com/media/l3vQYe7l1TInypnYA/giphy.gif?style=centerme)

If you have a lot of services in your organization, you have to think about how to deploy them. You may decide to write a special set of backend services for service deployment. This gives a lot of benefits:

* You can define an ACL to control who can deploy what. 
* You don't need to give wide permission for your devs, all they need to have is an access to deployment UI.
* You can create a fancy UI and group services by teams, sometimes cloud UI's are very nasty.
* You can create a custom feature like deployment moratoriums in case teams are doing a lot of incidents on prod.

Actually, you may implement everything. You only need to think about people which will maintain this service. If you don't have a lot of hands to support it - you may get into trouble. The thing is that the world is developing very rapidly, a new software is being created, new technologies are being invented. You can start doing a proprietary software for deployment EC2 instances and by the time you finish it - the world will be already using Kubernetes. You will start thinking about how to integrate Kubernetes and by the time you finish doing that - a new software will be released and the story will be repeated.

My personal opinion is that proprietary software can be a good thing if you a big team which will support it and it will become a bloody hell if you have a bunch of part-time hands for this software from the other teams. Decide for yourself if you need it, but it will definitely eat your organization money.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Cloud issues

![](https://media.giphy.com/media/iehlneGSs7q5q/giphy.gif?style=centerme)

The story is rather about lots of servers located in the cloud. The new age of informational technology brought a very easy way of renting servers in the cloud: you just need to run some command and boom, your server is ready, another few minutes and your server has a running microservice with a couple of agents gathering logs, information about the service, metrics, statuses, etc. It's a new world with lots of tiny robots which do all the work for you. And you have to be super patient to configure them properly: when you tend to automate the process, you have to take into account everything which is super hard.

What I learned from this is that sooner or later, but everything fails. And if you have dozens of small servers, then your system will fail more often. 

### <a href="#codeowner" name="codeowner"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Code owners

![](https://media.giphy.com/media/B37cYPCruqwwg/giphy.gif?style=centerme)

Usually, when you are modernizing your system to microservices architecture, you keep having a legacy codebase for a few more years before you modernize all your parts. The funny thing is that legacy code can be divided between different teams, so you will have one large legacy repository and a lot of owners for a specific endpoints/pages. This is extremely hard to manage especially when you want someone to migrate to the new version of your API: you have to find all those code owners and ask them to do that.

After 3 years legacy repository eventually transformed into a repo one with lots of abandoned parts of the code, lots of deprecated functions, endpoints, etc. Sometimes people just forget about some functionality, then they leave the company and then code becomes abandoned.


### <a href="#dataiseverything" name="dataiseverything"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Data is everything

![](https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif?style=centerme)

Over the years working on microservices I saw a lot of databases. Today we have a lot of ways for transforming data from one data source into another and believe me, most of them will be in your organization: ETL systems, Streaming, Batch processing, all these pipes will live inside microservices architecture.

You can have a lot of modern tools in your arsenal but if your data sucks - your system will suck in general. That's why eventually your organization will create an architectural review for such cases: you will have to defend your architecture and explain why you need this specific database and why your data flow will go like that. Otherwise, you will fail in a long term.

Another thing about databases are that in general, you will have to forget about transactional support: there's no longer a single system and there's no longer a single database which supports transactions. In microservices, your data will first go to one database, a message will be sent and the other databases will have to update their state. And the way to send events is very crucial on how your data can guarantee delivery semantic: if you update your database and right after sending a request to an event bus, there a small chance the second operation will fail. That's why a lot of different techniques like Change Data Capture are invented and are good tools for guaranteeing better delivery semantic. 

### <a href="#bigjourney" name="bigjourney"><i class="fa fa-link anchor" aria-hidden="true"></i></a> A big journey

![](https://media.giphy.com/media/Ah2Y4u73eNMZE3PGej/giphy.gif?style=centerme)

The one and the only lesson that you can get from using microservices is that this type of architecture is not a magic pill, it won't solve all your problems and even more, you will have to work very hard to set up your infrastructure properly because a lot of moving parts brings more problems. Be aware that you have to get really good reasons to do this journey which will last for at least a few years.

But after all, if you suceed in this tranformation, your system will become more mature, will be capable of handling more load, more data. 
