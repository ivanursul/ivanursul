---
layout: "post"
title:  "Comparing monitoring systems"
date: 2018-03-15 00:00:00
permalink: comparing-monitoring-systems
tags: ['monitoring']
published: false
---

You know, that engineers write a lot of code everyday. They deploy their apps on test servers, test them(hopefully) and finally it goes to production. As the amount of released grows over time, it becomes extremely hard to control it: you never know when what part of your application can fail. It makes things even more complex that you never know why it fails. In todays world, having in your arsenal an instrument for detecting critical issues helps you to organize your work more properly, without spending a lot of time on trying to understand what's going on in your service.

Yes, we are talking about monitoring. In this article, I am going to cover most of the monitoring systems I had a chance to work with. I want to show, that different monitoring systems can show different results. I am going to write about Graphite, Prometheus, Atlas and InfluxDB. I am not an expert in them, but I can judge about the usefullnes and give my own opinion about them.

Note, that we will use Grafana for showing metric data from Graphite, Prometheus, Atlas and InfluxDB, I like Grafana, it has fancy graphs, stats, alerts and we don't need something else for this.

### <a href="#graphite" name="graphite"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Graphite

Frankly speaking, when we talk about Grafana, we mean two things: **Graphite** as a visual representation and **Carbon**, as a daemon for storing and collecting metrics.

Here's the general architecture:
![](assets/images/monitoring/graphite-architecture.png){: .center-image }

It's pretty straighforward, and I would like to concentrate on one specific part: carbon-aggregator. It runs in front of a cache to buffer metrics over time before reporting them into Whisper. This is important, because, when you can 5 instances of some service, and you would like to get the overall rate of requests, you have to collect this info from all instances. You can do this from graphite using `sumSeries(*..[instance1-instance5].requests.m1_rate)`, which is quite expensive operation, or you can pre-collect them in some place and then push to the database. This place is called `carbon-aggregator`: it collects data from all such instances and then push it to the database.

If you wish to use Graphite, you have to setup a database. By default, it comes with SQLite. SQLite is an embedded database and you [shouldn't](http://obfuscurity.com/2013/12/Why-You-Shouldnt-use-SQLite-with-Graphite) use it in your production environment. If you want, you can choose PostgreSQL, MySQL or Oracle. 

In company where I work, we have three metric storages: Graphite, Atlas and Prometheus. And you know, I often can say that Atlas and Prometheus data is very similar, but when I try to compare their results with Graphite results, I can't find the similarity. Graphite data is completely inaccurate


retention periods
aggregators
