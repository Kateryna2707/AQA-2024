// Використовуємо fetch, щоб отримати дані з сайту
fetch('https://api.weather.com/v3/weather/forecast')
  .then((response) => response.json()) //перетворюємо відповідь на формат, який можемо зрозуміти
  .then((data) => {
    console.log(data); //виводимо дані в консоль
  })
  .catch((error) => {
    console.error('Сталася помилка:', error); //якщо щось пішло не так
  });
