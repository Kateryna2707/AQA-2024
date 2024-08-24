// від 91 до 100 (включно), вивести "Відмінно"
// від 81 до 90 (включно), вивести "Дуже добре"
// від 71 до 80 (включно), вивести "Добре"
// від 60 до 70 (включно), вивести "Задовільно"
// менше 60, вивести "Незадовільно"

let averageGrade = 73;

if (averageGrade >= 91 && averageGrade <= 100) {
  console.log('Відмінно');
} else if (averageGrade >= 81) {
  console.log('Дуже добре');
} else if (averageGrade >= 71) {
  console.log('Добре');
} else if (averageGrade >= 60) {
  console.log('Задовільно');
} else {
  console.log('Незадовільно');
}
