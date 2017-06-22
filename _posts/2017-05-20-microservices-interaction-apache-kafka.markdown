---
layout: post
title:  "Microservices interaction at scale using Apache Kafka"
date:   2017-05-20 11:29:52 +0300
permalink: microservices-interaction-apache-kafka
---
### Intro

Why do people do microservices architecture? Let's start with a review of a classical, old-school, n-tier application, which is often called a monolith:

![My helpful screenshot]({{ site.url }}{{ site.baseurl }}/assets/images/Screen-Shot-2017-05-25-at-12-55-37-PM.png)

Everyone worked with this types of applications, we were studying them in university, we did lot's of projects with this architecture and at first glance, it's a good architecture. We can immediately start doing systems on this architecture, they are perfectly simple and easy to implement.
But as such system becomes bigger, it starts receiving lots of different issues.

The first issue is about scalability, it doesn't scale well. If some part of such system will need to scale, then the overall system should be scaled. Since the system is divided into modules, it runs as one physical process and there's no option to scale one module. This can lead to expensive large instances, which you will have to maintain.

The second issue is about engineers. Since it will become enormously big, you will have to hire a really big team for such system.

### Evolution

How can you address this issues? One of the ways you can evolve is to make a transition to a microservices architecture

![My helpful screenshot]({{ site.url }}{{ site.baseurl }}/assets/images/Screen-Shot-2017-05-25-at-1-50-35-PM.png)

The way it works is that you have a bunch of services with separate independent deployment pipelines, separate teams, and separate codebase. This services can be better written, supported and scaled. In theory.