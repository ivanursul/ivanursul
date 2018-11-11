---
title:  "Maps in Java"
date: 2018-11-09 00:00:00
---

### <a href="#map-implementation" name="map-implementation"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Map Implementation

Welcome to the blog about *Map* Interface. In this article I am going to introduce a concept of *Maps*, also known as Dictionaries, and its implementations such as *WeakHashMap and ConcurrentHashMap*, with the accent on *HashMap, TreeMap, LinkedHashMap, EnumMap and IdentityHashMap*. I hope you will enjoy the content and gain some new experience.

A *Map* is an Interface that contains set key-value and it has a form like this Map <K, V>, where K represents key and V stands for value. Keys map values and they are unique, which means that two same keys are not allowed. Also, keys are objects that are used to retrieve values.

Some usual methods are listed below, for further information feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>:
* V	put(K key, V value) - *Associates the specified value with the specified key in this map*
* V	remove(Object key) - *Removes the mapping for a key from this map if it is present*
* Collection<&#xfeff;V>	values() - *Returns a Collection view of the values contained in this map*
* void	clear() - *Removes all of the mappings from this map* 

There are three groups of *Map* implementations:
* General-purpose *(HashMap, TreeMap and LinkedHashMap)*,
* Special-purpose *(EnumMap, WeakHashMap and IdentityHashMap)*,
* Concurrent implementations *(ConcurrentHashMap)*.

### <a href="#hashTable" name="hashTable"><i class="fa fa-link anchor" aria-hidden="true"></i></a> HashTable

*HashTable* extends Dictionary<K,V> Class and implements Map<K,V>, Cloneable and Serializable Interfaces. It stores key-value pairs in a hash table, where keys are mapped to values. *HashTable* is synchronised and an instance of *Hashtable* has two parameters that affect performance. One is initial capacity that represents the number of buckets in the hash table at the time the hash table is created, and the other is load factor represents a measure of how full the hash table is allowed to get, before its capacity is increased. Higher values of the load factor decrease the space, but increase the time cost so it is up to developer to balance between these values. The default load factor is (.75).

### <a href="#hashMap" name="hashMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> HashMap

*HashMap* extends AbstractMap<K,V> Class and implements Map<K,V>, Cloneable and Serializable Interfaces. Also, it represents an implementation of Map based on HashTable. The advantage is that the execution time remains constant even for large sets. In other words, *HashMap* is used if the speed is important to you and iteration order is not your primary focus. The characteristic about *HashMap* is that order of the elements is not guaranteed and it can shuffle time to time.

For adding an element, the requirements are key and value. As it is said, keys are used to retrieve values and in this case, it can be **null**. *HashMap* generates a hashcode for the key and checks if there is any value associated with it. If it is, then HashMap returns the value, otherwise, it adds value associated to the key.

Below are the most commonly used *HashMap* methods:
* V	replace(K key, V value) - *Replaces the entry for the specified key only if it is currently mapped to some value*
* boolean containsKey(Object key) - *Returns true if this map contains a mapping for the specified key*
* boolean isEmpty() - *Returns true if this map contains no key-value mappings*

**Example**
```
import java.util.HashMap;
import java.util.Map;

public class Demo {

    public static void main(String[] args) {

        // Creating HashMap
        Map fruits = new HashMap();

        // Adding fruits
        fruits.put("Banana", 1);
        fruits.put("Apple", 12);
        fruits.put("Avocado", 8);

        System.out.println("Fruits: " + fruits.size());

        // Iterate over fruits
        for(Object x: fruits.keySet()) {
            System.out.println(x + " - " + fruits.get(x));
        }    

        // Clear all values.
        fruits.clear();

        System.out.println("Size: " + fruits.size());
    }
}
```
### <a href="#treeMap" name="hashMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> TreeMap

*TreeMap* extends AbstractMap<K,V> Class and implements NavigableMap<K,V>, Cloneable and Serializable Interfaces. The thing that is associated with *TreeMap* is that it is sorted according to the natural ordering of its keys, or by a Comparator provided at the creation time. In opposite of HashMap, this class maintains an order on its elements. For an integer, it sorts elements to ascending order and for Strings, it is an alphabetical order. There is also the possibility of self-defining the order.

This type is recommended to use if you need SortedMap operations or key-ordered Collection-view iteration. *TreeMap* is not synchronized, which means that if you use multiple threads, it must be synchronized externally.

**Example**
```
import java.util.SortedMap;
import java.util.TreeMap;

public class Demo {

    public static void main(String[] args) {
    
        // Creating a TreeMap
        SortedMap<String, Integer> fruits  = new TreeMap<>();

        // Adding fruits
        fruits.put("Banana", 1);
        fruits.put("Apple", 2);
        fruits.put("Avocado", 5);
        fruits.put("Orange", 22);

        System.out.println(fruits);
    }
}
```

