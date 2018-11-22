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

**How to use library**
To use this library, you have to download it from the <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/index.html">official website</a>. When you do that, extract your commons-collections4-4.2-bin.tar.gz with WinRar and open your environment (Eclipse). After you create project, go to Build Path - Configure Build Path... - choose Libraries - click Add External JARs... - locate your extracted folder and import all the jars.

**Synchronozation**
*Appache Commons Collections* and Java collections have a similar synchronization solution. The majority of the various implementations of collections, maps and bags are not thread safe without additional synchronization, therefore **synchronizeXXX** method on Collections is recommended for these implementations to be synchronized in a multithreaded application use.

Below, you can find some Interfaces from Package org.apache.commons.collections4, supported by *Appache Commons Collections*, for further information feel free to check the <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/index.html">official website</a>:
<table>
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

Below, you can find some Classes from Package org.apache.commons.collections4 supported by *Appache Commons Collections*, for further information feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>:
<table>
  <tr>
    <th>Classes</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>BagUtils</td>
    <td>Provides utility methods and decorators for Bag and SortedBag instances</td>
  </tr> 
  <tr>
    <td>CollectionUtils</td>
    <td>Provides utility methods and decorators for Collection instances</td>
  </tr>
  <tr>
    <td>EnumerationUtils</td>
    <td>Provides utility methods for Enumeration instances</td>
  </tr>
  <tr>
    <td>ListUtils</td>
    <td>Provides utility methods and decorators for List instances</td>
  </tr>
  <tr>
    <td>MapUtils</td>
    <td>Provides utility methods and decorators for Map and SortedMap instances</td>
  </tr>
  <tr>
    <td>QueueUtils</td>
    <td>Provides utility methods and decorators for Queue instances</td>
  </tr>
  <tr>
    <td>SetUtils</td>
    <td>Provides utility methods and decorators for Set and SortedSet instances</td>
  </tr>
</table>

In *Appache Commons Collections* exist 19 Packages with numerous Interfaces, Classes and Methods. We shared only few Interfaces and Classes from one Package and encourage you to check the others on the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>,so we can focus more on practical examples.

**Example - Bags usage**
```
import org.apache.commons.collections4.Bag;
import org.apache.commons.collections4.bag.HashBag;

public class BagDemo {

   public static void main(String[] args) {
      
      //create Bag
      Bag<String> bag = new HashBag<>();

      //add "Banana" five times to the bag.
      bag.add("Banana", 5);
      
      //add "Orange" one time to the bag.
      bag.add("Orange");
      
      //add "Apple" two times to the bag.
      bag.add("Apple", 2);
      
      //show content of the Bag
      System.out.println("Bag content: " + bag);
      
      //show the set of unique values in the bag
      System.out.println("Unique values: " + bag.uniqueSet());
      
      //show the number of "Apple" present in bag
      System.out.println("Apple is presented " + bag.getCount("Apple") + " times.");
      
      //remove 2 appearances of "Banana" from the bag
      bag.remove("Banana", 2);
      
      //show content of the Bag
      System.out.println("Content of the bag after removed 2 appearances of Banana: " + bag);
      
      //show the number of "Banana" present in bag
      System.out.println("Banana is present " + bag.getCount("Banana") + " times.");
   }
}
```

**Example - BidiMap usage**
```
import org.apache.commons.collections4.BidiMap;
import org.apache.commons.collections4.bidimap.TreeBidiMap;

public class BidiMapDemo {

   public static void main(String[] args) {
      
      //Create BidiMap
      BidiMap<String, String> bidiMap = new TreeBidiMap<>();

      //add keys and values
      bidiMap.put("Banana", "fruit");
      bidiMap.put("BMW", "car");
      bidiMap.put("Red", "color");
      
      //Show BidiMap content
      System.out.println("Content of bidiMap: " + bidiMap);
      
      //Show the value of Banana key
      System.out.println("The value of Banana key is: " + bidiMap.get("Banana")); 
      
      //Show the key of fruit value
      System.out.println("The key of fruit value is: " + bidiMap.getKey("fruit"));
  
      //Remove by value fruit
      bidiMap.removeValue("fruit");
      System.out.println("BidiMap content after removed value: " + bidiMap);
      
      //Remove by key BMW
      bidiMap.remove("BMW");
      System.out.println("BidiMap content after removed key: " + bidiMap);
        
      bidiMap.put("Banana", "fruit");
      bidiMap.put("BMW", "car");
      System.out.println(bidiMap);
      
      //Create new BidiMap to show method used to replace the site of key/value
      BidiMap<String, String> inversedBidiMap = bidiMap.inverseBidiMap();  
      System.out.println("Inversed BidiMap: " + inversedBidiMap);
   }
}
```

**Example - MapIterator usage**
```

```



If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
