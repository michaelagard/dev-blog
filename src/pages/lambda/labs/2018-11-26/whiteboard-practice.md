---
title: Lambda Week 3 Whiteboard Practice - Ring Buffer
date: "2018-11-26"
---

## Whiteboard Practice

Lambda assigned me a partner to accomplish a whiteboard interview with another student.

>Like arrays that you saw in C, a ring buffer is a non-growable buffer with a fixed size. In this case, however, that turns out to be a feature of the data structure.

>When the ring buffer is full and a new element is inserted, the oldest element in the ring buffer is overwritten with the newest element. This kind of data structure is very useful for use cases such as storing logs and history information, where you typically want to store information up until it reaches a certain age, after which you don't care about it anymore and don't mind seeing it overwritten by newer data. 

>Implement this behavior in the `RingBuffer` class. `RingBuffer` has two methods, `append` and `allValues`. The `append` method adds elements to the buffer. The `allValues` method returns all of the elements in the buffer ordered from oldest to newest. In other words, least-recently added elements first, then most-recently added elements. 

GitHub repo for my assigned problem.
[Here](https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/RingBuffer) 

My demonstration video: https://youtu.be/YDZGgNuwk_E