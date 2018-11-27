---
title: "Open Source Collections in Java"
date: 2018-11-21 00:00:00
---

### <a href="#openSourceCollectionsInJava" name="openSourceCollectionsInJava"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Open Source Collections in Java

Welcome to the blog about *Collections* in Java. In this article, I am going to introduce a concept of *Apache Commons, Guava, Fastutil, Trove, and Goldman Sachs Collections libraries* and their Interfaces, Classes, and Methods supported by examples. I hope you will enjoy the content and gain some new experience.

The Collection in Java provides an architecture to manipulate with the group of objects. Collections provide:
* all the operations that are performed on data, such as searching, sorting, insertion, and deletion
* interfaces such as <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a>, and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>
* classes such as <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">ArrayList<a/>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">LinkedList</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Vector</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Stack</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">PriorityQueue</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">HashSet</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">LinkedHashSet</a>, and <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets"> TreeSet</a>

More about this will be explained below, distributed by different libraries.

### <a href="#apacheCommonsCollections" name="apacheCommonsCollections"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Apache Commons Collections

<a href="https://commons.apache.org/proper/commons-collections/">Apache Commons Collections</a> provide the following features:
* <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/org/apache/commons/collections4/Bag.html">Bag</a> Interface with a number of copies of each object
* <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/org/apache/commons/collections4/BidiMap.html">BidiMap</a> Interface provides Bi-Directional maps that can be looked up both, from value to key, as like as key to value
* <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/org/apache/commons/collections4/MapIterator.html">MapIterator</a> Interface provides iteration over maps
* *Transforming Decorators* alter each object when it is added to the collection
* *Composite Collections* make multiple collections look like one (uniformly)
* *Ordered Maps* and *Sets* retain the order elements are added in
* *Reference Map* allows keys and/or values to be garbage collected under close control

**How to use a library:**
To use this library, all you have to do is to insert *dependency* code to your project. Assuming that you know how to use Maven, you can find the code at the <a href="https://mvnrepository.com/artifact/org.apache.commons/commons-collections4/4.1">official website</a>:
```
<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-collections4 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-collections4</artifactId>
    <version>4.1</version>
</dependency>
```

More information about Maven, and how to use it, you can find in this <a href="https://ivanursul.com/articles/java/maven">article</a>.

Another way of using *Apache Commons Collections* is to download the library from the <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/index.html">official website</a>. When you do that, extract your commons-collections4-4.2-bin.tar.gz with <a href="https://www.win-rar.com/start.html?&L=0">WinRar</a> and open your environment (Eclipse). After you create a project, go to Build Path - Configure Build Path... - choose Libraries - click Add External JARs... - locate your extracted folder and import all the jars.

**Synchronization:**
*Apache Commons Collections* and Java collections have a similar synchronization solution. The majority of the various implementations of collections, maps and bags are not thread safe without additional synchronization, therefore **synchronizeXXX** method on Collections is recommended for these implementations to be synchronized in a multithreaded application use.

