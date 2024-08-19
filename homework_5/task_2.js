// від 91 до 100 (включно), вивести "Відмінно"
// від 81 до 90 (включно), вивести "Дуже добре"
// від 71 до 80 (включно), вивести "Добре"
// від 60 до 70 (включно), вивести "Задовільно"
// менше 60, вивести "Незадовільно"

let averageGrade = 64;
let grade;

switch (true) {
    case (averageGrade >= 91):
        grade = "Відмінно";
        break;
    case (averageGrade >= 81):
        grade = "Дуже добре";
        break;
    case (averageGrade >= 71):
        grade = "Добре";
        break;
    case (averageGrade >= 60):
        grade = "Задовільно";
        break;
    case (averageGrade < 60):
        grade = "Незадовільно";
        break;
    default:
        grade = "Недійсне значення";
}
console.log(grade);