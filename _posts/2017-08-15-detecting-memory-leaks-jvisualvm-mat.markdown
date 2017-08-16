---
layout: "post"
title:  "Detecting memory leaks using JVisualVM and Eclipse Memory Tool"
date: 2018-08-15 10:33:00
permalink: memor-leak
---

Few days ago I had a problem on one of the projects that I am working on, we had a memory leak. During the two days period our services crashed three times, so I  decided to investigate it. Everything which I'm going to talk about is not a rocket science, there's no clever and tricky tips, it's just a straighforward explanation how you can find memory leaks.

### <a href="#expose_jmx" name="expose_jmx"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Exposing JMX

I had a problem on a production instance, so I started my services with JMX feature enabled. Just start your apps with following params:

```
    -Djavax.management.builder.initial= 
    -Dcom.sun.management.jmxremote 
    -Dcom.sun.management.jmxremote.port=${whatever_port} 
    -Dcom.sun.management.jmxremote.authenticate=false 
    -Dcom.sun.management.jmxremote.ssl=false
```

### <a href="#jvisualvm" name="jvisualvm"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Starting JVisualVM

Just enter your terminal and type `jvisualvm`.

You should get following screen:
![](assets/images/memory-leak/jvisualvm.png){: .center-image }

### <a href="#waiting" name="waiting"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Waiting

You have to wait some time before retained memory will take place and you will be able to analyse it. It's up to you how long to wait, in my case, it was enough to wait 4-5 hours to get 100% proof of what part of the system is leaking.