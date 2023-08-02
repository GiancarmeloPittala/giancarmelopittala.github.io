---
title: Check if a string is a palindrome in C++
description: Given a string, we will check whether it is a palindrome or not.
img: /images/articles/stringa-palindroma.webp
alt: palindrome
author: Giancarmelo
keywords: palindrome string, palindrome string in c++, palindrome string in cpp, c++ palindrome string, cpp palindrome string
cAt: 2021-01-17T19:27:10.934Z
uAt: 2021-01-17T19:27:10.934Z
categories: 
  - cpp
  - tutorial
---



## Check if a string is a palindrome in C++

> One of the most common exercises when learning to program with strings is to check whether a **string** is a **palindrome** or not. First of all, let's define what a palindrome is: it is a string that reads the same backward as forward. For a more accurate description, I recommend [Palindroma Definition](https://www.treccani.it/vocabolario/palindromo/ "palindrome definition").

Now that we know what a palindrome is, all we have to do is turn our idea into code.

### Given an input string, check if it's a palindrome.

First, let's define a function that returns true or false depending on whether the string is a palindrome or not.

```cpp
bool isPalindroma(string str){
  for(int i = 0, _i = str.length()-1; i< str.length() / 2; i++){
    if(str[i] != str[_i--])
      return false;
  }
  return true;
}
```

The reasoning here is very simple. I iterate through the string from index **0** to index **str.length() / 2**, which is the middle of the string, and ask a simple question: is the element at position i **different** from the element at position str.length() - 1 - i? If this condition is true, the string is not a **palindrome**, so I return **false**. Otherwise, I continue with the loop until I reach the middle of the string. If the loop completes, the string is a **palindrome**, so I return true.

<img w40 src="https://media.giphy.com/media/3oKIPc9VZj4ylzjcys/giphy.gif" alt="frattale" />

Now all we have to do is use it in our main function.

```cpp
int main(){

  string str = "";
  cin >> str;

  string isP = isPalindrome(str) ? "is a palindrome " : "is not a palindrome ";
  cout << str << isP;
  return 0; 
}
```

<small>P.S. Don t forget to include string, iostream, and the std namespace at the beginning of the file.</small>


```cpp
#include < iostream >
#include < string >
```

<img w40 src="https://media.giphy.com/media/STfy5ufhXc3ukuioLT/giphy.gif" alt="gg"/>