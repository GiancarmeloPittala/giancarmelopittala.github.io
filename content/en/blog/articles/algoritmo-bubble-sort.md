---
title: Bubble Sort, sorting algorithm in c++
description: Bubble Sort is an iterative sorting algorithm, one of the simplest to implement, with a complexity of O(n^2)
img: /images/articles/bubble-sort.gif
alt: bubble sort
author: Giancarmelo
keywords: Bubble Sort cpp, Bubble Sort, Bubble Sort c++
cAt: 2021-01-25T17:56:57.658Z
uAt: 2021-01-25T20:33:34.535Z
categories: 
  - cpp
  - algoritmo
  - tutorial
---

## Introduction

The BubbleSort algorithm is based on the idea of gradually "bringing up" the smallest elements towards the beginning of the set to be sorted, while at the same time "sinking" the larger elements towards the end of the set.

### Why sort?

> It is possible to perform a search, or any operation without sorting, with a certain criterion, a series of data.

Sorting the data facilitates the search if performed with a criterion, for example, if we have an array x = [4,7,8,43,54,62]; it will be very simple to use algorithms that exploit the so-called **Divide et impera** which will reduce the search for a certain value, for example "54", to a handful of steps, you can already have at the first step the array [54,62] and immediately after find the value sought, instead of iterating the entire array from position 0 to position n, where n in our case is 4.


## Strategy 

> The strategy adopted is to scroll through the sequence to be sorted several times, checking at each step the mutual order of the **adjacent** elements, a<sub>i</sub> and a <sub>i + 1</sub>, and eventually swapping the unordered pairs.

Example:

- A = [**3**,**5**,2,4,1] => [3,**5**,**2**,4,1] => [3,2,**5**,**4**,1] => [3,2,4,**5**,**1**] ==> [3,2,4,1,5]
- A = [**3**,**2**,4,1,5] => [2,**3**,**4**,1,5] => [2,3,**4**,**1**,5] => [2,3,1,4,5]
- A = [**2**,**3**,1,4,5] => [2,**3**,**1**,4,5] => [2,1,3,4,5]
- A = [**2**,**1**,3,4,5] => [1,2,3,4,5]

At the end of each of the four scans of the sequence, the largest element of the subset still to be sorted ends up at the end of the sequence, in its definitively correct position, while the still unsorted subsequence is reduced for each pass. <br /><br />
Now let's see a representation in c++ code.
<br /><br />

```cpp
#include <iostream>

using namespace std;

int main(){

  const short size = 20;
  int elementi[size] = { 0 };

  //populate the elementi array with random values between 3 and 99 (inclusive)
  for(int i = 0; i< size; i++)
    elementi[i] = rand() % 100 + 3;

  cout << "Pre-ordine\n";
  for( auto e : elementi)
      cout << e << " ";
  cout << endl;

  // inizio bubblesort
  for(int i = 0; i< size -1; i++)
      for( int j = 0; j< size - 1 - i; j++)
          if( elementi[j] > elementi[ j + 1])
            swap( elementi[j], elementi[ j + 1]);
  // fine bubblesort 

  cout << "Post-ordine\n";
  for( auto e : elementi)
      cout << e << " ";
  cout << endl;


  return 0;
}
```