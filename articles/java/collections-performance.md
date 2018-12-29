---
title:  "Collections Performance in Java"
date: 2018-12-28 00:00:00
---

### <a href="#collections-performance" name="collections-performance"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Collections Performance

Welcome to the blog about Collections in Java. In this article, I am going to introduce a performance of different Java Collections such as [List](https://ivanursul.com/articles/java/lists) (ArrayList, LinkedList, Vector, and Stack), [Set](https://ivanursul.com/articles/java/sets) (HashSet, TreeSet, and LinkedHashSet), and [Map](https://ivanursul.com/articles/java/maps) (HashMap, TreeMap, and LinkedHashMap). The results cover JDK, [Apache Commons](https://ivanursul.com/articles/java/open-source-collections), [Guava (Google)](https://ivanursul.com/articles/java/open-source-collections), [Fastutil](https://ivanursul.com/articles/java/open-source-collections), [Trove](https://ivanursul.com/articles/java/open-source-collections), and [Goldman Sachs (Eclipse)](https://ivanursul.com/articles/java/open-source-collections) Collections libraries. The method used to measure different Collection's sizes was:
```
long before = System.nanoTime();
Code to measure
long after = System.nanoTime();

float latency = (after - before) / (float)1000000;
```
Another good tool for this purpose is Java Microbenchmark Harness ([JMH](https://openjdk.java.net/projects/code-tools/jmh/)).

### <a href="#lists-performance" name="lists-performance"><i class="fa fa-link anchor" aria-hidden="true"></i></a> List's Performance

In this section we focus on List's Performance through different libraries. Measured methods are:
* add(int arg0)
* clear()
* contains(Object o)
* get(int index)
* indexOf(Object o)
* addAll(Collection<? extends E> c)
* remove(int index)

**Method add(int arg0)**

* 1st place Goldman Sachs IntLists.mutable.of
* 2nd place FastUtil IntArrayList
* 3rd place Trove TIntArrayList and JDK ArrayList
* last place Apache Commons NodeCachingLinkedList

The graph below shows that the best performans for this method has Goldman Sachs IntLists.mutable.of. At start, almost all libraries has same time, but from 10000 elements things are changing. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Add Method](https://programiranjepro.github.io/ivanursul/articles/java/addmetod.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of add method for 1 element is: 0.028225
Time of execution of add method for 100 elements is: 0.03409
Time of execution of add method for 10000 elements is: 3.538013
Time of execution of add method for 100000 elements is: 7.602769
Time of execution of add method for 1000000 elements is: 48.895103

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of add method for 1 element is: 0.082476
Time of execution of add method for 100 elements is: 0.031524
Time of execution of add method for 10000 elements is: 2.929528
Time of execution of add method for 100000 elements is: 9.845001
Time of execution of add method for 1000000 elements is: 75.00499

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of add method for 1 element is: 0.024193
Time of execution of add method for 100 elements is: 0.022727
Time of execution of add method for 10000 elements is: 3.853619
Time of execution of add method for 100000 elements is: 8.077461
Time of execution of add method for 1000000 elements is: 63.693398

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of add method for 1 element is: 0.024192
Time of execution of add method for 100 elements is: 0.023827
Time of execution of add method for 10000 elements is: 3.689034
Time of execution of add method for 100000 elements is: 7.626228
Time of execution of add method for 1000000 elements is: 62.85031

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of add method for 1 element is: 0.044354
Time of execution of add method for 100 elements is: 0.036656
Time of execution of add method for 10000 elements is: 4.238505
Time of execution of add method for 100000 elements is: 11.306465
Time of execution of add method for 1000000 elements is: 88.0878

FastUtil IntList list = new IntArrayList();
Time of execution of add method for 1 element is: 6.083754
Time of execution of add method for 100 elements is: 0.044353
Time of execution of add method for 10000 elements is: 6.344378
Time of execution of add method for 100000 elements is: 5.466472
Time of execution of add method for 1000000 elements is: 43.448425

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of add method for 1 element is: 0.528209
Time of execution of add method for 100 elements is: 0.024926
Time of execution of add method for 10000 elements is: 1.89327
Time of execution of add method for 100000 elements is: 5.612728
Time of execution of add method for 1000000 elements is: 67.50962

Trove TIntArrayList list = new TIntArrayList();
Time of execution of add method for 1 element is: 0.006232
Time of execution of add method for 100 elements is: 0.047285
Time of execution of add method for 10000 elements is: 3.757947
Time of execution of add method for 100000 elements is: 4.078318
Time of execution of add method for 1000000 elements is: 48.57693

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of add method for 1 element is: 0.01173
Time of execution of add method for 100 elements is: 0.041787
Time of execution of add method for 10000 elements is: 1.660139
Time of execution of add method for 100000 elements is: 5.583403
Time of execution of add method for 1000000 elements is: 32.41908
```

**Method clear()**

* 1st place FastUtil IntArrayList and Trove TIntArrayList
* 2nd place Trove TIntLinkedList and Apache Commons NodeCachingLinkedList
* 3rd place Goldman Sachs IntLists.mutable.of
* last place JDK LinkedList

The graph below shows that the best performans for this method has FastUtil IntArrayList followed by Trove TIntArrayList. At start, almost all libraries has same time, but from 10000 elements things are changing. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Clear Method](https://programiranjepro.github.io/ivanursul/articles/java/clear.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of clear method for 1 element is: 0.005498
Time of execution of clear method for 100 elements is: 0.002566
Time of execution of clear method for 10000 elements is: 0.161286
Time of execution of clear method for 100000 elements is: 1.591227
Time of execution of clear method for 1000000 elements is: 3.930963

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of clear method for 1 element is: 0.008431
Time of execution of clear method for 100 elements is: 0.003299
Time of execution of clear method for 10000 elements is: 0.389284
Time of execution of clear method for 100000 elements is: 2.88774
Time of execution of clear method for 1000000 elements is: 6.162565

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of clear method for 1 element is: 0.006965
Time of execution of clear method for 100 elements is: 0.002199
Time of execution of clear method for 10000 elements is: 0.162751
Time of execution of clear method for 100000 elements is: 1.642178
Time of execution of clear method for 1000000 elements is: 3.855085

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of clear method for 1 element is: 0.008431
Time of execution of clear method for 100 elements is: 0.002566
Time of execution of clear method for 10000 elements is: 0.162751
Time of execution of clear method for 100000 elements is: 1.656839
Time of execution of clear method for 1000000 elements is: 3.803768

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of clear method for 1 element is: 0.049119
Time of execution of clear method for 100 elements is: 0.004765
Time of execution of clear method for 10000 elements is: 0.005498
Time of execution of clear method for 100000 elements is: 0.005865
Time of execution of clear method for 1000000 elements is: 0.005131

FastUtil IntList list = new IntArrayList();
Time of execution of clear method for 1 element is: 0.005499
Time of execution of clear method for 100 elements is: 3.67E-4
Time of execution of clear method for 10000 elements is: 3.66E-4
Time of execution of clear method for 100000 elements is: 3.67E-4
Time of execution of clear method for 1000000 elements is: 3.66E-4

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of clear method for 1 element is: 0.002566
Time of execution of clear method for 100 elements is: 3.67E-4
Time of execution of clear method for 10000 elements is: 7.34E-4
Time of execution of clear method for 100000 elements is: 3.67E-4
Time of execution of clear method for 1000000 elements is: 0.0011

Trove TIntArrayList list = new TIntArrayList();
Time of execution of clear method for 1 element is: 0.005131
Time of execution of clear method for 100 elements is: 7.33E-4
Time of execution of clear method for 10000 elements is: 0.001099
Time of execution of clear method for 100000 elements is: 7.33E-4
Time of execution of clear method for 1000000 elements is: 7.33E-4

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of clear method for 1 element is: 0.031524
Time of execution of clear method for 100 elements is: 0.002566
Time of execution of clear method for 10000 elements is: 0.155787
Time of execution of clear method for 100000 elements is: 4.048995
Time of execution of clear method for 1000000 elements is: 0.836485
```

**Method contains(Object o) 1000 times in list of 1000000 elements**

* 1st place Goldman Sachs IntLists.mutable.of
* 2nd place FastUtil IntArrayList
* 3rd place Trove TIntArrayList
* last place JDK LinkedList

The graph below shows that the best performans for this method has Goldman Sachs IntLists.mutable.of. Difference between Collections is minimal, therefore many of them can share the first place. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Contain Method](https://programiranjepro.github.io/ivanursul/articles/java/contain.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.232398

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.378287

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.253658

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.255857

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.225067

FastUtil IntList list = new IntArrayList();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.12573

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.246327

Trove TIntArrayList list = new TIntArrayList();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.130494

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.089807
```

**Method get(int index) 1000 times in list of 1000000 elements**

* 1st place Goldman Sachs IntLists.mutable.of and Trove TIntArrayList
* 2nd place JDK ArrayList, JDK Vector, and JDK Stack
* 3rd place FastUtil IntArrayList
* last place Trove TIntLinkedList

The graph below shows that the best performans for this method has Goldman Sachs IntLists.mutable.of followed by Trove TIntArrayList. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Get Method](https://programiranjepro.github.io/ivanursul/articles/java/get.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.126096

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 22.030472

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.109601

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.116932

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 22.052832

FastUtil IntList list = new IntArrayList();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.225066

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of get method 1000 times in list of 1000000 elements is: 27.455156

Trove TIntArrayList list = new TIntArrayList();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.052051

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.058283
```

**Method indexOf(Object o) 1000 times in list of 1000000 elements**

* 1st place FastUtil IntArrayList and Goldman Sachs IntLists.mutable.of
* 2nd place Trove TIntArrayList
* 3rd place Apache Commons NodeCachingLinkedList
* last place Trove TIntLinkedList

The graph below shows that the best performans for this method has FastUtil IntArrayList along with Goldman Sachs IntLists.mutable.of. Difference between Collections is minimal, therefore many of them can share the first place. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![IndexOf Method](https://programiranjepro.github.io/ivanursul/articles/java/indexof.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.142591

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.120964

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.158719

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.175948

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.104835

FastUtil IntList list = new IntArrayList();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.057549

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.216269

Trove TIntArrayList list = new TIntArrayList();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.076977

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.057916
```

**Method addAll(Collection<? extends E> c)**

* 1st place JDK LinkedList
* 2nd place Apache Commons NodeCachingLinkedList
* 3rd place JDK ArrayList
* last place JDK Vector

The graph below shows that the best performans for this method has JDK LinkedList. At start, all libraries has similar time, but from 100000 elements things are changing. You can see a big difference between first place and other places. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![AddAll Method](https://programiranjepro.github.io/ivanursul/articles/java/addall.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of add all method for 1 elements is: 0.043254
Time of execution of add all method for 100 elements is: 1.390719
Time of execution of add all method for 10000 elements is: 45.18884
Time of execution of add all method for 100000 elements is: 1620.8413
Time of execution of add all method for 1000000 elements is: 214019.81

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of add all method for 1 elements is: 0.040321
Time of execution of add all method for 100 elements is: 0.03189
Time of execution of add all method for 10000 elements is: 3.135899
Time of execution of add all method for 100000 elements is: 22.968126
Time of execution of add all method for 1000000 elements is: 47.315975

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of add all method for 1 elements is: 0.039222
Time of execution of add all method for 100 elements is: 0.540672
Time of execution of add all method for 10000 elements is: 55.87326
Time of execution of add all method for 100000 elements is: 1590.8302
Time of execution of add all method for 1000000 elements is: 240943.81

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of add all method for 1 elements is: 0.037022
Time of execution of add all method for 100 elements is: 0.552036
Time of execution of add all method for 10000 elements is: 47.70489
Time of execution of add all method for 100000 elements is: 1638.6941
Time of execution of add all method for 1000000 elements is: 235695.6

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of add all method for 1 elements is: 0.026025
Time of execution of add all method for 100 elements is: 0.013929
Time of execution of add all method for 10000 elements is: 3.253931
Time of execution of add all method for 100000 elements is: 15.56623
Time of execution of add all method for 1000000 elements is: 83.23311

FastUtil IntList list = new IntArrayList();
Time of execution of add all method for 1 elements is: 0.030058
Time of execution of add all method for 100 elements is: 0.622415
Time of execution of add all method for 10000 elements is: 50.1403
Time of execution of add all method for 100000 elements is: 1606.1392
Time of execution of add all method for 1000000 elements is: 222768.55
```

**Method remove(int index) 1000 times**

* 1st place Trove TIntLinkedList
* 2nd place FastUtil IntArrayList and JDK ArrayList
* 3rd place JDK Stack
* last place Goldman Sachs IntLists.mutable.of

The graph below shows that the best performans for this method has Trove TIntLinkedList. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Remove Method](https://programiranjepro.github.io/ivanursul/articles/java/remove.png)

```
JDK List<Integer> list = new ArrayList<Integer>();
Time of execution of remove method 1000 time is: 0.49412

JDK List<Integer> list = new LinkedList<Integer>();
Time of execution of remove method 1000 time is: 0.665669

JDK List<Integer> vector = new Vector<Integer>();
Time of execution of remove method 1000 time is: 0.744479

JDK List<Integer> stack = new Stack<Integer>();
Time of execution of remove method 1000 time is: 0.57403

Apache Commons List<Integer> list = new NodeCachingLinkedList<Integer>();
Time of execution of remove method 1000 time is: 0.898066

FastUtil IntList list = new IntArrayList();
Time of execution of remove method 1000 time is: 0.470293

Trove TIntLinkedList list = new TIntLinkedList();
Time of execution of indexOf method 1000 times in list of 1000000 elements is: 0.216269

Trove TIntArrayList list = new TIntArrayList();
Time of execution of remove method 1000 time is: 6.222313

Goldman Sachs IntList list = IntLists.mutable.of();
Time of execution of remove method 1000 time is: 8.781618
```

### <a href="#sets-performance" name="sets-performance"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Set's Performance
In this section we focus on Set's Performance through different libraries. Measured methods are:
* add(int arg0)
* clear()
* contains(Object o)
* addAll(Collection<? extends E> c)
* remove(int index)

**Method add(int arg0)**

* 1st place JDK TreeSet and Trove TIntHashSet
* 2nd place FastUtil IntLinkedOpenHashSet
* 3rd place FastUtil IntAVLTreeSet
* last place Guava HashMultiset

The graph below shows that the best performans for this method has JDK TreeSet followed by Trove TIntHashSet. At start, almost all libraries has same time, but from 100 elements things are changing. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Add Method](https://programiranjepro.github.io/ivanursul/articles/java/addset.png)

```
JDK Set<String> hashSet = new HashSet<>();
Time of execution of add method for 1 element is: 0.024192
Time of execution of add method for 100 elements is: 0.052417
Time of execution of add method for 10000 elements is: 5.827898
Time of execution of add method for 100000 elements is: 9.43519
Time of execution of add method for 1000000 elements is: 25.071432

JDK Set<String> treeSet = new TreeSet<>();
Time of execution of add method for 1 element is: 0.183279
Time of execution of add method for 100 elements is: 0.035189
Time of execution of add method for 10000 elements is: 2.34047
Time of execution of add method for 100000 elements is: 19.956856
Time of execution of add method for 1000000 elements is: 8.722969

JDK Set<String> linkedHashSet = new LinkedHashSet<>();
Time of execution of add method for 1 element is: 0.030424
Time of execution of add method for 100 elements is: 0.063048
Time of execution of add method for 10000 elements is: 6.516659
Time of execution of add method for 100000 elements is: 9.862963
Time of execution of add method for 1000000 elements is: 38.625263

Guava HashMultiset<Integer> set = HashMultiset.create();
Time of execution of add method for 1 element is: 0.418975
Time of execution of add method for 100 elements is: 0.683997
Time of execution of add method for 10000 elements is: 10.125784
Time of execution of add method for 100000 elements is: 111.816895
Time of execution of add method for 1000000 elements is: 79.42677

Guava TreeMultiset<Integer> set = TreeMultiset.create();
Time of execution of add method for 1 element is: 1.032592
Time of execution of add method for 100 elements is: 0.10337
Time of execution of add method for 10000 elements is: 6.089987
Time of execution of add method for 100000 elements is: 36.79834
Time of execution of add method for 1000000 elements is: 15.124163

FastUtil IntAVLTreeSet set = new IntAVLTreeSet();
Time of execution of add method for 1 element is: 4.84699
Time of execution of add method for 100 elements is: 0.056083
Time of execution of add method for 10000 elements is: 3.924732
Time of execution of add method for 100000 elements is: 18.144964
Time of execution of add method for 1000000 elements is: 11.543995

FastUtil IntLinkedOpenHashSet set = new IntLinkedOpenHashSet();
Time of execution of add method for 1 element is: 0.009164
Time of execution of add method for 100 elements is: 0.00953
Time of execution of add method for 10000 elements is: 0.730916
Time of execution of add method for 100000 elements is: 15.341897
Time of execution of add method for 1000000 elements is: 9.372142

Trove TIntHashSet set = new TIntHashSet();
Time of execution of add method for 1 element is: 0.018695
Time of execution of add method for 100 elements is: 0.013196
Time of execution of add method for 10000 elements is: 0.939487
Time of execution of add method for 100000 elements is: 21.216715
Time of execution of add method for 1000000 elements is: 8.818273

Trove TLinkedHashSet<Integer> list = new TLinkedHashSet<Integer>();
Time of execution of add method for 1 element is: 0.045087
Time of execution of add method for 100 elements is: 0.024926
Time of execution of add method for 10000 elements is: 3.36793
Time of execution of add method for 100000 elements is: 10.301366
Time of execution of add method for 1000000 elements is: 37.216217

Goldman Sachs MutableIntSet list = IntSets.mutable.of();
Time of execution of add method for 1 element is: 0.012096
Time of execution of add method for 100 elements is: 0.008797
Time of execution of add method for 10000 elements is: 1.364694
Time of execution of add method for 100000 elements is: 6.355008
Time of execution of add method for 1000000 elements is: 29.875902
```

**Method clear()**

* 1st place FastUtil IntAVLTreeSet
* 2nd place Goldman Sachs IntSets.mutable.of, Trove TIntHashSet, FastUtil IntLinkedOpenHashSet, and HashSet
* 3rd place Trove TLinkedHashSet
* last place Guava TreeMultiset

The graph below shows that the best performans for this method has FastUtil IntAVLTreeSet. Difference between Collections is minimal, therefore many of them can share the first place. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Clear Method](https://programiranjepro.github.io/ivanursul/articles/java/clearset.png)

```
JDK Set<String> hashSet = new HashSet<>();
Time of execution of clear method for 1 element is: 0.006964
Time of execution of clear method for 100 elements is: 0.0011
Time of execution of clear method for 10000 elements is: 0.002199
Time of execution of clear method for 100000 elements is: 0.002199
Time of execution of clear method for 1000000 elements is: 0.001833

JDK Set<String> treeSet = new TreeSet<>();
Time of execution of clear method for 1 element is: 0.00953
Time of execution of clear method for 100 elements is: 3.67E-4
Time of execution of clear method for 10000 elements is: 0.0011
Time of execution of clear method for 100000 elements is: 0.009164
Time of execution of clear method for 1000000 elements is: 0.001099

JDK Set<String> linkedHashSet = new LinkedHashSet<>();
Time of execution of clear method for 1 element is: 0.010264
Time of execution of clear method for 100 elements is: 0.001832
Time of execution of clear method for 10000 elements is: 0.002565
Time of execution of clear method for 100000 elements is: 0.002566
Time of execution of clear method for 1000000 elements is: 0.002932

Guava HashMultiset<Integer> set = HashMultiset.create();
Time of execution of clear method for 1 element is: 1.200476
Time of execution of clear method for 100 elements is: 0.004765
Time of execution of clear method for 10000 elements is: 0.006232
Time of execution of clear method for 100000 elements is: 0.024193
Time of execution of clear method for 1000000 elements is: 0.007331

Guava TreeMultiset<Integer> set = TreeMultiset.create();
Time of execution of clear method for 1 element is: 29.857574
Time of execution of clear method for 100 elements is: 0.009897
Time of execution of clear method for 10000 elements is: 0.014296
Time of execution of clear method for 100000 elements is: 0.049485
Time of execution of clear method for 1000000 elements is: 0.015029

FastUtil IntAVLTreeSet set = new IntAVLTreeSet();
Time of execution of clear method for 1 element is: 0.004765
Time of execution of clear method for 100 elements is: 0.0011
Time of execution of clear method for 10000 elements is: 7.33E-4
Time of execution of clear method for 100000 elements is: 0.0
Time of execution of clear method for 1000000 elements is: 3.66E-4

FastUtil IntLinkedOpenHashSet set = new IntLinkedOpenHashSet();
Time of execution of clear method for 1 element is: 0.041421
Time of execution of clear method for 100 elements is: 0.001099
Time of execution of clear method for 10000 elements is: 0.001467
Time of execution of clear method for 100000 elements is: 0.012096
Time of execution of clear method for 1000000 elements is: 0.001833

Trove TIntHashSet set = new TIntHashSet();
Time of execution of clear method for 1 element is: 0.012096
Time of execution of clear method for 100 elements is: 0.0011
Time of execution of clear method for 10000 elements is: 0.001833
Time of execution of clear method for 100000 elements is: 0.01283
Time of execution of clear method for 1000000 elements is: 0.001833

Trove TLinkedHashSet<Integer> list = new TLinkedHashSet<Integer>();
Time of execution of clear method for 1 element is: 0.025659
Time of execution of clear method for 100 elements is: 0.005132
Time of execution of clear method for 10000 elements is: 0.004765
Time of execution of clear method for 100000 elements is: 0.004398
Time of execution of clear method for 1000000 elements is: 0.005132

Goldman Sachs MutableIntSet list = IntSets.mutable.of();
Time of execution of clear method for 1 element is: 0.034823
Time of execution of clear method for 100 elements is: 7.33E-4
Time of execution of clear method for 10000 elements is: 0.001099
Time of execution of clear method for 100000 elements is: 0.001833
Time of execution of clear method for 1000000 elements is: 0.001833
```

**Method contains(Object o) 1000 times in list of 1000000 elements**

* 1st place Goldman Sachs IntSets.mutable.of
* 2nd place Trove TLinkedHashSet
* 3rd place FastUtil IntLinkedOpenHashSet
* last place Guava HashMultiset

The graph below shows that the best performans for this method has Goldman Sachs IntSets.mutable.of. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Contain Method](https://programiranjepro.github.io/ivanursul/articles/java/containset.png)

```
JDK Set<String> hashSet = new HashSet<>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.791397

JDK Set<String> treeSet = new TreeSet<>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.752909

JDK Set<String> linkedHashSet = new LinkedHashSet<>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.910528

Guava HashMultiset<Integer> set = HashMultiset.create();
Time of execution of contains method 1000 times in list of 1000000 elements is: 37.85329

Guava TreeMultiset<Integer> set = TreeMultiset.create();
Time of execution of contains method 1000 times in list of 1000000 elements is: 1.159421

FastUtil IntAVLTreeSet set = new IntAVLTreeSet();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.691694

FastUtil IntLinkedOpenHashSet set = new IntLinkedOpenHashSet();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.394416

Trove TIntHashSet set = new TIntHashSet();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.633044

Trove TLinkedHashSet<Integer> list = new TLinkedHashSet<Integer>();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.191343

Goldman Sachs MutableIntSet list = IntSets.mutable.of();
Time of execution of contains method 1000 times in list of 1000000 elements is: 0.148089
```

**Method addAll(Collection<? extends E> c)**

* 1st place Guava TreeMultiset
* 2nd place Guava HashMultiset

The graph below shows that the best performans for this method has FastUtil IntArrayList followed by Guava TreeMultiset. At start, both libraries has same time, but from 10000 elements things are changing. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![AddAll Method](https://programiranjepro.github.io/ivanursul/articles/java/addallset.png)

```
Guava HashMultiset<Integer> set = HashMultiset.create();
Time of execution of add all method for 1 elements is: 0.046919
Time of execution of add all method for 100 elements is: 0.026392
Time of execution of add all method for 10000 elements is: 1.189113
Time of execution of add all method for 100000 elements is: 11.732039
Time of execution of add all method for 1000000 elements is: 85.06993

Guava TreeMultiset<Integer> set = TreeMultiset.create();
Time of execution of add all method for 1 elements is: 0.173016
Time of execution of add all method for 100 elements is: 1.426275
Time of execution of add all method for 10000 elements is: 1.278186
Time of execution of add all method for 100000 elements is: 6.759687
Time of execution of add all method for 1000000 elements is: 36.753983
```

**Method remove(int index) 1000 times**

* 1st place Trove TIntHashSet
* 2nd place Goldman Sachs IntSets.mutable.of
* 3rd place Trove TLinkedHashSet
* last place FastUtil IntAVLTreeSet

The graph below shows that the best performans for this method has Trove TIntHashSet. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Remove Method](https://programiranjepro.github.io/ivanursul/articles/java/removeset.png)

```
JDK Set<String> hashSet = new HashSet<>();
Time of execution of remove method 1000 time is: 0.245594

JDK Set<String> treeSet = new TreeSet<>();
Time of execution of remove method 1000 time is: 0.300577

JDK Set<String> linkedHashSet = new LinkedHashSet<>();
Time of execution of remove method 1000 time is: 0.248526

Guava HashMultiset<Integer> set = HashMultiset.create();
Time of execution of remove method 1000 time is: 0.441702

Guava TreeMultiset<Integer> set = TreeMultiset.create();
Time of execution of remove method 1000 time is: 1.303112

FastUtil IntAVLTreeSet set = new IntAVLTreeSet();
Time of execution of remove method 1000 time is: 5.042365

FastUtil IntLinkedOpenHashSet set = new IntLinkedOpenHashSet();
Time of execution of remove method 1000 time is: 0.462229

Trove TIntHashSet set = new TIntHashSet();
Time of execution of remove method 1000 time is: 0.025659

Trove TLinkedHashSet<Integer> list = new TLinkedHashSet<Integer>();
Time of execution of remove method 1000 time is: 0.131961

Goldman Sachs MutableIntSet list = IntSets.mutable.of();
Time of execution of remove method 1000 time is: 0.092739
```

### <a href="#maps-performance" name="maps-performance"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Map's Performance
In this section we focus on Map's Performance through different libraries. Measured methods are:
* put(Integer key, Integer value)
* clear()
* containsKey(Object key)
* containsValue(Object value)
* get(Object key)
* remove(Object key)

**Method put(Integer key, Integer value)**

* 1st place Trove TIntIntHashMap and FastUtil Int2IntOpenHashMap
* 2nd place FastUtil Int2IntLinkedOpenHashMap and FastUtil Int2IntAVLTreeMap
* 3rd place JDK HashMap
* last place FastUtil Int2IntArrayMap

The graph below shows that the best performans for this method has Trove TIntIntHashMap followed by FastUtil Int2IntOpenHashMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Put Method](https://programiranjepro.github.io/ivanursul/articles/java/putmap.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.026026
Time of execution of put method for 100 elements is: 0.07881
Time of execution of put method for 10000 elements is: 10.342786
Time of execution of put method for 100000 elements is: 26.850336
Time of execution of put method for 1000000 elements is: 1001.956

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.122063
Time of execution of put method for 100 elements is: 0.297278
Time of execution of put method for 10000 elements is: 16.191578
Time of execution of put method for 100000 elements is: 32.871044
Time of execution of put method for 1000000 elements is: 1315.7097

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.035189
Time of execution of put method for 100 elements is: 0.097137
Time of execution of put method for 10000 elements is: 11.62757
Time of execution of put method for 100000 elements is: 32.163956
Time of execution of put method for 1000000 elements is: 1674.4178

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.137826
Time of execution of put method for 100 elements is: 0.105568
Time of execution of put method for 10000 elements is: 8.608236
Time of execution of put method for 100000 elements is: 39.152008
Time of execution of put method for 1000000 elements is: 1174.3717

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.046919
Time of execution of put method for 100 elements is: 0.110701
Time of execution of put method for 10000 elements is: 13.546498
Time of execution of put method for 100000 elements is: 51.70623
Time of execution of put method for 1000000 elements is: 2027.5658

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.03189
Time of execution of put method for 100 elements is: 0.176314
Time of execution of put method for 10000 elements is: 23.105951
Time of execution of put method for 100000 elements is: 32.909164
Time of execution of put method for 1000000 elements is: 2325.311

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.035556
Time of execution of put method for 100 elements is: 0.215536
Time of execution of put method for 10000 elements is: 30.313938
Time of execution of put method for 100000 elements is: 89.873665
Time of execution of put method for 1000000 elements is: 2343.1328

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.144057
Time of execution of put method for 100 elements is: 0.635244
Time of execution of put method for 10000 elements is: 42.464584
Time of execution of put method for 100000 elements is: 96.78327
Time of execution of put method for 1000000 elements is: 2612.4736

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.895134
Time of execution of put method for 100 elements is: 12.686189
Time of execution of put method for 10000 elements is: 66.61816
Time of execution of put method for 100000 elements is: 189.60846
Time of execution of put method for 1000000 elements is: 3680.5173

Guava TreeMultimap<Integer, Integer> map = TreeMultimap.create();
Time of execution of put method for 1 element is: 13.791359
Time of execution of put method for 100 elements is: 0.736047
Time of execution of put method for 10000 elements is: 29.228928
Time of execution of put method for 100000 elements is: 123.86234
Time of execution of put method for 1000000 elements is: 2308.3633

Guava LinkedListMultimap<Integer, Integer> map = LinkedListMultimap.create();
Time of execution of put method for 1 element is: 1.490056
Time of execution of put method for 100 elements is: 0.158353
Time of execution of put method for 10000 elements is: 22.566011
Time of execution of put method for 100000 elements is: 62.786537
Time of execution of put method for 1000000 elements is: 2599.595

Guava LinkedHashMultimap<Integer, Integer> list = LinkedHashMultimap.create();
Time of execution of put method for 1 element is: 1.405748
Time of execution of put method for 100 elements is: 1.225401
Time of execution of put method for 10000 elements is: 13.853307
Time of execution of put method for 100000 elements is: 77.860115
Time of execution of put method for 1000000 elements is: 2812.2112

Guava HashMultimap<Integer, Integer> map = HashMultimap.create();
Time of execution of put method for 1 element is: 37.75359
Time of execution of put method for 100 elements is: 0.265021
Time of execution of put method for 10000 elements is: 60.028557
Time of execution of put method for 100000 elements is: 45.200573
Time of execution of put method for 1000000 elements is: 2099.4849

Guava HashBiMap<Integer, Integer> map = HashBiMap.create();
Time of execution of put method for 1 element is: 0.236063
Time of execution of put method for 100 elements is: 0.129395
Time of execution of put method for 10000 elements is: 18.181984
Time of execution of put method for 100000 elements is: 41.91255
Time of execution of put method for 1000000 elements is: 1821.4396

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of put method for 1 element is: 0.012829
Time of execution of put method for 100 elements is: 0.091273
Time of execution of put method for 10000 elements is: 41.077534
Time of execution of put method for 100000 elements is: 3903.9836
Time of execution of put method for 1000000 elements is: 394607.9

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of put method for 1 element is: 4.815466
Time of execution of put method for 100 elements is: 1.091242
Time of execution of put method for 10000 elements is: 8.193293
Time of execution of put method for 100000 elements is: 33.95972
Time of execution of put method for 1000000 elements is: 561.5199

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of put method for 1 element is: 0.017961
Time of execution of put method for 100 elements is: 0.094206
Time of execution of put method for 10000 elements is: 8.879122
Time of execution of put method for 100000 elements is: 61.80416
Time of execution of put method for 1000000 elements is: 552.45935

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of put method for 1 element is: 0.013196
Time of execution of put method for 100 elements is: 0.065248
Time of execution of put method for 10000 elements is: 6.63579
Time of execution of put method for 100000 elements is: 30.649338
Time of execution of put method for 1000000 elements is: 90.5573

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of put method for 1 element is: 0.023826
Time of execution of put method for 100 elements is: 0.428506
Time of execution of put method for 10000 elements is: 2.551973
Time of execution of put method for 100000 elements is: 24.942404
Time of execution of put method for 1000000 elements is: 63.675434

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of put method for 1 element is: 0.03299
Time of execution of put method for 100 elements is: 0.253658
Time of execution of put method for 10000 elements is: 16.25536x
Time of execution of put method for 100000 elements is: 29.896427
Time of execution of put method for 1000000 elements is: 1129.8365
```

**Method clear()**

* 1st place JDK TreeMap
* 2nd place FastUtil Int2IntArrayMap and FastUtil Int2IntAVLTreeMap
* 3rd place Appache Commons DualTreeBidiMap and Appache Commons TreeBidiMap
* last place Guava HashMultimap

The graph below shows that the best performans for this method has JDK TreeMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Clear Method](https://programiranjepro.github.io/ivanursul/articles/java/clearmap.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.005865
Time of execution of clear method for 100 elements is: 0.004765
Time of execution of clear method for 10000 elements is: 0.270886
Time of execution of clear method for 100000 elements is: 4.483732
Time of execution of clear method for 1000000 elements is: 8.011847

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.004399
Time of execution of clear method for 100 elements is: 3.66E-4
Time of execution of clear method for 10000 elements is: 7.33E-4
Time of execution of clear method for 100000 elements is: 0.010264
Time of execution of clear method for 1000000 elements is: 3.67E-4

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.008064
Time of execution of clear method for 100 elements is: 0.004766
Time of execution of clear method for 10000 elements is: 0.267221
Time of execution of clear method for 100000 elements is: 4.763415
Time of execution of clear method for 1000000 elements is: 7.95723

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.004766
Time of execution of clear method for 100 elements is: 0.004399
Time of execution of clear method for 10000 elements is: 0.538106
Time of execution of clear method for 100000 elements is: 4.82133
Time of execution of clear method for 1000000 elements is: 1.784035

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.006598
Time of execution of clear method for 100 elements is: 0.004398
Time of execution of clear method for 10000 elements is: 0.24376
Time of execution of clear method for 100000 elements is: 4.907839
Time of execution of clear method for 1000000 elements is: 1.806396

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.007698
Time of execution of clear method for 100 elements is: 0.008431
Time of execution of clear method for 10000 elements is: 0.526743
Time of execution of clear method for 100000 elements is: 7.770285
Time of execution of clear method for 1000000 elements is: 15.385152

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.011363
Time of execution of clear method for 100 elements is: 0.00953
Time of execution of clear method for 10000 elements is: 0.651006
Time of execution of clear method for 100000 elements is: 8.806177
Time of execution of clear method for 1000000 elements is: 14.483053

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.006964
Time of execution of clear method for 100 elements is: 7.33E-4
Time of execution of clear method for 10000 elements is: 0.001833
Time of execution of clear method for 100000 elements is: 0.001833
Time of execution of clear method for 1000000 elements is: 0.0011

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.004765
Time of execution of clear method for 100 elements is: 0.0011
Time of execution of clear method for 10000 elements is: 0.001466
Time of execution of clear method for 100000 elements is: 0.002199
Time of execution of clear method for 1000000 elements is: 0.001467

Guava TreeMultimap<Integer, Integer> map = TreeMultimap.create();
Time of execution of clear method for 1 element is: 0.284082
Time of execution of clear method for 100 elements is: 0.037022
Time of execution of clear method for 10000 elements is: 4.280659
Time of execution of clear method for 100000 elements is: 9.239081
Time of execution of clear method for 1000000 elements is: 43.074173

Guava LinkedListMultimap<Integer, Integer> map = LinkedListMultimap.create();
Time of execution of clear method for 1 element is: 0.009164
Time of execution of clear method for 100 elements is: 0.005132
Time of execution of clear method for 10000 elements is: 0.281883
Time of execution of clear method for 100000 elements is: 4.437545
Time of execution of clear method for 1000000 elements is: 7.96786

Guava LinkedHashMultimap<Integer, Integer> map = LinkedHashMultimap.create();
Time of execution of clear method for 1 element is: 22.11698
Time of execution of clear method for 100 elements is: 0.360692
Time of execution of clear method for 10000 elements is: 3.78104
Time of execution of clear method for 100000 elements is: 13.388879
Time of execution of clear method for 1000000 elements is: 48.333534

Guava HashMultimap<Integer, Integer> map = HashMultimap.create();
Time of execution of clear method for 1 element is: 0.284448
Time of execution of clear method for 100 elements is: 0.041787
Time of execution of clear method for 10000 elements is: 7.118913
Time of execution of clear method for 100000 elements is: 15.242927
Time of execution of clear method for 1000000 elements is: 51.180958

Guava HashBiMap<Integer, Integer> map = HashBiMap.create();
Time of execution of clear method for 1 element is: 0.03299
Time of execution of clear method for 100 elements is: 0.004399
Time of execution of clear method for 10000 elements is: 0.61655
Time of execution of clear method for 100000 elements is: 33.430042
Time of execution of clear method for 1000000 elements is: 2.332038

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of clear method for 1 element is: 0.003299
Time of execution of clear method for 100 elements is: 7.33E-4
Time of execution of clear method for 10000 elements is: 7.33E-4
Time of execution of clear method for 100000 elements is: 7.33E-4
Time of execution of clear method for 1000000 elements is: 7.33E-4

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of clear method for 1 element is: 0.006598
Time of execution of clear method for 100 elements is: 3.66E-4
Time of execution of clear method for 10000 elements is: 3.66E-4
Time of execution of clear method for 100000 elements is: 0.012463
Time of execution of clear method for 1000000 elements is: 7.33E-4

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of clear method for 1 element is: 0.163484
Time of execution of clear method for 100 elements is: 0.004032
Time of execution of clear method for 10000 elements is: 0.3365
Time of execution of clear method for 100000 elements is: 3.540945
Time of execution of clear method for 1000000 elements is: 5.79894

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of clear method for 1 element is: 0.12353
Time of execution of clear method for 100 elements is: 0.004032
Time of execution of clear method for 10000 elements is: 0.219201
Time of execution of clear method for 100000 elements is: 4.090781
Time of execution of clear method for 1000000 elements is: 1.794666

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of clear method for 1 element is: 0.020894
Time of execution of clear method for 100 elements is: 0.016861
Time of execution of clear method for 10000 elements is: 1.035158
Time of execution of clear method for 100000 elements is: 3.204445
Time of execution of clear method for 1000000 elements is: 6.376267

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of clear method for 1 element is: 0.011364
Time of execution of clear method for 100 elements is: 0.017229
Time of execution of clear method for 10000 elements is: 0.966612
Time of execution of clear method for 100000 elements is: 4.733724
Time of execution of clear method for 1000000 elements is: 26.129318
```

**Method containsKey(Object key) 1000 times in list of 1000000 elements**

* 1st place FastUtil Int2IntOpenHashMap
* 2nd place Trove TIntIntHashMap
* 3rd place JDK HashMap and Guava LinkedListMultimap
* last place FastUtil Int2IntArrayMap

The graph below shows that the best performans for this method has FastUtil Int2IntOpenHashMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Contain Method](https://programiranjepro.github.io/ivanursul/articles/java/containkey.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.238629

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.624583

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.27785

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.012065

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.593456

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.276017

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.288847

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.451201

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.637045

Guava TreeMultimap<Integer, Integer> map = TreeMultimap.create();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 2.122735

Guava LinkedListMultimap<Integer, Integer> map = LinkedListMultimap.create();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.25879

Guava LinkedHashMultimap<Integer, Integer> map = LinkedHashMultimap.create();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.860677

Guava HashMultimap<Integer, Integer> map = HashMultimap.create();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.163454

Guava HashBiMap<Integer, Integer> map = HashBiMap.create();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 1.088675

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 652.48334

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 2.712892

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.479457

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.108501

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.195009

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of containsKey method 1000 times in list of 1000000 elements is: 0.336866
```

**Method containsValue(Object value) 1000 times in list of 1000000 elements**

* 1st place FastUtil Int2IntOpenHashMap
* 2nd place JDK LinkedHashMap
* 3rd place JDK HashMap
* last place Trove TIntIntHashMap and Apache Commons HashedMap

The graph below shows that the best performans for this method has FastUtil Int2IntOpenHashMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Contain Method](https://programiranjepro.github.io/ivanursul/articles/java/containvalue.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.127562

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.478358

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.107768

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 3463.4895

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.168617

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.197574

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.203073

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 1.870909

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.71662

Guava TreeMultimap<Integer, Integer> map = TreeMultimap.create();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 45.571896

Guava LinkedListMultimap<Integer, Integer> map = LinkedListMultimap.create();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 27.294603

Guava LinkedHashMultimap<Integer, Integer> map = LinkedHashMultimap.create();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 25.487476

Guava HashMultimap<Integer, Integer> map = HashMultimap.create();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 16.811792

Guava HashBiMap<Integer, Integer> map = HashBiMap.create();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.865442

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 759.09546

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 45.072277

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 8.402598

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.062681

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 3610.2544

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of containsValue method 1000 times in list of 1000000 elements is: 0.258423
```

**Method get(Object key) 1000 times in list of 1000000 elements**

* 1st place Trove TIntIntHashMap
* 2nd place FastUtil Int2IntOpenHashMap and FastUtil Int2IntAVLTreeMap
* 3rd place JDK LinkedHashMap, Apache Commons LinkedMap,Apache Commons DualHashBidiMap, and Apache Commons DualTreeBidiMap
* last place FastUtil Int2IntArrayMap

The graph below shows that the best performans for this method has Trove TIntIntHashMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Get Method](https://programiranjepro.github.io/ivanursul/articles/java/getmap.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.708189

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 1.547972

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.164585

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.688395

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.163851

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.181813

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.271619

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.191343

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.533708

Guava TreeMultimap<Integer, Integer> map = TreeMultimap.create();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.936921

Guava LinkedListMultimap<Integer, Integer> map = LinkedListMultimap.create();
Time of execution of get method 1000 times in list of 1000000 elements is: 18.999409

Guava LinkedHashMultimap<Integer, Integer> map = LinkedHashMultimap.create();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.565232

Guava HashMultimap<Integer, Integer> map = HashMultimap.create();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.576228

Guava HashBiMap<Integer, Integer> map = HashBiMap.create();
Time of execution of get method 1000 times in list of 1000000 elements is: 13.221362

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of get method 1000 times in list of 1000000 elements is: 927.51654

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.127929

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of get method 1000 times in list of 1000000 elements is: 8.221151

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.094572

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.031157

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of get method 1000 times in list of 1000000 elements is: 0.291413
```

**Method remove(Object key) 1000 times**

* 1st place Appache Commons TreeBidiMap
* 2nd place Apache Commons DualHashBidiMap
* 3rd place JDK LinkedHashMap
* last place Apache Commons LinkedMap

The graph below shows that the best performans for this method has Appache Commons TreeBidiMap. After graphic illustration of performance, you can find an exact measure expressed in miliseconds.

![Remove Method](https://programiranjepro.github.io/ivanursul/articles/java/removemap.png)

```
JDK Map<Integer, Integer> map = new HashMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.230931

JDK Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.969545

JDK Map<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.210038

Apache Commons HashedMap<Integer, Integer> map = new HashedMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.756575

Apache Commons LinkedMap<Integer, Integer> map = new LinkedMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 1.12863

Apache Commons DualHashBidiMap<Integer, Integer> map = new DualHashBidiMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.112533

Apache Commons DualLinkedHashBidiMap<Integer, Integer> map = new DualLinkedHashBidiMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.292147

Appache Commons DualTreeBidiMap<Integer, Integer> map = new  DualTreeBidiMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.349696

Appache Commons TreeBidiMap<Integer, Integer> map = new  TreeBidiMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.074044

FastUtil Int2IntArrayMap map = new Int2IntArrayMap();
Time of execution of remove method 1000 time is: 0.740812

FastUtil Int2IntAVLTreeMap list = new  Int2IntAVLTreeMap();
Time of execution of remove method 1000 time is: 0.754375

FastUtil Int2IntLinkedOpenHashMap list = new   Int2IntLinkedOpenHashMap();
Time of execution of remove method 1000 time is: 0.388551

FastUtil Int2IntOpenHashMap list = new  Int2IntOpenHashMap();
Time of execution of remove method 1000 time is: 0.466994

Trove TIntIntHashMap map = new TIntIntHashMap();
Time of execution of remove method 1000 time is: 0.359593

Goldman Sachs HashBiMap<Integer, Integer> map = new HashBiMap<Integer, Integer>();
Time of execution of remove method 1000 time is: 0.340899
```

### <a href="#conclusion" name="conclusion"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Conclusion

According to the test I made, below you can find the best solutions for Collection choice if a method performance is a landmark:
* The best performance for Add method has Set
* Clear method has same performance for List, Set, and Map
* The best performance for Contains method has List
* The best performance for Get method has Map
* The best performance for IndexOf method has List
* The best performance for AddAll method has Set(Guava), otherwise List
* The best performance for Remove method has Set

Below you can find the winner announcement - 1st places:
* Trove 7
* FastUtil 6
* Goldman Sachs 5
* JDK 3
* Guava and Apache Commons 1

Last places:
* Guava and FastUtil 4
* JDK, Trove, and Apache Commons 3
* Goldman Sachs 1
