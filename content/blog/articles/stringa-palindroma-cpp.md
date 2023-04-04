---
title: Stringa palindroma in c++
description: Data una stringa, verificheremo se si parla di una stringa palindroma o meno
img: /images/articles/stringa-palindroma.webp
alt: palindroma
author: Giancarmelo
keywords: stringa palindroma, stringa palindroma c++, stringa palindroma cpp, c++ stringa palindroma, cpp stringa palindroma
cAt: 2021-01-17T19:27:10.934Z
uAt: 2021-01-17T19:27:10.934Z
categories: 
  - cpp
  - tutorial
---



> Uno dei esercizi più comuni quando si sta imparando a programmare con le stringe, è verificare se una 
> **stringa** *è* **palindroma** oppure no.<br>
> Prima di tutto diamo una definizione:<br>
> palindroma «all’indietro, all’inverso», una stringa si dice palindroma quando risulta uguale al suo 
> inverso. Per una descrizione più accurata consiglio [Def. Palindroma](https://www.treccani.it/vocabolario/palindromo/ "definizione palindromo")

Capito cosa sia una stringa palindroma non resta altro che trasformare la nostra idea in codice. 
  
###  Data una stringa in input verificare se è palindroma
  
> Prima di tutto definiamo una funzione che ci ritorni true o false a seconda se si sta parlando di una 
> stinga palindroma o no
  
```cpp
bool isPalindroma(string str){
  for(int i = 0, _i = str.length()-1; i< str.length() / 2; i++){
    if(str[i] != str[_i--])
      return false;
  }
  return true;
}
```

Qui il ragionamento è molto semplice, Itero la stringa dall'indice **0** fino all'indice **str.length() / 2**, quindi fino alla metà della stringa, e verifico una semplice domanda, l'elemento in posizione i è **diverso** dall'elemento in posizione str.length() - 1 - i ?, se si verifica questa condizione la stringa non é **palindroma** quindi ritorno **false**, altrimenti continuo con il ciclo fino alla metà della stringa, se passa il ciclo la mia stringa sarà **Palindroma** quindi ritorno true.

<img w40 src="https://media.giphy.com/media/3oKIPc9VZj4ylzjcys/giphy.gif" alt="frattale" />

Non ci resta altro se non usarla sul nostro **main**

```cpp
int main(){

  string str = "";
  cin >> str;

  string isP = isPalindroma(str) ? "e' Palindroma " : "non è palindroma ";
  cout << str <<isP;
  return 0; 
}
```

<small>Ps. Non dimenticatevi di includere string, iostream e namespace std all'inizio del file</small>

```cpp
#include < iostream >
#include < string >
```

<img w40 src="https://media.giphy.com/media/STfy5ufhXc3ukuioLT/giphy.gif" alt="gg"/>