Below, you can find some Interfaces from Package org.apache.commons.collections4, supported by *Apache Commons Collections*, for further information feel free to check the <a href="https://commons.apache.org/proper/commons-collections/javadocs/api-4.2/index.html">official website</a>:
<table>
  <tr>
    <th>Interfaces</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>Bag<&#xfeff;E></td>
    <td>A Collection that counts the number of times an object appears in the collection</td>
  </tr>
  <tr>
    <td>SortedBag<&#xfeff;E></td>
    <td>Type of Bag that maintains a sorted order among its unique representative members</td>
  </tr>
  <tr>
    <td>BidiMap<&#xfeff;K, V></td>
    <td>A Map that allows Bi-Directional lookup between key and values</td> 
  </tr>
  <tr>
    <td>OrderedBidiMap<&#xfeff;K, V></td>
    <td>A Map that allows Bi-Directional lookup between key and values and retains and provides access to an ordering</td>
  </tr>  
  <tr>
    <td>SortedBidiMap<&#xfeff;K, V></td>
    <td>A Map that allows bidirectional lookup between key and values and retains both keys and values in sorted order</td>
  </tr>
  <tr>
    <td>Equator<&#xfeff;T></td>
    <td>A function which determines equality between objects of type T</td>
  </tr>
  <tr>
    <td>Get<&#xfeff;K, V></td>
    <td>The "read" subset of the Map interface</td>
  </tr>
  <tr>
    <td>IterableGet<&#xfeff;K, V></td>
    <td>The "read" subset of the Map interface</td>
  </tr>
  <tr>
    <td>IterableMap<&#xfeff;K, V></td>
    <td>A Map that can be iterated directly without creating an entry set</td>
  </tr>
  <tr>
    <td>KeyValue<&#xfeff;K, V></td>
    <td>A key-value pair</td>
  </tr>
  <tr>
    <td>ListValuedMap<&#xfeff;K, V></td>
    <td>A Map that holds a list of values against each key</td>
  </tr>
  <tr>
    <td>MultiValuedMap<&#xfeff;K, V></td>
    <td>A Map that holds a collection of values against each key</td>
  </tr>
  <tr>
    <td>MultiSet<&#xfeff;E></td>
    <td>A Collection that counts the number of times an object appears in the collection</td>
  </tr> 
  <tr>
    <td>Unmodifiable</td>
    <td>Marker interface for collections, maps, and iterators that are unmodifiable</td>
  </tr>            
</table>

Below, you can find some Classes from Package org.apache.commons.collections4 supported by *Apache Commons Collections*, for further information feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>:
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

In *Apache Commons Collections* exist 19 Packages with numerous Interfaces, Classes, and Methods. We shared only a few Interfaces and Classes from one Package and encourage you to check the others on the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>, so we can focus more on practical examples.

**Example - Ignore Null values**
```
import java.util.LinkedList;
import java.util.List;
import org.apache.commons.collections4.CollectionUtils;

public class NullDemo {

	   public static void main(String[] args) {
	   	     
	      List<String> list = new LinkedList<String>();
		
	      list.add("Apple");
	      CollectionUtils.addIgnoreNull(list, "Avocado");
	      list.add("Orange");
	      CollectionUtils.addIgnoreNull(list, null);
	      list.add("Banana");
	    
	      System.out.println(list);

	      if(list.contains(null)) {
	         System.out.println("Null value is present");
	      } else {
	         System.out.println("Null value is not present");
	      }
	       /*
	      	As you can see at the end, in the list NULL value does not exist.
		Method addIgnoreNull is very useful if you want to forbid NULL values in your lists.
	      */
	   }
}
```

**Example - Merging lists**
```
import java.util.LinkedList;
import java.util.List;
import org.apache.commons.collections4.CollectionUtils;

public class MergeDemo {

	   public static void main(String[] args) {
	   	     
		   	List<String> list1 = new LinkedList<String>();
	   		List<String> list2 = new LinkedList<String>();
	   		
	   		list1.add("Banana");
	   		list1.add("Apple");
	   		
	   		list2.add("Orange");
	   
	   		List<String> sortedList = CollectionUtils.collate(list1, list2);
	    
	   		System.out.println(sortedList);
			
			//This method makes it easier to combine multiple lists			
	   }
}
```

