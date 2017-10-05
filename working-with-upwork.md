---
title:  "Working in Upwork"
date: 2018-10-05 12:00:00
---

Starting from 2015, I worked with Upwork company. I was involved in the modernization of Upwork. 
The plan was to migrate from a monolith platform to microservices.
Since I signed an NDA, I will write only some key information about my work.

### <a href="#architecture" name="architecture"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Architecture

Upwork has a microservices architecture, so most of the time I worked with a lot of different services.

However, during migration phase, I had to work with old legacy services. They were written using Perl language.

Common microservice was written using Java, we had a special framework, built around Dropwizard framework.

### <a href="#netflix" name="netflix"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Netflix OSS

There was a lot of Netflix tools: Eureka, Hystrix, Prana, Archaius.

### <a href="#monitoring" name="monitoring"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Monitoring

We used Codahale metrics for monitoring our infrastructure. These metrics were sent to Prometheus and there was a special service, which checks them and fires alerts in case of troubles.

### <a href="#databases" name="databases"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Databases

Mainly, I worked with DynamoDB and PostgreSQL. Anyway, I had a chance to work with both relational and NoSQL storages.

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

Upwork has a self-written tool for deploying applications on different environments. This tool is integrated with Jenkins, which we trigger on pull request merge to build, test and deploy our applications on dev and staging.

### <a href="#process" name="process"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Working process

We used agile methodology together with JIRA tool. We have two-week sprints and usually, we had around 40 story points per sprint. The team had 5 members.

There was no physical office, all members were from the different countries: Ukraine, Moldova, Israel, Czech Republic and the USA.
