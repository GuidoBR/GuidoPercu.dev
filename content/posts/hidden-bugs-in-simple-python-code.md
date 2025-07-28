---
title: "Hidden Bugs in Simple Python Code"
date: 2025-07-27T20:16:43-04:00
draft: true
---

# Hidden Bugs in Simple Python Code: A Learning Exercise

Have you ever looked at a piece of code that seemed straightforward, only to discover it was riddled with subtle bugs? Today, I want to walk you through a deceptively simple Python function that contains not one, not two, but three common pitfalls that can trip up even experienced developers.

## The Problematic Code

Let's start with this innocent-looking function:

```python
def clean_list(list: list = []):
    for item in list:
        if item.startswith('http'):
            list.remove(item)
    return list

a = clean_list(['http://example.com', 'http://example.org', 'http://example.net'])
b = clean_list()
c = clean_list()

c.append('http://example.com.br')
print(c)
```

At first glance, this function appears to remove all items starting with 'http' from a list. But when you run this code, you'll encounter some unexpected behavior. Let's dive into what's wrong.

## Bug #1: The Mutable Default Argument Trap

The first and perhaps most insidious bug lies in this line:

```python
def clean_list(list: list = []):
```

**The Problem:** In Python, default arguments are evaluated only once when the function is defined, not each time it's called. This means that the empty list `[]` is created once and shared across all function calls that don't provide an argument.

**The Impact:** In our example, both `b` and `c` reference the same list object. When we append to `c`, we're actually modifying the shared default list, which explains why `print(c)` shows the appended item even though we never explicitly added anything to a "new" list.

**The Lesson:** Never use mutable objects (lists, dictionaries, sets) as default arguments unless you specifically want them to be shared across function calls.

## Bug #2: Modifying a List While Iterating

The second bug is in the core logic:

```python
for item in list:
    if item.startswith('http'):
        list.remove(item)
```

Understanding why modifying a list while iterating can skip elements

```python
# Problematic code that demonstrates the bug
my_list = ['http://a.com', 'http://b.com', 'keep_this']
for item in my_list:
    if item.startswith('http'):
        my_list.remove(item)
```

### Step 1: Initial State

```
Index:    [0]              [1]              [2]
Items:   'http://a.com'   'http://b.com'   'keep_this'
Iterator: ↑ (starts here)
```

**What's happening:**
- The list has 3 items at indices 0, 1, and 2
- The iterator begins at index 0, pointing to 'http://a.com'

---

### Step 2: First Iteration - Remove 'http://a.com'

**Before removal:**
```
Index:    [0]              [1]              [2]
Items:   'http://a.com'   'http://b.com'   'keep_this'
Iterator: ↑ (processing)
```

**After removal:**
```
Index:    [0]              [1]
Items:   'http://b.com'   'keep_this'
Iterator:                  ↑ (moves to index 1)
```

**What's happening:**
- Item 'http://a.com' is removed from index 0
- All remaining items shift left by one position:
  - 'http://b.com' moves from index 1 → index 0
  - 'keep_this' moves from index 2 → index 1
- The iterator automatically advances to index 1 for the next iteration

⚠️ **The Problem:** 'http://b.com' moved from index 1 to index 0, but the iterator is now pointing to index 1, which contains 'keep_this'!

---

### Step 3: Second Iteration - 'http://b.com' Gets Skipped!

```
Index:    [0]              [1]
Items:   'http://b.com'   'keep_this'
Iterator: ❌ SKIPPED!      ↑ (currently processing)
```

**What's happening:**
- The iterator is now at index 1, which contains 'keep_this'
- The item 'http://b.com' at index 0 is never checked because the iterator already passed that position
- 'keep_this' doesn't start with 'http', so it's not removed

---

### Step 4: Final Result - Bug Demonstrated

```
Index:    [0]              [1]
Items:   'http://b.com'   'keep_this'
Result:   ❌ Should be     ✅ Correctly
          removed but      kept
          still here!
```

**Final State:**
- The list still contains `['http://b.com', 'keep_this']`
- 'http://b.com' should have been removed but wasn't!
- This happened because it was skipped during iteration due to index shifting

---

**The Problem:** When you modify a list while iterating over it, the iterator doesn't adjust for the changing list structure. As items are removed, subsequent items shift positions, causing some elements to be skipped entirely.

**Example:** If you have `['http://a.com', 'http://b.com', 'keep']`, after removing the first item, 'http://b.com' moves to index 0, but the iterator has already moved to index 1, skipping it entirely.

**The Impact:** Some items that should be removed might survive the cleaning process, leading to inconsistent results.

## Bug #3: Shadowing Built-in Types

The third issue is more subtle but still problematic:

```python
def clean_list(list: list = []):
```

**The Problem:** Using `list` as a parameter name shadows Python's built-in `list` type within the function scope.

**The Impact:** While this doesn't break the code in this simple example, it prevents you from using the `list()` constructor inside the function and can confuse other developers reading your code.

**The Lesson:** Avoid using names that shadow built-in Python types and functions.

## The Solution: Clean, Safe Code

Here's the corrected version that addresses all three issues:

```python
def clean_list(items: list = None):
    """
    Remove all items that start with 'http' from a list.
    
    Args:
        items (list, optional): List of strings to clean. Defaults to empty list.
    
    Returns:
        list: A new list with items that don't start with 'http' removed.
    
    Examples:
        >>> clean_list(['http://example.com', 'hello', 'http://test.org', 'world'])
        ['hello', 'world']
        
        >>> clean_list(['no', 'http', 'links', 'here'])
        ['no', 'http', 'links', 'here']
        
        >>> clean_list([])
        []
        
        >>> clean_list()
        []
        
        >>> clean_list(['http://site1.com', 'http://site2.com'])
        []
        
        >>> clean_list(['https://secure.com', 'http://insecure.com', 'ftp://files.com'])
        ['https://secure.com', 'ftp://files.com']
        
        >>> clean_list(['HTTP://CAPS.COM', 'mixed content'])
        ['HTTP://CAPS.COM', 'mixed content']
    """
    if items is None:
        items = []
    
    return [item for item in items if not item.startswith('http')]


if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## What Makes This Version Better

**1. Safe Default Arguments:** Using `None` as the default and creating a new list inside the function ensures each call gets its own list instance.

**2. No Iteration Issues:** The list comprehension creates a new list rather than modifying the original during iteration, eliminating the skipping problem.

**3. Clear Parameter Names:** Using `items` instead of `list` avoids shadowing built-in types.

**4. Comprehensive Documentation:** The docstring with doctests makes the function's behavior crystal clear and provides automated testing.

**5. Functional Approach:** The function returns a new list rather than modifying the input, following functional programming principles and avoiding side effects.

## Key Takeaways

These bugs demonstrate why code review and testing are so crucial in software development. What appears to be simple, working code can harbor subtle issues that only manifest under specific conditions. By understanding these common Python pitfalls, you can write more robust and predictable code.

Remember:

- Use `None` as the default for mutable parameters
- Avoid modifying collections while iterating over them
- Don't shadow built-in names
- Write comprehensive tests (doctests are great for this!)
- Consider functional approaches that avoid side effects

The next time you write a "simple" function, take a moment to consider these potential pitfalls. Your future self (and your colleagues) will thank you for it.
