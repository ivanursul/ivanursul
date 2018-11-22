---
title: "Open Source Collections in Java"
date: 2018-11-21 00:00:00
---

### <a href="#openSourceCollectionsInJava" name="openSourceCollectionsInJava"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Open Source Collections in Java

Welcome to the blog about *Collections* in Java. In this article, I am going to introduce a concept of *Appache Commons, Guava, Fastutil, Trove, and Goldman Sachs Collections libraries* and their Packages, Interfaces, Classes and Methods supported by examples. I hope you will enjoy the content and gain some new experience.

The Collection in Java provides an architecture to manipulate with the group of objects. Collections provide:
* all the operations that are performed on a data, such as searching, sorting, insertion, and deletion
* interfaces such as <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a>, and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>
* classes such as <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">ArrayList<a/>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">LinkedList</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Vector</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Stack</a>,<a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">PriorityQueue</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">HashSet</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">LinkedHashSet</a>, and <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets"> TreeSet</a>

More about this will be explained below, distributed by different libraries.

### <a href="#appacheCommonsCollections" name="appacheCommonsCollections"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Appache Commons Collections

Appache Commons Collections provide the following features:
* *Bag* Interface with a number of copies of each object
* *BidiMap* Interface provide Bi-Directional maps that can be looked up both, from value to key, as like as key to value
* *MapIterator* Interface provide iteration over maps
* *Transforming decorators* alter each object when it is added to the collection
* *Composite collections* make multiple collections look like one (uniformly)
* *Ordered Maps* and *Sets* retain the order elements are added in
* *Reference map* allows keys and/or values to be garbage collected under close control

Supported Packages, Interfaces and Classes:
<table style="width:100%">
  <tr>
    <th>Packages</th>
    <th>Interfaces</th> 
    <th>Classes</th>
  </tr>
  <tr>
    <td>org.apache.commons.collections4</td>
    <td>Bag<E> <br /> BidiMap<K,V> <br /> BoundedCollection<E> <br /> BoundedMap<K,V> <br /> Closure<T> <br /> Equator<T> <br /> Factory<T> <br /> Get<K,V> <br /> IterableGet<K,V> <br /> IterableMap<K,V> <br /> IterableSortedMap<K,V> <br /> KeyValue<K,V> <br /> ListValuedMap<K,V> <br /> MapIterator<K,V> <br /> MultiMap<K,V> <br /> MultiSet<E> <br /> MultiSet.Entry<E> <br /> MultiValuedMap<K,V> <br /> OrderedBidiMap<K,V> <br /> OrderedIterator<E> <br /> OrderedMap<K,V> <br /> OrderedMapIterator<K,V> <br /> Predicate<T> <br /> Put<K,V> <br /> ResettableIterator<E> <br /> ResettableListIterator<E> <br /> SetValuedMap<K,V> <br /> SortedBag<E> <br /> SortedBidiMap<K,V> <br /> Transformer<I,O> <br /> Trie<K,V> <br /> Unmodifiable</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>






If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
