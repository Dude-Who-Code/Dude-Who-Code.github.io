---
layout: post
title:  "Python Lists"
---
# Lists in Python
List in python is a built in data type for storing multiple values in a single variable.
Example list: `a = [1,2,3,4,"a","b","c","d",3,2,1,True,False]`
## Characteristics
 - Ordered
 - Mutable
 - Allows duplicate elements
 - Allows Different data types

## How to create lists?
```python
myList = ["a", "b", "c", "d", 1, 2, 3, 1, True]
```
__Using List function__
``` python
myList2 = list() # creates an empty list
```

## How to access elements?
Can be accessed with the `index` values. Index starts with `zero`
``` python
el2 = myList[1]
```
Negative numbers can be used to traverse the list from the last. For example, index `-1` would be the last and `-2` would be second last.
``` python
last = myList[-1]
secondLast = myList[-2]
```

### Iterating through the list
We can use the `for in` loop to iterate over the list
```python
for i in myList:
    print(i)
```

### Check if item exists in the list
We can achieve this by `if condition` like below
```python
if 2 in myList:
    print("The element 2 is present")
else:
    print("The element is not preset")
```

## List methods
 - `len()` => Will return the length of list
    - E.g. `len(myList)` => will return 9
 - `append()` => Will append the new element to the end of list
    - E.g. `myList.append(23)` => 23 would be added as the last element in the list
 - `insert()` => Will insert element to specified index
    - E.g. `myList.insert(1, 7)` => 7 would be inserted in the index 1
 - `pop()` => Will return the last element and removes it from the list
    - E.g. `myList.pop()` => 23 would be returned and will be removed from the list
 - `remove()` => Will remove specified item from the list
    - E.g. `myList.remove(2)` => The element 2 would be removed from the list
 - `clear()` => Will empty the list
    - E.g. `myList.clear()`
 - `reverse()` => Will reverse the list
    - E.g. `myList.reverse()`
 - `sort()` => Will sort the list
    - `myList.sort()` => Sorts in descending order
    - `newList = sorted(myList)` => will return the list sorted in descending order
#### Some Tricks
 - `myList = [1] * 3` => This would create list like this: [1,1,1]
 - Concatenation
```python
list1 = [1,2,3,4,5]
list2 = [6,7,8,9,0]
fullList = list1 + list2 # Will hold [1,2,3,4,5,6,7,8,9,0]
```
 - Slicing
```python
someList = [1,2,3,4,5,6,7,8]
someList[1:5] # Will contain [2,3,4,5]
someList[:5] # Will contain [1,2,3,4,5]
someList[1:] # Will contain [2,3,4,5,6,7,8]
someList[::1] # Will contain [1,2,3,4,5,6,7,8] (Steps)
someList[::2] # Will contain [1,3,5,7] (Steps)
someList[::-1] # Will contain [8,7,6,5,4,3,2,1] (Reverse)
```
 - Copying list
```python
someList = ["a","b","c","d"]
copyList = someList # Both will be same now

print(someList) # ["a","b","c","d"]
print(copyList) # ["a","b","c","d"]

copyList.append("e")

print(someList) # ["a","b","c","d","e"]
print(copyList) # ["a","b","c","d","e"]

copyList2 = someList.copy() # Can also use list(someList) or someList[:] to get copy of actual list

print(someList) # ["a","b","c","d","e"]
print(copyList2) # ["a","b","c","d","e"]

someList.pop()

print(someList) # ["a","b","c","d"]
print(copyList) # ["a","b","c","d"]
print(copyList2) # ["a","b","c","d","e"]
```
 - List comprehension
```python
someList = [1,2,3,4,5]
squareList = [i*i for i in someList]
print(someList) # [1,2,3,4,5]
print(squareList) # [1,4,9,16,25]
```
