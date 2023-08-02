---
title: How to become a terrible programmer
description: Have you ever thought, hey I'm too good at programming! Well here's how you can become a worse programmer at an enviable speed.
img: https://media.giphy.com/media/eaECZB7V6GACc/source.gif
alt: Terrible programmer
author: Giancarmelo
keywords: how to become a terrible programmer, how to become a bad programmer
cAt: 2021-01-10T07:12:00.000Z
uAt: 2021-01-10T07:12:00.000Z
categories: 
  - other
---



> We all aspire to become top-notch programmers, the kind of programmers we hear about on TV or social media. Here are just a few of the most famous ones: <br>

- ### Salvatore Sanfilippo 
  Known in the industry as "antirez," developer of REDIS, a cache database
- ### William Henry Gates III 
  <small>Bill Gates</small>
  Founder of Microsoft Corporation, a big shot in the industry
- ### Richard Stallman
  We remember him as one of the creators of the Linux kernel, which is widely used by programmers like us.

But we **don't** want to become one of the most famous ones, so here are **5** practical tips for writing terrible code:

> ## (1) => Declare variables however you want
> Don't give any importance to naming conventions or consistency between the name and its content. For example: 


``` js
const hgjfdu = "pippo";
```

Well done! Now your variables will be incomprehensible both to you and to future programmers who will have the unpleasant task of fixing all the bugs you have created.

> ## (2) => Iterate through an array for no reason and print the result
>  Printing values during code **debugging** is a common practice to try to understand where the error lies. But since we want to do the worst possible job, we will print values randomly without any real reason.


``` js
const dasdas = ["uno","due","tre","pippo","pluto"] 
if(true)
  dasdas.forEach( ddfdfd => console.error(ddfdfd) )
```

Well done! Having applied the first tip, it will be absolutely impossible to understand the reason for the error at first glance.


> ## (3) => Copy and paste code instead of creating classes or functions
> One of the things you need to do if you want to become a terrible programmer is definitely to repeat code, which is not very maintainable and significantly complicates code refactoring.


``` js
// Let's say we have to print 
// the Fibonacci sequence up 
// to a given index

let fib = []; 

fib[0] = 0;
fib[1] = 1;
for (let i = 2; i <= 3; i++) {
	fib[i] = fib[i - 2] + fib[i - 1];
	console.log(fib[i]);
}

// dopo righe di codice 
// o in un altro file

let fib = []; 

fib[0] = 0;
fib[1] = 1;
for (let i = 2; i <=6; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
``` 

Great, instead of structuring a function that passes the sequence number as a simple parameter, we preferred to copy everything and change the limit of the for loop. <i class="fas fa-thumbs-up"></i>

> ## (4) => Ignore possible code simplifications
> It often happens that the code can be simplified, but out of pure laziness or lack of knowledge, we prefer not to do it. This leads to very long code, which will result in unclear code in the future.

``` js
// Let's assume that a function returns
// Prefer a code like this
<br>
if (a < 0 && b > 0 && c == 0) {
   return true;
} else {
   return false;<br>

// Version for people who don't want
// to be a "terrible programmer"

return a < 0 && b > 0 && c == 0;
``` 

> ## (5) => Get a degree in physics and then teach computer science in high schools 
> If you want to be a terrible programmer, I recommend getting a very difficult degree in **physics** and then teaching computer science. This will lead you to write terrible code and understand even less.

![crazyimg](https://media.giphy.com/media/13GRR4ttt8hBXa/giphy.gif "gif")

> By following these simple yet effective tips, you can define yourself as **terrible programmer**
> <small>PS. Don't study physics if you want to teach computer science, please. </small>

</div>





