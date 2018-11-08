---
title:  "Sets in Java"
date: 2018-10-08 00:00:00
---

### <a href="#list-interface" name="list-interface"><i class="fa fa-link anchor" aria-hidden="true"></i></a> List Interface

The Java List Interface represents a collection of elements. What is *characteristic* about List is that same element can occur more than once, also elements in a List have an insertion order and they can be iterated in that order. 

### <a href="#implementation" name="implementation"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Implementation

The Java.util.List is a child interface of Collection, therefore all methods from Collection can be used in List Interface as well.
<p align="center"> <img src="https://www.geeksforgeeks.org/wp-content/uploads/ListInterfaceJava.png" /> </p>

List Interface is implemented by classes listed below:
* ArrayList (java.util.ArrayList),
* LinkedList (java.util.LinkedList),
* Vector (java.util.Vector),
* Stack (java.util.Stack).

### <a href="#creating-list-objects" name="creating-list-objects"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Creating List Objects

The List is an interface, and the instances of List can be created in the following ways:

```
List list1 = new ArrayList();
List list2 = new LinkedList();
List list3 = new Vector(); 
List list4 = new Stack(); 
```

### <a href="#operations-on-list" name="operations-on-list"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Operations on List

The List allows **add, remove, get and set** operations based on numerical positions of elements in List. The List provides the following methods for these operations:

* void add(int index, E element) - *Inserts the specified element at the specified position in this list*
* boolean	add(E e) - *Appends the specified element to the end of this list*
* boolean	addAll(int index, Collection<? extends E> c) - *Inserts all of the elements in the specified collection into this list at the specified position*
* E	get(int index) - *Returns the element at the specified position in this list*
* E	remove(int index) - *Removes the element at the specified position in this list*
* E	set(int index, E element) - *Replaces the element at the specified position in this list with the specified element*

Bellow you can find a few more methods, for further information feel free to check <a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>
* void	clear() - *Removes all of the elements from this list*
* boolean	contains(Object o) - *Returns true if this list contains the specified element*
* int	size() - *Returns the number of elements in this list*
* default void	sort(Comparator<? super E> c) - *Sorts this list according to the order induced by the specified Comparator*
* int	indexOf(Object o) - *Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element*

**Example**
```
import java.util.*; 
  
public class ListDemo 
{ 
    public static void main (String[] args) 
    { 
        // Creating a list 
        List<Integer> l1 = new ArrayList<Integer>(); 
        l1.add(0, 1);  // adds 1 at 0 index 
        l1.add(1, 2);  // adds 2 at 1 index 
        System.out.println(l1);  // [1, 2] 
  
        // Creating another list 
        List<Integer> l2 = new ArrayList<Integer>(); 
        l2.add(1); 
        l2.add(2); 
        l2.add(3); 
  
        // Will add list l2 from 1 index 
        l1.addAll(1, l2); 
        System.out.println(l1); 
  
        // Removes element from index 1 
        l1.remove(1);      
        System.out.println(l1); // [1, 2, 3, 2] 
  
        // Prints element at index 3 
        System.out.println(l1.get(3)); 
  
        // Replace 0th element with 5 
        l1.set(0, 5);    
        System.out.println(l1);  
    } 
}
```
**Result**
```
[1, 2]
[1, 1, 2, 3, 2]
[1, 2, 3, 2]
2
[5, 2, 3, 2]
```

### <a href="#arrayList" name="arrayList"><i class="fa fa-link anchor" aria-hidden="true"></i></a> ArrayList

The ArrayList class implements an List Interface and represents dynamic arrays that can grow as needed. All elements of an ArrayList are stored in a Java array, but unlike an array that has a fixed length, ArrayList are created with initial size. That means that if the size is exceeded the collection is automatically enlarged and if an element is removed from ArrayList the array may be shrunk.

Size enlargement is done by copying the old elements to the new array and using that new array instead of the old one. Since the size of an array doubles every time it needs more space, this can be controled by using *trimToSize()* method. This method copies all the elements from the existing array to a new array with size of exactly same number as the elements in the existing array.

As ArrayList is generic that means that you work with a general type T, where T can be replaced by any type such as int, double, String, Object etc. The most important thing is that ArrayList and ArrayList<T> are different. For ArrayList you must specify the type of the elements that will be stored. For example, if you want to store textual values in your ArrayList, this is the way of declaration:
```
ArrayList<String> text = new ArrayList<String>();
```

You can, also, see a declaration such as *List<String> text = new ArrayList<String>();*. This way, named *Polymorphism*, is usually used because the object named *"text"* is intended to be used as a List and it is recommended to declare it as List<String> type.
 
 ### <a href="#linkedList" name="linkedList"><i class="fa fa-link anchor" aria-hidden="true"></i></a> LinkedList
