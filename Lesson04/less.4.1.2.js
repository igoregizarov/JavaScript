/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

'use strict'

// стиль es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;

}

Post.prototype.edit = function (some_text) {
    return this.text = some_text;
}

function AttachedPost(author, text, date, highlighted = false) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    return this.highlighted = true;
}

// для проверки

const varib1 = new Post('Alf', 'Hi!', '02.11.2020')
console.log(varib1.text);
console.log(varib1.edit('Bay!'));


const varib2 = new AttachedPost('Alf', 'Hi!', '02.11.2020')
console.log(varib2.author);
console.log(varib2.highlighted);
console.log(varib2.makeTextHighlighted());

// стиль es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(some_text) {
        return this.text = some_text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted() {
        return this.highlighted = true;
    }
}