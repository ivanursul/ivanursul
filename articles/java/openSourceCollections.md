---
title: "Open Source Collections in Java"
date: 2018-11-21 00:00:00
---

### <a href="#openSourceCollectionsInJava" name="openSourceCollectionsInJava"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Open Source Collections in Java

Welcome to the blog about *Collections* in Java. In this article, I am going to introduce a concept of *Appache Commons, Guava, Fastutil, Trove, and Goldman Sachs Collections libraries* and their Interfaces, Classes and Methods supported by examples. I hope you will enjoy the content and gain some new experience.

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
    <th>Interfaces</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>BidiMap<&#xfeff;K,V> <br /> BoundedCollection<&#xfeff;E> <br /> BoundedMap<&#xfeff;K,V> <br /> Closure<T> <br /> Equator<&#xfeff;T> <br /> Factory<&#xfeff;T> <br /> Get<&#xfeff;K,V> <br /> IterableGet<&#xfeff;K,V> <br /> IterableMap<&#xfeff;K,V> <br /> IterableSortedMap<&#xfeff;K,V> <br /> KeyValue<&#xfeff;K,V> <br /> ListValuedMap<&#xfeff;K,V> <br /> MapIterator<&#xfeff;K,V> <br /> MultiMap<&#xfeff;K,V> <br /> MultiSet<&#xfeff;E> <br /> MultiSet.Entry<&#xfeff;E> <br /> MultiValuedMap<&#xfeff;K,V> <br /> OrderedBidiMap<&#xfeff;K,V> <br /> OrderedIterator<&#xfeff;E> <br /> OrderedMap<&#xfeff;K,V> <br /> OrderedMapIterator<&#xfeff;K,V> <br /> Predicate<&#xfeff;T> <br /> Put<&#xfeff;K,V> <br /> ResettableIterator<&#xfeff;E> <br /> ResettableListIterator<&#xfeff;E> <br /> SetValuedMap<&#xfeff;K,V> <br /> SortedBag<&#xfeff;E> <br /> SortedBidiMap<&#xfeff;K,V> <br /> Transformer<&#xfeff;I,O> <br /> Trie<&#xfeff;K,V> <br /> Unmodifiable</td> </td>
    <td>Jackson</td> 
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>50</td>
  </tr>      
      
</table>






If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
