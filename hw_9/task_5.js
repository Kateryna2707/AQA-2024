// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Анна", email: "anna@test.com", age: 28 },
    { name: "Богдан", email: "bogdan@test.com", age: 35 },
    { name: "Катерина", email: "kateryna@test.com", age: 22 }
  ];
  
  for (const user of users) {
    const { name, email, age } = user;
    console.log("User:", name, email, age);
  }
  