---
layout: "post"
title:  "Developing Ethereum based software using Java"
date: 2018-10-02 12:00:00
permalink: ethereum-using-java
published: false
---

One of our clients wanted to create a graphical dashboard for [Ethereum](https://en.wikipedia.org/wiki/Ethereum) cryptocurrency. This is the second biggest cryptocurrency in the world, at the time of writing this article it costs $301.26 per one ETH. The idea was to write a dashboard for showing all the information from the blockchain network. 

By that time I already had some knowledge of blockchain technology and I wanted to get some introduction project to get more experience for blockchain.

Note, this project has nothing to do with a blockchain itself, it can be treated as blockchain read-only project. The idea was to read the data from Ethereum using GetH API interface, which I will introduce to you a bit later.

I am not going to explain what is Ethereum, if you read it, you already have basic understanding of cryptocurrency and Ethereum.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> How we design it

Since we had to write a dashboard, we needed to have a web application. We decided to use Spring Boot as a backend application framework and Angular 4 with a bunch of hipster instruments for the frontend part. 

For a persistence storage, we tried MongoDB. It was a MVP and MongoDB gave a good performance with a single node. Additional point in choosing MongoDB was that customer wanted to get it ready in couple of weeks and we know MongoDB.


### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> GetH, an Ethereum API client

In order to access the data from Ethereum peer-to-peer network, you have to run some software. I used GetH, an Ethereum client, which connects to the network and reads all information from it. As far as I know, if you would like to mine Ethereum, you also have to use GetH, with a specific configuration(some mine=true option).

GetH loads all information from the network and saves it to your computer. Then,   you create a connection with GetH using your language specific client, like Web3J.

The first conclusion I made about GetH is that you will have to reserve a separate machines on production environment. By the time of writing this article Ethereum network has around 25GB of data. It takes couple of hours to download it. On production, you often use a specific techniques like Blue-Green deployment, in order to minimize the risks. Now, if you want to share machine for application and GetH, you will have to wait couple of hours until GetH will load all the information. That's why, it's reccomended to have a separate GetH machine.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> How to read data from Ethereum using Java

I decided to use Web3J. It's a library, which allows you to listen for the new blocks and new transactions. The good thing is that you can choose the specific block number from which you would like to start reading data. For example, you can start reading data from the first block in a network, or you can get the last imported block from your database and start reading data from it.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Saving data

I decided to use update-only approach, no inserts. Subscribing to Ethereum changes looks like a streaming approach. In any streaming application, you have to know how to behave if your newly deployed version has a critical bug in its streaming logic. In this case, you have to fix the bug and deploy a new version. But what should you do with those data, which was saved under buggy version? Correct, you should replay it. If you replay it, you will have to do update operations, because insert will place a second record into your storage.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Web3J failures

What if Web3J will fail? I must say, it's a not that rare case, people are claiming that Web3J fails with an exception and stops receing any new information? What to do then? In this case, you will have to think about reinitializing the client. Normally, it can be done in a loop, until the connection will finally happen.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> GetH failures

GetH is a process, with a running port. Sometimes, it can fail. Then, your application will stop processing the new data. In this case, I recommend installing some software for checking if the port is open. If it's not, then we can raise an inciddent, send an email. 

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> How to scale

During the demo time, our entire application was running with one Spring Boot application, one Angular application, GetH client and MongoDB, on a single machine with 4GB of RAM. 

However, scaling was the first thing I started to think about. Our MVP used only once instance for streaming data. What could happen if we added a second streaming instance? Correct, we would have a duplicate operations. Of course, we used update-only operations, but additional load is not good anyway. 

The solution for this problem was to keep only one instance for listening to the Ethereum and only then split the load. We could parallelize the operations using any kind of messaging systems, which can be scaled. Thus, the block and transactions operations are delived to messaging hub, which can then process those messaging with scaling in mind.

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Streaming into database

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Keeping fresh info in memory

### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> MongoDB graph lookups


### <a href="#" name=""><i class="fa fa-link anchor" aria-hidden="true"></i></a> Could it be better?