**Example - Bags usage**
```
import org.apache.commons.collections4.Bag;
import org.apache.commons.collections4.bag.HashBag;

public class BagDemo {

   public static void main(String[] args) {
      
      //Create Bag
      Bag<String> bag = new HashBag<>();

      //Add "Banana" five times to the bag
      bag.add("Banana", 5);
      
      //Add "Orange" one time to the bag
      bag.add("Orange");
      
      //Add "Apple" two times to the bag
      bag.add("Apple", 2);
      
      //Show content of the Bag
      System.out.println("Bag content: " + bag);
      
      //Show the set of unique values in the bag
      System.out.println("Unique values: " + bag.uniqueSet());
      
      //Show the number of "Apple" present in bag
      System.out.println("Apple is presented " + bag.getCount("Apple") + " times.");
      
      //Remove 2 appearances of "Banana" from the bag
      bag.remove("Banana", 2);
      
      //Show content of the Bag
      System.out.println("Content of the bag after removed 2 appearances of Banana: " + bag);
      
      //Show the number of "Banana" present in bag
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

      //Add keys and values
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
import org.apache.commons.collections4.IterableMap;
import org.apache.commons.collections4.MapIterator;
import org.apache.commons.collections4.map.HashedMap;

public class MapIteratorDemo {

   public static void main(String[] args) {
      
        //Create IterableMap
	IterableMap<String, String> iterableMap = new HashedMap<>();

	//Add keys and values
	iterableMap.put("Banana", "fruit");
	iterableMap.put("BMW", "car");
	iterableMap.put("Red", "color");

	//Create MapIterator
	MapIterator<String, String> mapIterator = iterableMap.mapIterator();
	      
	//Go through MapIterator
	while (mapIterator.hasNext()) {
	    	  
		//Put a key in variable key with type Object
	        Object key = mapIterator.next();
	          
	        //Put value in variable value with type Object
	        Object value = mapIterator.getValue();
	
	        //Show content of key and value in this iteration
	        System.out.println("Key is: " + key + ", and value is: " + value);
	}
      
	//Show IterableMap content
	System.out.println("Content of the IterableMap is: " + iterableMap);
	      
	//Remove key "Banana"
	iterableMap.remove("Banana");
	System.out.println("Content of the IterableMap after change is: " + iterableMap);
	      
	//Change the value of key "BMW"
	iterableMap.replace("BMW", "color");
	System.out.println("Content of the IterableMap after change is: " + iterableMap);
   }
}
```

### <a href="#guava" name="guava"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Guava - Google's Collections

Just like Apache Commons Collections, *Guava* represents open source set of libraries as well. Guava is made by Google and provides the following benefits:
* It helps in reducing coding errors and makes it easy to maintain the code,
* It is a reliable, fast, and efficient,
* Collections - include immutable collections, bidirectional maps, multisets, multimaps, tables, and more,
* Strings - provides classes like <a href="https://github.com/google/guava/wiki/StringsExplained">Splitter</a>, <a href="https://github.com/google/guava/wiki/StringsExplained">Joiner</a> <a href="https://github.com/google/guava/wiki/StringsExplained">CharMatcher</a>, and more,
* <a href="https://github.com/google/guava/wiki/OrderingExplained">Comparator</a> Class for ordering,
* Graphs, Caching, operations on primitive types not provided by JDK, simplified I/O and more.

*Guava* provides static methods to facilitate the declaration of a variable, like it is mentioned below:
```
List<String> list = new ArrayList<String>();
list.add("Banana");
list.add("Apple");
list.add("Avocado");
list.add("Orange");

OR

List<String> list2 = Lists.newArrayList("Banana", "Apple", "Avocado", "Orange");
```
```
List<Map<String, String>> map = new LinkedList<Map<String, String>>();

OR

List<Map<String, String>> map2 = Lists.newLinkedList();
```
As you can conclude, writing the code is much easier with *Guava*.

**How to use a library:**
*Dependancy* for Maven's library importation is listed hereafter:
```
<!-- https://mvnrepository.com/artifact/com.google.guava/guava -->
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>19.0</version>
</dependency>
```

More information about Maven, and how to use it, you can find in this <a href="https://ivanursul.com/articles/java/maven">article</a>.

Below, you can find some Interfaces from Package com.google.common.collect, supported by *Guava*, for further information feel free to check the <a href="https://google.github.io/guava/releases/snapshot-jre/api/docs/">official website</a>:
<table>
  <tr>
    <th>Interfaces</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>BiMap<&#xfeff;K, V></td>
    <td>A Bidirectional Map that preserves the uniqueness of its values and keys</td>
  </tr>
  <tr>
    <td>ListMultimap<K, V&#xfeff;></td>
    <td>A Multimap that can hold duplicate key-value pairs and maintains the insertion ordering of values for a given key</td>
  </tr>
  <tr>
    <td>Multimap<K, V&#xfeff;></td>
    <td>A Collection that maps keys to values, similar to Map, but each key may be associated with multiple values</td> 
  </tr>
  <tr>
    <td>Multiset<E&#xfeff;></td>
    <td>A Collection that supports order-independent equality, like Set, but may have duplicate elements</td>
  </tr>  
  <tr>
    <td>Table<R, C, V&#xfeff;></td>
    <td>A Collection that associates an ordered pair of keys, called a row key and a column key, with a single value</td>
  </tr>           
