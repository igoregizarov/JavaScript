/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
*/

'use strict'

// стиль es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function (discount) {
    return this.price = this.price - (this.price / 100 * discount);
}

// для проверки работоспособности

const prod1 = new Product('Glass', 100);
const prod2 = new Product('Hat', 1000);

console.log(prod1.name);
console.log(prod1.make25PercentDiscount(10))
console.log(prod2.make25PercentDiscount(50))

// стиль es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(discount) {
        return this.price = this.price - (this.price / 100 * discount);
    }
}

// для проверки работоспособности

const prod1 = new Product('Manto', 1000);
const prod2 = new Product('Boots', 700);
console.log(prod1.name);
console.log(prod1.make25PercentDiscount(10))
console.log(prod2.make25PercentDiscount(50))