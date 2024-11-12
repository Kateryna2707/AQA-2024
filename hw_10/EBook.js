const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a non-empty string.");
    }
    this._fileFormat = value;
  }

  // Перевизначений метод для виведення інформації про EBook
  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this.fileFormat}`);
  }

  // Статичний метод для створення EBook з екземпляру Book
  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;
