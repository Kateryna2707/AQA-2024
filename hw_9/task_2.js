// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
    title: "Кобзар",
    author: "Тарас Шевченко",
    year: 1840 
  };
  
  const { title, author } = book;
  
  console.log("Назва книги:", title);
  console.log("Автор книги:", author);
  