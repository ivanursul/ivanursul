---
title: "Queues in Java"
date: 2018-11-13 00:00:00
---

### <a href="#queuesInterface" name="queuesInterface"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Queue Interface

Welcome to the blog about *Queue* Interface. In this article, I am going to introduce a concept of *Queues* and methods divided into two groups, depending on their behavior, with the focus on *PriorityQueues and PriorityBlockingQueues*. I hope you will enjoy the content and gain some new experience.

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

The *Queue* is just an Interface and if we want to declare *Queues*, the PriorityQueue and LinkedList Classes are usually used. Both implementations are not thread-safe and as their alternative, if a thread-safe implementation is needed, PriorityBlockingQueue is recommended.

Methods inherited from Interface java.util.Collection: *addAll, clear, contains, containsAll, equals, hashCode, isEmpty, iterator, remove, removeAll, retainAll, size, toArray, toArray.*

**Example**
```
         Queue<String> fruits = new LinkedList<>(); 

         // Adding fruits  
         fruits.add("Banana");
         fruits.add("Apple");
         fruits.add("Orange");
         fruits.add("Avocado");

         // Display contents of the queue
         System.out.println("Fruits in queue: " + fruits); 

         // Removing the head of the queue
         String removeElement = fruits.remove(); 
         System.out.println("Removed element: " + removeElement); 

         System.out.println("Fruits in queue: " + fruits); 

         // Viewing the head of the queue 
         String head = fruits.peek(); 
         System.out.println("Head of queue: " + head); 
```

### <a href="#priorityQueueClass" name="priorityQueueClass"><i class="fa fa-link anchor" aria-hidden="true"></i></a> PriorityQueue Class

Class *PriorityQueue<E&#xfeff;>* extends AbstractQueue<E> Class and implements Serializable Interface. It represents an unbounded priority queue based on a priority heap. The elements are ordered according to their natural ordering or by a Comparator (depending on which constructor is used). A priority queue is unbounded but has an internal capacity which grows automatically when elements are added.
 
*PriorityQueue* does not permit Null elements and insertion of non-comparable objects. This implementation is not synchronized which means that multiple threads should not access a *PriorityQueue*, alternatively, PriorityBlockingQueue should be used.

Some usual methods are listed below, for further information feel free to check the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/PriorityQueue.html">official website</a>:
* boolean add(E e), boolean offer(E e), E peek(), E poll()
* void clear() - *This method removes all of the elements from this priority queue*
* int size() - *This method returns the number of elements in this collection*

Constructors:
* PriorityQueue() - *Creates a PriorityQueue with the default initial capacity (11) that orders its elements according to their natural ordering*
* PriorityQueue(Collection<? extends E> c) - *Creates a PriorityQueue containing the elements in the specified collection*
* PriorityQueue(int initialCapacity) - *Creates a PriorityQueue with the specified initial capacity that orders its elements according to their natural ordering*
* PriorityQueue(int initialCapacity, Comparator<? super E> comparator) - *Creates a PriorityQueue with the specified initial capacity that orders its elements according to the specified comparator*
* PriorityQueue(PriorityQueue<? extends E> c) - *Creates a PriorityQueue containing the elements in the specified priority queue*
* PriorityQueue(SortedSet<? extends E> c) - *Creates a PriorityQueue containing the elements in the specified sorted set*

**Example**
```
         // Creating a PriorityQueue
         PriorityQueue<String> fruits = new PriorityQueue<>();

         // Adding fruits
         fruits.add("Banana");
         fruits.add("Orange");
         fruits.add("Apple");
         fruits.add("Avocado");

         System.out.println("Fruits in queue: " + fruits);

         // Remove a fruit from the PriorityQueue
         fruits.remove();

         System.out.println("Fruits in queue: " + fruits);  
```


### <a href="#priorityBlockingQueueClass" name="priorityBlockingQueueClass"><i class="fa fa-link anchor" aria-hidden="true"></i></a> PriorityBlockingQueue Class

*PriorityBlockingQueue<E&#xfeff;>* extends AbstractQueue<E&#xfeff;> Class and implements BlockingQueue<E&#xfeff;> and Serializable Interfaces. It represents an unbounded blocking queue and uses the same ordering as PriorityQueue. Instead of FIFO order, this queue orders its elements based on their natural ordering. Just like the PriorityQueue, *PriorityBlockingQueue* doesn't permit Null elements and insertion of non-comparable objects.
 
The ordering of elements with equal priority is not guaranteed but you can define custom classes or comparators that use a secondary key to break ties in primary priority values.

Some usual methods are listed below, for further information feel free to check the <a href="https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/PriorityBlockingQueue.html">official website</a>:
* boolean add(E e), boolean offer(E e), E peek(), E poll()
* int	drainTo(Collection<? super E> c) - *Removes all available elements from this queue and adds them to the given collection*

Constructors:
* PriorityBlockingQueue() - *Creates a PriorityBlockingQueue with the default initial capacity (11) that orders its elements according to their natural ordering*
* PriorityBlockingQueue(Collection<? extends E> c) - *Creates a PriorityBlockingQueue containing the elements in the specified collection*
* PriorityBlockingQueue(int initialCapacity) - *Creates a PriorityBlockingQueue with the specified initial capacity that orders its elements according to their natural ordering*
* PriorityBlockingQueue(int initialCapacity, Comparator<? super E> comparator) - *Creates a PriorityBlockingQueue with the specified initial capacity that orders its elements according to the specified comparator*

**Example**
```
         // Creating list of numbers
         LinkedList<Integer> list = new LinkedList<Integer>();
         list.add(5);
         list.add(25);
         list.add(2);
         list.add(15);    	
    	
         BlockingQueue<Integer> queue = new PriorityBlockingQueue<>(list);

          // Printing numbers in unspecified order
         System.out.println(queue);
```

If you liked this article, you might be interested in <a href="https://ivanursul.com/articles/java/lists">Lists</a>, <a href="https://ivanursul.com/articles/java/sets">Sets</a>, <a href="https://ivanursul.com/articles/java/maps">Maps</a>, <a href="https://ivanursul.com/articles/java/queues">Queues</a> and <a href="https://ivanursul.com/articles/java/deques">Deques</a>. Feel free to browse.
