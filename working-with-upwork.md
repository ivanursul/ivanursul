---
title:  "Working in Upwork"
date: 2018-10-05 12:00:00
---

Starting from 2015, I worked with Upwork company. I was involved in modernization of Upwork. The plan was to migrate from a monolith platform to microservices.

### <a href="#architecture" name="architecture"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Architecture

Upwork has a microservices architecture, so most of the time I worked with a lot of different services.

However, during migration phase I had to work with an old legacy services. They were written using Perl language.

### <a href="#databases" name="databases"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Databases

Mainly, I worked with DynamoDB and PostgreSQL. 

### <a href="#aws" name="aws"><i class="fa fa-link anchor" aria-hidden="true"></i></a> AWS services

We used a lot of different Amazon services:

* EC2
* DynamoDB, Dynamo Streams, RDS
* Kinesis
* S3
* Aurora
* Lambda

### <a href="#kafka" name="kafka"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Apache Kafka

Kafka was used as a messaging system, to transport messages between microservices.

### <a href="#deployment" name="deployment"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Deployment

Upwork has a self-written tool for deploying applications on different environemnts. This tool is integrated with Jenkins, which we trigger on pull request merge to build, test and deploy our applications on dev and staging.

### <a href="#deployment" name="deployment"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Deployment