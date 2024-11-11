const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log("Testing Book class:");
book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, "PDF");
console.log("Testing EBook class:");
ebook1.printInfo();

const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const ebook2 = EBook.createEBookFromBook(book3, "ePub");
ebook2.printInfo();

const booksArray = [book1, book2, book3, ebook1, ebook2];
const oldestBook = Book.findOldestBook(booksArray);
console.log("Oldest Book:");
oldestBook.printInfo();
