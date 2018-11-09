---
title:  "Maps in Java"
date: 2018-11-09 00:00:00
---

### <a href="#map-implementation" name="map-implementation"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Map Implementation

**Welcome** to the blog about *Map* Interface. There will be words about what *Map* represents, as well as its implementations such as *HashMap, TreeMap, LinkedHashMap, EnumMap, WeakHashMap, IdentityHashMap and ConcurrentHashMap*. I hope you enjoy content and gain some new experience.

A *Map* is an Interface that contains set key-value and it has form like this ```Map <K, V>```, where K represents key and V stands for value. Keys map values and they are unique, which means that two same keys are not allowed. Also, a keys are objects that are used to retrieve values.

Some usual methods are listed below, for further information feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>:
* V	put(K key, V value) - *Associates the specified value with the specified key in this map*
* V	remove(Object key) - *Removes the mapping for a key from this map if it is present*
* Collection<V>	values() - *Returns a Collection view of the values contained in this map*
* void	clear() - *Removes all of the mappings from this map** 

There are three groups of *Map* implementations:
* General-purpose *(HashMap, TreeMap and LinkedHashMap),
* Special-purpose *(EnumMap, WeakHashMap and IdentityHashMap),
* Concurrent implementations *(ConcurrentHashMap)*.

### <a href="#hashMap" name="hashMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> HashMap

*HashMap* is implementation of Map based on HashTable. The advantage is that the execution time remains constant even for large sets. In other words *HashMap* is used if the speed is important to you and iteration order is not your primary focus.





If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
