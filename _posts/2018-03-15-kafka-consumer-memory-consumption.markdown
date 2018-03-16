---
layout: "post"
title:  "Kafka Consumer memory usage"
date: 2018-03-15 00:00:00
permalink: kafka-consumer-memory-usage
tags: ['kafka']
---

I'm working with Kafka for more than 2 years and I wasn't sure if Kafka Consumer eats more RAM memory when it has more partitions. I couldn't find any useful information on the internet, so I decided to measure everything by myself.

### <a href="#input" name="input"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Inputs

I started with **1** broker, since I am interested in actual memory consumption for 1 and 1000 partition topics. I know, lauching Kafka in a cluster can differs, because we have replication processes, acknowledgments, and other cluster things, but let's skip it for now.

Two basic commands for launching Kafka single node cluster:

```
bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties
```

I created two topics, **topic1**, with **1** partition, and **topic2**, with **1000** partitions. I believe, the difference between partitions is enough for understanding memory consumption.

```
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic topic1
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1000 --topic topic2
```

It's good that Kafka provides us with `kafka-producer-perf-test.sh`, a performance script, which let us load test Kafka.

```
bin/kafka-producer-perf-test.sh --topic topic1 --num-records 99999999999999 --throughput 1 --producer-props bootstrap.servers=localhost:9092 key.serializer=org.apache.kafka.common.serialization.StringSerializer value.serializer=org.apache.kafka.common.serialization.StringSerializer --record-size 100
```

So, I consequently launched load tests to insert data into two topics with a throughput of 1, 200, 500 and 1000 messages/second. I collected all the information using `htop` by filtering with `consumer` prefix:

![](assets/images/kafka-consumer/htop-kafka-consumer.jpg){: .center-image }

### <a href="#results" name="results"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Results

I was suprised, but the memory consumption remained the same for 1,200,500 and 1000 events/second. **topic1**, which had 1 partition, consumed around 290 MB, while **topic2** with **1000** partitions consumed around 310 MB. 

Would you like to know how the things are in a cluster? How do you think it will behave? Type in the comments.