---
title:  "Sets in Java"
date: 2018-10-08 00:00:00
---

### <a href="#list-interface" name="list-interface"><i class="fa fa-link anchor" aria-hidden="true"></i></a> List Interface

The Java List Interface represents a collection of elements. What is *characteristic* about List is that same element can occur more than once, also elements in a List have an insertion order and they can be iterated in that order. 

### <a href="#implementation" name="implementation"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Implementation

The Java.util.List is a child interface of Collection, therefore all methods from Collection can be used in List Interface as well.

List Interface is implemented by classes listed below:
* ArrayList (java.util.ArrayList),
* LinkedList (java.util.LinkedList),
* Vector (java.util.Vector),
* Stack (java.util.Stack).

### <a href="#creating-list-objects" name="creating-list-objects"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Creating List Objects

A List is an interface, and the instances of List can be created in the following ways:

```
List list1 = new ArrayList();
List list2 = new LinkedList();
List list3 = new Vector(); 
List list4 = new Stack(); 
```

### <a href="#operations-on-list" name="operations-on-list"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Operations on List

A List allows **add, remove, get and set** operations based on numerical positions of elements in List. A List provides the following methods for these operations:

* void add(int index, E element) - *Inserts the specified element at the specified position in this list*
* boolean	add(E e) - *Appends the specified element to the end of this list*
* boolean	addAll(int index, Collection<? extends E> c) - *Inserts all of the elements in the specified collection into this list at the specified position*
* E	get(int index) - *Returns the element at the specified position in this list*
* E	remove(int index) - *Removes the element at the specified position in this list*
* E	set(int index, E element) - *Replaces the element at the specified position in this list with the specified element*

Bellow, you can find a few more methods, for further information feel free to check the<a href="https://docs.oracle.com/javase/9/docs/api/java/util/List.html">official website</a>
* void	clear() - *Removes all of the elements from this list*
* boolean	contains(Object o) - *Returns true if this list contains the specified element*
* int	size() - *Returns the number of elements in this list*
* default void	sort(Comparator<? super E> c) - *Sorts this list according to the order induced by the specified Comparator*
* int	indexOf(Object o) - *Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element*

**Example**
```
import java.util.*; 
  
public class Demo 
{ 
    public static void main (String[] args) 
    { 
        // Creating a list 
        List<Integer> list1 = new ArrayList<Integer>(); 
        list1.add(0, 5);  // adds 5 at 0 index 
        list1.add(1, 6);  // adds 6 at 1 index
        list1.add(2, 7);  // adds 7 at 2 index
        System.out.println(list1);  // [5, 6, 7] 
  
        // Creating a 2nd list
        List<Integer> list2 = new ArrayList<Integer>(); 
        list2.add(1); 
        list2.add(2); 
        list2.add(3); 
  
        // Will add list list2 from 2 index 
        list1.addAll(2, list2); 
        System.out.println(list1); 
  
        // Removes element from index 3 
        list1.remove(3);      
        System.out.println(list1); 
  
        // Prints element at index 3 
        System.out.println(list1.get(3)); 
  
        // Replace 0th element with 5 
        list1.set(0, 5);    
        System.out.println(list1);  
    } 
}
```
**Result**
```
[5, 6, 7]
[5, 6, 1, 2, 3, 7]
[5, 6, 1, 3, 7]
3
[5, 6, 1, 3, 7]
```

### <a href="#arrayList" name="arrayList"><i class="fa fa-link anchor" aria-hidden="true"></i></a> ArrayList

The ArrayList class implements a List Interface and represents dynamic arrays that can grow as needed. All elements of an ArrayList are stored in a Java array, but unlike an array that has a fixed length, ArrayLists are created with an initial size. That means that if the size is exceeded the collection is automatically enlarged and if an element is removed from ArrayList the array may be shrunk.

Size enlargement is done by copying the old elements to the new array and using that new array instead of the old one. Since the size of an array doubles every time it needs more space, this can be controled by using *trimToSize()* method. This method copies all the elements from the existing array to a new array with size of exactly same number as the elements in the existing array.

As ArrayList is generic that means that you work with a general type T, where T can be replaced by any type such as int, double, String, Object etc. The most important thing is that ArrayList and ArrayList<T> are different. For ArrayList, you must specify the type of elements that will be stored. For example, if you want to store textual values in your ArrayList, this is the way of declaration:
```
ArrayList<String> text = new ArrayList<String>();
```

You can, also, see a declaration such as *List<String> text = new ArrayList<String>();*. This way, named *Polymorphism*, is usually used because the object named *"text"* is intended to be used as a List and it is recommended to declare it as List<String> type.
 
 ### <a href="#linkedList" name="linkedList"><i class="fa fa-link anchor" aria-hidden="true"></i></a> LinkedList

A LinkedList is a linear data structure where elements are linked by using pointers. That means that the elements are not stored at contiguous memory locations. A LinkedList consists of nodes where each node contains a data field and a reference to the next node in the list.

The differences between ArrayList and LinkedList are:
* ArrayList internally uses dynamic array to store the elements and LinkedList uses doubly linked list
* A ArrayList consumes less memory than an LinkedList because it does not store the next and previous references as LinkedList does
* ArrayList is good for storing and accessing data and LinkedList is good for manipulating data
* LinkedList manipualtion is faster than ArrayList
* Element access time for ArrayList is O(1) and for LinkedList is O(n), because it needs to go to the element by following the next/prev references

The way of declaring LinkedList is similar to ArrayList. For example, if you want to store textual values in your ArrayList, the way of declaration is:
```
LinkedList<String> text = new LinkedList<String>();
```

