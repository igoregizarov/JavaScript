"use strict";

/* (Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.*/

let cash = prompt('Какое количество денег вы хотите внести?');
let n = cash.slice(-1);
if (n == 0 || n > 4) {
    alert(`Ваша сумма в ${cash} рублей успешно зачислена.`)
} else if (n == 1) {
    alert(`Ваша сумма в ${cash} рубль успешно зачислена.`)
} else {
    alert(`Ваша сумма в ${cash} рубля успешно зачислена.`)
};