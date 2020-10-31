/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

"use strict";

function for_consol(n, el) {
    if (n == 0) {
        console.log(el);
        return true;
    } else if (n < 21) {
        let res = 'x';
        while (n > 0) {
            res += el;
            n--;
        }
        console.log(res);
        return true;
    }

};

let simbl = 'x';
for (let i = 0; for_consol(i, simbl); i++) { };

/* в пайтоне данная задачка решается тривиально в три строчки так как можно строку умножать на число
я наверное не лаконично решил задачу хоть она и работает
*/