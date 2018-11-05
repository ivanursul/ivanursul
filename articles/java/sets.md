---
title:  "Sets in Java"
date: 2018-11-05 00:00:00
---

### <a href="#overview" name="overview"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Overview

A [Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html) is a [Collection](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html) which cannot contain duplicated elements. In other words, the same object cannot occur more than once in a Set.

### <a href="#interface" name="interface"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Interface

A Set interface contains only methods, inherited from Collection interface + it adds it's own methods:

```
public interface Set<E> extends Collection<E> {
    int size();
    boolean isEmpty();
    boolean contains(Object o);
    Iterator<E> iterator();
    Object[] toArray();
    <T> T[] toArray(T[] a);
    boolean add(E e);
    boolean remove(Object o);
    boolean containsAll(Collection<?> c);
    boolean addAll(Collection<? extends E> c);
    boolean retainAll(Collection<?> c);
    boolean removeAll(Collection<?> c);
    void clear();
    boolean equals(Object o);
    int hashCode();
    default Spliterator<E> spliterator() { /* ... */ }
}
```

### <a href="#when_to_use" name="when_to_use"><i class="fa fa-link anchor" aria-hidden="true"></i></a> When to use

### <a href="#implementations" name="implementations"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Implementations

Set interface has three basic implementations, available in Collections framework: [HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html), [TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html) and [LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html).

### <a href="#how-to-create" name="how-to-create"><i class="fa fa-link anchor" aria-hidden="true"></i></a> How to create

### <a href="#set-methods" name="set-methods"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Reviewing Set methods

### <a href="#concurrency" name="concurrency"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Concurrency

### <a href="#performance" name="performance"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Performance