### <a href="#linkedHashMap" name="linkedHashMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> LinkedHashMap

*LinkedHashMap* extends HashMap<K,V> Class and implements Map<K,V> Interface and is recommended if you want a performance near good as HashMap and insertion order iteration. Since it has a possibility to use removeEldestEntry method, there is an easy way to make a custom cache (we encourage the reader to try to do this example).

*LinkedHashMap* maintains a doubly-linked list which defines the iteration ordering that represents the order in which keys are inserted into the map, but it is also based on hash table and therefore it differs from HashMap. Their common side is that both, HashMap and *LinkedHashMap*, permits null elements and has constant execution time, but because of the linked list *LinkedHashMap* has slightly lower performance.

One more thing, just as HashMap and TreeMap, *LinkedHashMap* is not synchronized as well, which means that if you use multiple threads, it must be synchronized externally.

**Example**
```
public class Demo {

    public static void main(String[] args) {
    
        // Creating LinkedHashMap
        Map<String, String> fruits = new LinkedHashMap<String, String>();
        
        // Adding fruits
        fruits.put("Banana", "1");
        fruits.put("Apple", "12");
        fruits.put("Avocado", "5");
        fruits.put("Orange", "25");
        fruits.put(null, "22" );
        
        // Iterating
        for(Map.Entry<String, String> x : fruits.entrySet()){
            System.out.println(x.getKey() + " " + x.getValue());
        }
    }
}
```

### <a href="#enumMap" name="enumMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> EnumMap

*EnumMap* who extends AbstractMap<K,V> Class and implements Serializable and Cloneable Interfaces, is internally implemented as an array. It represents a high performance Map implementation and is used with enum keys. It is recommended if you want to map an enum to a value.

Similar to TreeMap, *EnumMap* is maintained in the natural order of their keys. *EnumMap* is a combination of the safety of the Map Interface and a wide range of its methods with a speed that is similar to an array. Null keys are not permitted and they lead to a NullPointerException, but Null values are free to use.

Like the previously mentioned classes, *EnumMap* is not synchronized as well. The example of a declaration is below:
```
EnumMap<SomeClass, String> map = new EnumMap<SomeClass, String>;
```
**Example**
```
import java.util.EnumMap;

public class Demo {

    public static void main(String[] args) {
        
        // Creating EnumMap
        EnumMap<Test, String> fruits = new EnumMap<Test, String>(Test.class);
        
        // Adding fruits
        fruits.put(Test.A, "Banana");
        fruits.put(Test.B, "Apple");
        fruits.put(Test.C, "Avocado");
        fruits.put(Test.D, "Orange");
        
        //Iterate over key
        for(Test x: fruits.keySet()){
            System.out.println(x +" "+ x.getNumber() );
        }
        
       // Iterate over values
        for(String x: fruits.values()){
            System.out.println(x);
        }
    }
}
enum Test {

    A(1), B(2), C(3), D(4);
    private int number;
    
    private Test(int x) {
        number = x;
    }
    
    public int getNumber() {
        return number;
    }
}
```

### <a href="#identityHashMap" name="identityHashMap"><i class="fa fa-link anchor" aria-hidden="true"></i></a> IdentityHashMap

*IdentityHashMap* extends AbstractMap<K,V> Class and implements Map<K,V>, Serializable and Cloneable Interfaces. This Class implements Map Interface with a hash table and its keys comparation is not based on the object equality, but on the reference equality. In normal Map implementation, such as HashMap, two keys are equal only if k1==null when k2==null or k1.equals(k2). In an *IdentityHashMap* it is different, two keys are equal only if k1==k2.

In *IdentityHashMap* Class the order is not guaranteed, it has constant-time performance and this implementation is not synchronized. This Class is used in special occasions, when reference-equality semantics are required, and permits null values and the null key. The exaples are maintaining proxy objects, topology-preserving object graph transformations, such as serialization or deep-copying and more.

**Example**

```
import java.util.Map;
import java.util.IdentityHashMap;

public class Demo {
    
    public static void main(String[] args) { 
           
        // Creating IdentityHashMap
        Map fruits = new IdentityHashMap();
               
        // Adding fruits
        fruits.put(new String("1") ,"Banana"); 
        fruits.put(new String("2") ,"Avocado"); 
        fruits.put(new String("3") ,"Apple"); 
       
        System.out.println("Fruits:"+ fruits);                            
 }
}
```

If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
