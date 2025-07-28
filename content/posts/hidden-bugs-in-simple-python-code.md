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

    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2.2em;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .step {
            margin: 30px 0;
            padding: 20px;
            border-radius: 10px;
            background: #f8f9fa;
            border-left: 5px solid #667eea;
            transition: all 0.3s ease;
        }

        .step:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .step-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }

        .step-number {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
        }

        .list-visualization {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            flex-wrap: wrap;
            gap: 10px;
        }

        .list-item {
            background: #e3f2fd;
            border: 2px solid #2196f3;
            border-radius: 8px;
            padding: 12px 16px;
            margin: 5px;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            min-width: 120px;
            text-align: center;
            position: relative;
            transition: all 0.3s ease;
        }

        .list-item.http-item {
            background: #ffebee;
            border-color: #f44336;
            color: #c62828;
        }

        .list-item.normal-item {
            background: #e8f5e8;
            border-color: #4caf50;
            color: #2e7d32;
        }

        .list-item.removed {
            background: #fafafa;
            border-color: #bdbdbd;
            color: #757575;
            text-decoration: line-through;
            opacity: 0.6;
            transform: scale(0.9);
        }

        .list-item.skipped {
            background: #fff3e0;
            border-color: #ff9800;
            color: #f57c00;
            animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .iterator-pointer {
            font-size: 24px;
            color: #667eea;
            font-weight: bold;
            margin-top: 5px;
        }

        .index-label {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            background: #667eea;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }

        .explanation {
            background: #f0f7ff;
            border-left: 4px solid #2196f3;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-style: italic;
            color: #1565c0;
        }

        .code-block {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            overflow-x: auto;
        }

        .highlight {
            background: #fff59d;
            padding: 2px 4px;
            border-radius: 3px;
            font-weight: bold;
        }

        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            color: #856404;
        }

        .warning::before {
            content: "⚠️ ";
            font-size: 1.2em;
        }

        .interactive-note {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin: 30px 0;
            font-weight: bold;
        }
    </style>

    <div class="container">
        <h1>🐛 The List Iteration Bug: Visual Explanation</h1>
        
        <div class="interactive-note">
            Understanding why modifying a list while iterating can skip elements
        </div>

### Problematic code that demonstrates the bug
        <div class="step">
            <div class="step-title">
                <div class="step-number">1</div>
                Initial State
            </div>
            <div class="list-visualization">
                <div class="list-item http-item">
                    <div class="index-label">0</div>
                    'http://a.com'
                </div>
                <div class="list-item http-item">
                    <div class="index-label">1</div>
                    'http://b.com'
                </div>
                <div class="list-item normal-item">
                    <div class="index-label">2</div>
                    'keep_this'
                </div>
            </div>
            <div class="iterator-pointer" style="text-align: center;">
                ↑ Iterator starts at index 0
            </div>
            <div class="explanation">
                The list has 3 items. The iterator begins at index 0, pointing to 'http://a.com'.
            </div>
        </div>

        <div class="step">
            <div class="step-title">
                <div class="step-number">2</div>
                First Iteration - Remove 'http://a.com'
            </div>
            <div class="list-visualization">
                <div class="list-item removed">
                    'http://a.com'
                </div>
                <div class="list-item http-item">
                    <div class="index-label">0</div>
                    'http://b.com'
                </div>
                <div class="list-item normal-item">
                    <div class="index-label">1</div>
                    'keep_this'
                </div>
            </div>
            <div class="iterator-pointer" style="text-align: center;">
                ↑ Iterator moves to index 1
            </div>
            <div class="explanation">
                Item 'http://a.com' is removed. All remaining items shift left by one position. 
                But the iterator automatically moves to index 1 for the next iteration!
            </div>
            <div class="warning">
                <strong>The Problem:</strong> 'http://b.com' moved from index 1 to index 0, but the iterator is now pointing to index 1, which contains 'keep_this'!
            </div>
        </div>

        <div class="step">
            <div class="step-title">
                <div class="step-number">3</div>
                Second Iteration - 'http://b.com' Gets Skipped!
            </div>
            <div class="list-visualization">
                <div class="list-item skipped">
                    <div class="index-label">0</div>
                    'http://b.com' ← SKIPPED!
                </div>
                <div class="list-item normal-item" style="background: #fff59d; border-color: #fbc02d;">
                    <div class="index-label">1</div>
                    'keep_this' ← Currently processing
                </div>
            </div>
            <div class="iterator-pointer" style="text-align: center;">
                ↑ Iterator is now at index 1
            </div>
            <div class="explanation">
                The iterator is now at index 1, which contains 'keep_this'. The item 'http://b.com' 
                at index 0 is never checked because the iterator already passed that position!
            </div>
        </div>

        <div class="step">
            <div class="step-title">
                <div class="step-number">4</div>
                Final Result - Bug Demonstrated
            </div>
            <div class="list-visualization">
                <div class="list-item skipped">
                    <div class="index-label">0</div>
                    'http://b.com' ← Still in the list!
                </div>
                <div class="list-item normal-item">
                    <div class="index-label">1</div>
                    'keep_this'
                </div>
            </div>
            <div class="explanation">
                <strong>Result:</strong> The list still contains 'http://b.com' even though it should have been removed! 
                This is because it was skipped during iteration due to the index shifting.
            </div>
        </div>

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
