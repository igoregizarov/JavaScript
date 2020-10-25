"use strict";

/*Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
.*/

let a = 2;
let x = 1 + (a *= 2);

/*
1. Обьявляем переменную a и присваиваем ей значение 2
2. Обьявляем переменную x и присваиваем ей вычисляемое значение
3. Согласно асоциативности сначало выполнится операция в скобках
4. В скобках записано сокращенное выражение от (a = a * 2) что равно 4
5. После полученное значение прибавляется 1
6. Значение переменной x = 5
7. Значение переменной a изначально = 4, но я так понимаю после вычесления
переменной х значение переменной а переопределяется и становится = 4
*/