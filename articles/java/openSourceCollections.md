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

Below, you can find some Interfaces supported by Appache Commons Collections, for more feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>:
<table style="width:100%">
  <tr>
    <th>Interfaces</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>Collection that counts the number of times an object appears in the collection</td>
  </tr>
  <tr>
    <td>SortedBag<&#xfeff;E></td>
    <td>Type of Bag that maintains a sorted order among its unique representative members</td>
  </tr>
  <tr>
    <td>BidiMap<&#xfeff;K,V></td>
    <td>Map that allows Bi-Directional lookup between key and values</td> 
  </tr>
  <tr>
    <td>OrderedBidiMap<&#xfeff;K,V></td>
    <td>Map that allows Bi-Directional lookup between key and values and retains and provides access to an ordering</td>
  </tr>  
  <tr>
    <td>SortedBidiMap<&#xfeff;K,V></td>
    <td>Map that allows bidirectional lookup between key and values and retains both keys and values in sorted order</td>
  </tr>
  <tr>
    <td>Equator<&#xfeff;T></td>
    <td>A function which determines equality between objects of type T</td>
  </tr>
  <tr>
    <td>Get<&#xfeff;K,V></td>
    <td>The "read" subset of the Map interface</td>
  </tr>
  <tr>
    <td>IterableGet<&#xfeff;K,V></td>
    <td>The "read" subset of the Map interface</td>
  </tr>
  <tr>
    <td>IterableMap<&#xfeff;K,V></td>
    <td>Map that can be iterated directly without creating an entry set</td>
  </tr>
  <tr>
    <td>KeyValue<&#xfeff;K,V></td>
    <td>A key value pair</td>
  </tr>
  <tr>
    <td>ListValuedMap<&#xfeff;K,V></td>
    <td>Map that holds a list of values against each key</td>
  </tr>
  <tr>
    <td>MultiValuedMap<&#xfeff;K,V></td>
    <td>Map that holds a collection of values against each key</td>
  </tr>
  <tr>
    <td>MultiSet<&#xfeff;E></td>
    <td>Collection that counts the number of times an object appears in the collection</td>
  </tr> 
  <tr>
    <td>Unmodifiable</td>
    <td>Marker interface for collections, maps and iterators that are unmodifiable</td>
  </tr>            
</table>






If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
