---
title: Bubble Sort, algoritmo d'ordinamento in c++ 
description: Il Bubble Sort è un algoritmo d'ordinamento iterativo, fra i più semplici da implementare, con una complessità di O(n^2)
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

## Introduzione

L'algoritmo BubbleSort (ordinamento "a bolle") si basa sull'idea di far "emergere" man mano gli elementi più piccoli verso l'inizio dell'insieme da 

ordinare facendo "sprofondare" al tempo stesso gli elementi più grandi verso la fine dell'insieme

### Perché ordinare?

> Si potrebbe eseguire la ricerca, o qualsiasi operazione senza ordinare, *con un determinato criterio*, una serie di dati.

Ordinare i dati agevola la ricerca se eseguita con un criterio, se a esempio, abbiamo un array x = [4,7,8,43,54,62]; sarà molto semplice utilizzare algoritmi che sfruttano in cosiddetto **Divide et impera** che ridurrà ad una manciata di passaggi la ricerca di un determinato valore ad esempio il "54", si potrà avere già a un primo passaggio l'array [54,62] e subito dopo trovare immediatamente il valore cercato, invece di iterare l'intero array fin dalla posizione 0 alla posizone n, dove n nel nostro caso è 4


## Strategia 

> La strategia adottata è quella di scorrere più volte la sequenza da ordinare, verificando ad ogni passo l'ordinamento reciproco degli elementi **contigui**, a<sub>i</sub> e a <sub>i + 1</sub>, ed eventualmente scambiare le coppie non ordinate.

esempio:

- A = [**3**,**5**,2,4,1] => [3,**5**,**2**,4,1] => [3,2,**5**,**4**,1] => [3,2,4,**5**,**1**] ==> [3,2,4,1,5]
- A = [**3**,**2**,4,1,5] => [2,**3**,**4**,1,5] => [2,3,**4**,**1**,5] => [2,3,1,4,5]
- A = [**2**,**3**,1,4,5] => [2,**3**,**1**,4,5] => [2,1,3,4,5]
- A = [**2**,**1**,3,4,5] => [1,2,3,4,5]

Alla fine di ognuna delle quattro scansioni della sequenza, l'elemento più grande del sottoinsieme ancora da ordinare, finisce in fondo alla sequenza, nella sua posizione definitivamente corretta, mentre la sotto sequenza ancora non ordinata si riduce per ogni passaggio <br /><br />
Ora vediamo una rappresentazione in codice c++
<br /><br />

```cpp
#include <iostream>

using namespace std;

int main(){

  const short size = 20;
  int elementi[size] = { 0 };

  //popoliamo l'array elementi con valori casuali compresi tra 3 e 99 ( estremi inclusi )
  for(int i = 0; i< size; i++)
    elementi[i] = rand() % 100 + 3;

  cout << "Pre ordinamento\n";
  for( auto e : elementi)
      cout << e << " ";
  cout << endl;

  // inizio bubblesort
  for(int i = 0; i< size -1; i++)
      for( int j = 0; j< size - 1 - i; j++)
          if( elementi[j] > elementi[ j + 1])
            swap( elementi[j], elementi[ j + 1]);
  // fine bubblesort 

  cout << "Post ordinamento\n";
  for( auto e : elementi)
      cout << e << " ";
  cout << endl;


  return 0;
}
```