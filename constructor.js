// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'


//getter and setter

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);