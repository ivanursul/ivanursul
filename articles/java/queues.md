---
title: "Queues in Java"
date: 2018-11-13 00:00:00
---

### <a href="#queues" name="queues"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Queues

Welcome to the blog about *Queue* Interface. In this article, I am going to introduce a concept of *Queues*, and methods divided into two groups, depending on their behavior. I hope you will enjoy the content and gain some new experience.

Interface *Queue<E&#xfeff;>* extends Collection<&#xfeff;E> Class and represents a collection intended to hold the elements about to be processed. Besides the operations that inherit from Collection, *Queue* provides operations such as insertion, extraction, and inspection. Each operation has two directions:
* first throws an exception if the operation fails
  * *Insert* - boolean add(E e) inserts the element into this queue. This method returning true upon success or throwing an IllegalStateException if there is no space available
  * *Remove* - E remove() retrieves and removes the head of this queue. This method throws an exception if this queue is empty
  * *Examine* - E element() retrieves the head of this queue. This method throws an exception if this queue is empty
* second returns a special value - null or false, depending on the operation
  * *Insert* - boolean offer(E e) inserts the element into this queue. When using a capacity-restricted queue, this method is preferable to add(E), which can fail to insert an element only by throwing an exception
  * *Remove* - E poll() retrieves and removes the head of this queue, or returns null if this queue is empty
  * *Examine* - E peek() retrieves the head of this queue or returns null if this queue is empty
  
*Queues* usually order elements in a first-in-first-out (FIFO) data structure algorithm. In a FIFO queue, all new elements are added at the tail of the queue. There are also a last-in-first-out (LIFO) queues or stacks, but it's important to note that whatever the ordering is used, the element on the head of the queue will be removed by calling methods remove() or poll(). About LIFO data structures, stacks and deques will be more words in the article <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>.

*Queue* is just an Interface and if we want to declare *Queues*, the PriorityQueue and LinkedList Classes are usually used. Both implementations are not thread-safe and as their alternative, if a thread-safe implementation is needed, PriorityBlockingQueue is recommended.

**Example**
```
import java.util.LinkedList; 
import java.util.Queue; 
  
public class Demo 
{ 
  public static void main(String[] args) 
  { 
    Queue<String> fruits = new LinkedList<>(); 
  
    // Adding fruits  
    fruits.add("Banana");
    fruits.add("Apple");
    fruits.add("Orange");
    fruits.add("Avocado");
  
    // Display contents of the queue
    System.out.println("Fruits in queue: " + fruits); 
  
    // Removing the head of queue
    String removeElement = fruits.remove(); 
    System.out.println("Removed element: " + removeElement); 
  
    System.out.println("Fruits in queue: " + fruits); 
  
    // Viewing the head of queue 
    String head = fruits.peek(); 
    System.out.println("Head of queue: " + head); 
  } 
} 
```

### <a href="#priorityQueue" name="priorityQueue"><i class="fa fa-link anchor" aria-hidden="true"></i></a> PriorityQueue

Class *PriorityQueue<E&#xfeff;>* extends AbstractQueue<E> Class and implements Serializable Interface and represents an unbounded priority queue based on a priority heap. The elements are ordered according to their natural ordering or by a Comparator (depending on which constructor is used). A priority queue is unbounded, but has an internal capacity which grows automatically when elements are added.
 
*PriorityQueue* doesn't permit Null elements and insertion of non-comparable objects. This implementation is not synchronized which means that multiple threads should not access a *PriorityQueue*, alternatively PriorityBlockingQueue should be used.

### <a href="#priorityBlockingQueue" name="priorityBlockingQueue"><i class="fa fa-link anchor" aria-hidden="true"></i></a> PriorityBlockingQueue

If you liked this article, you might be interested in <a href="https://programiranjepro.github.io/ivanursul/articles/java/lists">Lists</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/sets">Sets</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/maps">Maps</a>, <a href="https://programiranjepro.github.io/ivanursul/articles/java/queues">Queues</a> and <a href="https://programiranjepro.github.io/ivanursul/articles/java/deques">Deques</a>. Feel free to browse.
