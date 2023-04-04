---
title: Come diventare un pessimo programmatore
description:  Ti sarà capitato di pensare, ehy ma sono troppo sul pezzo!, bhe qui potrai peggiorare con una velocità invidiabile.
img: https://media.giphy.com/media/eaECZB7V6GACc/source.gif
alt: pessimo programmatore
author: Giancarmelo
keywords: come diventare un pessimo programmatore, come diventare un cattivo programmatore
cAt: 2021-01-10T07:12:00.000Z
uAt: 2021-01-10T07:12:00.000Z
categories: 
  - other
---



> Un po tutti ambiscono a diventare dei programmatori con i fiocchi, uno di quei programmotori di cui si
> sente parlare in televisione o nei social, ne cito giusto i più conosciuti: <br>

- ### Salvatore Sanfilippo 
  Conosciuto nell'ambiente come "antirez", sviluppatore di REDIS, in cache database
- ### William Henry Gates III 
  <small>Bill Gates</small>
  fondatore di microsoft corporation, un bel pezzo grosso
- ### Richard Stallman
  Lo ricordiamo come uno dei creatori del kernel Linux, tanto usato da noi programmatori

Ma a noi **non** interessa diventare uno tra i più famosi quindi ecco **5** pratici consigli per scrivere del pessimo codice:

> ## (1) => Dichiara le variabili come capita 
>
>  Non dare alcuna importanza alla nomenclatura ne alla coerenza del nome con il suo contenuto
>  es: 


``` js
const hgjfdu = "pippo";
```

Ben fatto!, ora le tue variabili risulteranno incomprensibili sia a te che ai futuri programmatori che avranno lo spiacevole onore di dover fixare tutti i bug che avrai creato.

> ## (2) => Itera array senza alcuna ragione e manda a video il risultato
>
>  Pratica comune durante il <strong>debug</strong> di codice, stampare i valori per cercare di capire dove
> si insidi l'errore. Ma noi essendo che dobbiamo dare il peggio, stamperemo valori a caso senza che ci sia
> un reale motivo


``` js
const dasdas = ["uno","due","tre","pippo","pluto"] 
if(true)
  dasdas.forEach( ddfdfd => console.error(ddfdfd) )
```

Ben fatto!, Avendo applicato il primo consiglio risulterà assolutamente impossibile capire a primo impatto la motivazione dell'errore.


> ## (3) => Copia e incolla codice, invece di creare classi o funzioni
> 
>  Una delle cose che bisogna fare se si vuole diventare un **pessimo** programmatore, è 
>  sicuramente ripetere codice, che risulta essere poco mantenibile e complica notevolmente il refactoring
>  del codice.
> 


``` js
// ipotizziamo di dover stampare 
// la sequenza di fibonacci fino 
// a un indice dato

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

Grandioso, invece di strutturare una funzione che passi come semplice parametro il numero della sequenza come limite, abbiamo preferito ricopiare il tutto cambiando il limite del for <i class="fas fa-thumbs-up"></i>

> ## (4) => Ignora possibili semplificazioni del codice 
>
> Capita spesso di poter semplificare il codice, ma per pura pigrizia o per mancata conoscenza si 
> preferisce  non farlo, il tutto porta a codice molto lungo, che porterà in futuro ad un codice poco chiaro 

``` js
//ipotizziamo il return di una funzione
//Preferire un codice del genere 
<br>
if (a < 0 && b > 0 && c == 0) {
   return true;
} else {
   return false;<br>

// versione da gente che non
//vuole passare per "pessimo programmatore"

return a < 0 && b > 0 && c == 0;
``` 

> ## (5) => Prendere una laurea in fisica per poi insegnare informatica nelle scuole di secondo grado 
> 
>  Se volete essere dei programmatori pessimi vi consiglio di prendere una faticosissima laurea in 
>  **fisica** per poi insegnare *informatica*, questo vi porterà a scrivere del codice pessimo e 
>  capirne ancora meno

![crazyimg](https://media.giphy.com/media/13GRR4ttt8hBXa/giphy.gif "gif")

> Seguiti questi semplici ma efficaci consigli vi potrete definire dei veri **PESSIMI PROGRAMMATORI</>**
> <br>
> <small>PS. Non studiate fisica se volete insegnare informatica pls </small>

</div>





