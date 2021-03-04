---
title: "Python collections.Counter"
date: 2015-09-24T13:37:33-03:00
draft: false
image: "/images/computer.png"
---

From Luciano Ramalho ["Fluent Python"][0fc19ccf] book:

![Fluent Python Book from O'Reilly](http://akamaicovers.oreilly.com/images/0636920032519/lrg.jpg)

[0fc19ccf]: http://shop.oreilly.com/product/0636920032519.do "Buy at O'Reilly"


> **collections.Counter**
> A mapping that holds an integer count for each key. Updating an existing key adds to its count. This can be used to count instance of hashable objects (the keys) or as a multiset -- a set that can hold several occurences of each element. Counter implements + and - operators to combine tallies, and other useful methods such as most_common([n]), which returns an ordered list of tuples with the n most common items and their counts; see the documentation. Here is Counter used to count letters in words:
>
> <script src="https://gist.github.com/GuidoBR/fbedd911fbc42bb8440a.js"></script>

We can use this data structure to check if two strings are anagrams:

<script src="https://gist.github.com/GuidoBR/af32e5bc3ebd70b789ef.js"></script>

Want to know the most frequent words of a song? No problem!

<script src="https://gist.github.com/GuidoBR/7a685ac92366b7785e72.js"></script>

Computer biologist? How about get the frequency of nucleotides from a genome fasta file?
<script src="https://gist.github.com/GuidoBR/bf9d3a5fea086a502c59.js"></script>


**More information:**
- [Python 3 - Collections Documentation](https://docs.python.org/3/library/collections.html#collections.Counter)
- [PymBook - Collections](http://pymbook.readthedocs.org/en/latest/collections.html)
- [Python Module of the week - Collections](https://pymotw.com/2/collections/counter.html)
- [Playing with collections.Counter gist](https://gist.github.com/bradmontgomery/4717521)
- [Python Dictionaries](http://www.jeffknupp.com/blog/2015/08/30/python-dictionaries/)
- [Python Cookbook - most frequently occurring items in the sequence](http://chimera.labs.oreilly.com/books/1230000000393/ch01.html#_problem_12)
- [Counting things Pythonic way](http://treyhunner.com/2015/11/counting-things-in-python/)