</table>

Below, you can find some Classes from Package com.google.common.collect supported by *Guava*, for further information feel free to check the <a href="https://google.github.io/guava/releases/snapshot-jre/api/docs/">official website</a>:
<table>
  <tr>
    <th>Classes</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>ArrayListMultimap<&#xfeff;K, V></td>
    <td>A Multimap that uses an ArrayList to store the values for a given key</td>
  </tr> 
  <tr>
    <td>ArrayTable<&#xfeff;R, C, V></td>
    <td>Fixed-size Table implementation backed by a two-dimensional array</td>
  </tr>
  <tr>
    <td>ImmutableBiMap<&#xfeff;K, V></td>
    <td>A BiMap whose content will never change</td>
  </tr>
  <tr>
    <td>ImmutableList<&#xfeff;E></td>
    <td>A List whose content will never change</td>
  </tr>
  <tr>
    <td>LinkedListMultimap<&#xfeff;K, V></td>
    <td>A ListMultimap that supports deterministic iteration order for both keys and values</td>
  </tr>
  <tr>
    <td>Ordering<&#xfeff;T></td>
    <td>A Comparator with additional methods to support common operations</td>
  </tr>  
</table>

In *Guava* exist 16 Packages with numerous Interfaces, Classes, and Methods. We shared only a few Interfaces and Classes from one Package and encourage you to check the others on the <a href="https://google.github.io/guava/releases/snapshot-jre/api/docs/">official website</a>.

**Example - MultiSet**
```
/*
A Multiset is not a Set, it represents a bag which contains sets of elements.
*/

import com.google.common.collect.HashMultiset;
import com.google.common.collect.Multiset;

public class MultiSetDemo {
	
   public static void main(String args[]) {
	   
	   // Create Multiset
	   Multiset<String> multiSet = HashMultiset.create();
	   
	   // Add values
	   multiSet.add("Banana");
	   multiSet.add("Apple");
	   multiSet.add("Orange");
	   multiSet.add("Avocado");
	   multiSet.add("Banana");
	   
	   System.out.println("Number of elements in multiSet: " + multiSet.size());

	   System.out.println("Number of Banana in multiSet: " + multiSet.count("Banana"));
	   
	   // Delete element Banana
	   multiSet.remove("Banana");
	   System.out.println("Number of elements in multiSet: " + multiSet.size());
	   System.out.println("Number of Banana in multiSet: " + multiSet.count("Banana"));	   
   }
}
```

**Example - MultiMap**
```
/*
A MultiMap is like a Map, but it may contain duplicate keys and provides an easy way to handle mapping from keys to a collection of values.
*/

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;

public class MultiMapDemo {

	   public static void main(String args[]) {
		
	       //Create MultiMap
	       Multimap<String,String> multiMap = ArrayListMultimap.create();
	       
	       //Add values
	       multiMap.put("fruit", "Banana");
	       multiMap.put("fruit", "Apple");
	       multiMap.put("fruit", "Banana");
	       multiMap.put("fruit", "Avocado");
	       multiMap.put("fruit", "Orange");
	        
	       multiMap.put("car", "BMW");
	       multiMap.put("car", "BMW");
	       multiMap.put("car", "Opel");
	       multiMap.put("car", "Fiat");
	 
	       System.out.println("Total items in multiMap: " + multiMap.size());
	       System.out.println("Total fruits in multiMap: " + multiMap.get("fruit").size());
	       System.out.println("fruits in multiMap: " + multiMap.get("fruit"));	        
	       System.out.println("Total items in car: " + multiMap.get("car").size());
	       System.out.println("car Items: " + multiMap.get("car"));
	       
	       //Remove value Banana with key fruit
	       multiMap.remove("fruit", "Banana");
	       
	       //There is still 1 Banana
	       System.out.println("Total items in multiMap: " + multiMap.size());
	       System.out.println("Total fruits in multiMap: " + multiMap.get("fruit").size());
	       System.out.println("fruits in multiMap: " + multiMap.get("fruit"));	        
	       System.out.println("Total items in car: " + multiMap.get("car").size());
	       System.out.println("car Items: " + multiMap.get("car"));		   
	   }
}
```

