"use strict";

/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.*/

let a = Number(prompt('Введите произвольное целочисленное значение №1: '))
let b = Number(prompt('Введите произвольное целочисленное значение №2: '))
let c = prompt('Что сделать: +, -, *, /')

function SumNumb(var_1, var_2) {
    return var_1 + var_2
}

function SubNumb(var_1, var_2) {
    return var_1 - var_2
}

function DivNumb(var_1, var_2) {
    return var_1 / var_2
}

function MullNumb(var_1, var_2) {
    return var_1 * var_2
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return SumNumb(arg1, arg2);
        case '-':
            return SubNumb(arg1, arg2);
        case '/':
            return DivNumb(arg1, arg2);
        case '*':
            return MullNumb(arg1, arg2);
    }
}

alert(mathOperation(a, b, c))