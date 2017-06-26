---
layout: post
title:  "Microservices interaction at scale using Apache Kafka"
date:   2017-05-20 11:29:52 +0300
permalink: microservices-interaction-apache-kafka
---
### <a href="#intro" name="intro"></a> Intro

Why do people do microservices architecture?  Let's start with a review of a classical, old-school, n-tier application, which is often called a monolith:
![](assets/images/Screen-Shot-2017-05-25-at-12-55-37-PM.png)
Everyone worked with this types of applications, we were studying them in university, we did lot's of projects with this architecture and at first glance, it's a good architecture. We can immediately start doing systems on this architecture, they are perfectly simple and easy to implement.
But as such system becomes bigger, it starts receiving lots of different issues. 

The first issue is about scalability, it doesn't scale well. If some part of such system will need to scale, then the overall system should be scaled. Since the system is divided into modules, it runs as one physical process and there's no option to scale one module. This can lead to expensive large instances, which you will have to maintain.

The second issue is about engineers. Since it will become enormously big, you will have to hire a really big team for such system.

<a href="#evolutio" name="evolution"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Evolution