**Example - Optional usage**
```
/*
The Optional object is used to represent null with absent value.
*/

import com.google.common.base.Optional;

public class OptionalDemo {
	
   public static void main(String args[]) {
	
      OptionalDemo optionalDemo = new OptionalDemo();

      Integer value =  null;
      Integer value2 =  new Integer(11);
      Integer value3 =  new Integer(5);
      Integer value4 =  null;
      Integer value5 =  null;
      
      //Allows NULL value
      Optional<Integer> x = Optional.fromNullable(value);
      
      //Does not allow NULL value
      Optional<Integer> y = Optional.of(value2);
      
      //Does not allow NULL value
      Optional<Integer> z = Optional.of(value3);

      //Does not allow NULL value
      //Optional<Integer> v = Optional.of(value4); This throws NullPointerException

      //Allows NULL value
      Optional<Integer> w = Optional.fromNullable(value5);

      System.out.println(optionalDemo.calculation(x, y, z, w));
   }

   public Integer calculation(Optional<Integer> x, Optional<Integer> y, Optional<Integer> z, Optional<Integer> w) {
	         
      System.out.println("x is present: " + x.isPresent());
      System.out.println("y is present: " + y.isPresent());
      System.out.println("z is present: " + z.isPresent());
      System.out.println("w is present: " + w.isPresent());

      //Returns the value if present otherwise returns the default value passed
      Integer value1 = x.or(new Integer(0));	
      System.out.println(value1);

      //Gets the value, value should be present
      Integer value2 = y.get();
      System.out.println(value2);
      
      Integer value3 = z.get();
      System.out.println(value3);
      
      //Integer value5 = w.get(); Can't be called because of an absent value

      return value1 + value2 - value3;
  }
}
```

**Example - Ordering**
```
import java.util.Collections;
import java.util.List;

import com.google.common.collect.Lists;
import com.google.common.collect.Ordering;

public class OrderingDemo {
	
   public static void main(String args[]) {
	   
      // Create Lists
      List<Integer> numbers = Lists.newArrayList(1,7,4,22,1,-13,222);
      List<String> fruits = Lists.newArrayList("Banana","Avocado","Banana","Orange","Apple");

      // Create Ordering
      Ordering ordering = Ordering.natural();
      System.out.println("Numbers: " + numbers);      
      System.out.println("Fruits: " + fruits);
        
      // Sort elements
      Collections.sort(numbers,ordering);
      Collections.sort(fruits,ordering);
      System.out.println("Sorted numbers: " + numbers);      
      System.out.println("Sorted numbers: " + fruits);
       
      // Sort descending
      Collections.sort(fruits,ordering.reverse());
      System.out.println("Reverse: " + fruits);

      numbers.add(null);
      System.out.println("Null added to Sorted numbers: " + numbers);	

      Collections.sort(numbers,ordering.nullsFirst());
      System.out.println("Null at first position: " + numbers);
   }
}
```



If you liked this article, you might be interested in <a href="https://ivanursul.com/articles/java/lists">Lists</a>, <a href="https://ivanursul.com/articles/java/sets">Sets</a>, <a href="https://ivanursul.com/articles/java/maps">Maps</a>, <a href="https://ivanursul.com/articles/java/queues">Queues</a>, and <a href="https://ivanursul.com/articles/java/deques">Deques</a>. Feel free to browse.
