"use strict";

/*Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
включенными точками остановки.*/

//пример 1
/* 
c = 2 потому что инкремент (++) переменну а = 1 увеличивает на 1 
так как инкремент имеет префиксную форму в переменную с возвращается новое значение = 2 
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
//пример 2
/* 
d = 1 потому что инкремент (++) переменну b = 1 увеличивает на 1 но 
так как инкремент имеет постфиксную форму в переменную d возвращается старое значение = 1 
*/
d = b++;
alert(d); //ответ: 1
//пример 3
/* 
с = 5 потому что инкремент (++) переменну а = 2 увеличивает на 1 
и плюсует 2
*/
c = 2 + ++a;
alert(c); //ответ: 5
//пример 4
/* 
d = 4 потому что к переменну b = 2 прибавляется 2 
после постфиксный инкремент увеличивает переменную b на 1 тем самым переопределяя ее значение b = 3
переменная а = 3 потому что была два раза была переопределена инкрементом 
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
